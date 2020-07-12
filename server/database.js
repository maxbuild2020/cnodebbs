const express = require('express')
const bodyParse = require('body-parser')
const app = express()
const jwt = require('jsonwebtoken')
const secret = 'mnl'
// let cookie = require('cookie')

const mysql      = require('mysql');
const { json } = require('body-parser');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'cnbbs'
});


connection.connect(function (err) {
    if(err){
        console.error('error connecting:'+ err.stack);
        return;
    }
    console.log('connected as id'+ connection.threadId);
});

app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())



app.post('/api/register', bodyParse.json(), (req, res) => {
    if(req.body.username.length <3 || req.body.username.length >10){
        res.send('{"status":"1","message":"用户名长度有误3-10位"}');
        return
    }
    if(req.body.password.length <6 || req.body.password.length >10){
        res.send('{"status":"1","message":"密码长度有误3-10位"}');
        return
    }
    if(req.body.username ==='' || req.body.password ==='' || req.body.repassword ==='' ){
        res.send('{"status":"2","message":"用户名，密码不能为空"}');
        return
    }
    if(req.body.password !=req.body.repassword){
        res.send('{"status":"2","message":"密码不一致"}');
        return
    }
    //  注册
    
    let sqlRegister = 'INSERT INTO user(username, password, sex, phone, email) VALUES("'+req.body.username+'","'+req.body.password+'","'+req.body.sex+'","'+req.body.phone+'","'+req.body.email+'")';
    let sqlCheck = 'SELECT*FROM user WHERE username= "'+req.body.username+'"'
    connection.query(sqlCheck, function(error, result){
        let dataString = JSON.stringify(result)
        let checkData = JSON.parse(dataString)
        if(checkData || checkData[0].username === req.body.username){
            res.send('{"status":"3","message":"用户名已存在"}');
                res.end();
        }else{
            connection.query(sqlRegister,function (error, result) {
                if (!error && result && result.length !==0 ){
                    res.send('{"status":"0","message":"注册成功"}');
                    res.end();
                    return;
                }
            })
        }
    })
    


    // let sqlCheck = 'SELECT*FROM user WHERE username= "'+req.body.username+'"'
    // connection.query(sqlCheck, function(error, result){
    //     // let dataString = JSON.stringify(result)
    //     let checkData = JSON.parse(dataString)
    //     console.log(checkData)
    //     if(checkData[0].username == req.body.username){
    //         res.send('{"status":"3","message":"用户名已存在"}');
    //         res.end();
    //     } 
    // })
    // let sqlRegister = 'INSERT INTO user(username, password, sex, phone, email) VALUES("'+req.body.username+'","'+req.body.password+'","'+req.body.sex+'","'+req.body.phone+'","'+req.body.email+'")';
    //     connection.query(sqlRegister,function (error, result) {
    //         if (!error && result && result.length !==0 ){
    //             res.send('{"status":"0","message":"注册成功"}');
    //             res.end();
    //             return;
    //         }
    //     })
})
// 登陆
app.post('/api/login', bodyParse.json(), (req, res) => {
    let sqlCheck = 'SELECT*FROM user WHERE username= "'+req.body.username+'" AND password= "'+req.body.password+'" '
    connection.query(sqlCheck, function(error, result) {
        if (!error && result && result.length !== 0) {
            // req.session.username = req.body.username
            res.json({
                status:"5", message:"登陆成功", username: req.body.username,
                token:jwt.sign({username:req.body.username}, secret, {expiresIn: 60}) 
            })
            res.end();
            return;
        }if (!error && result && result.length == 0) {
            res.send('{"status":"3","message":"账号或密码有误"}');
            res.end();
            return;
        }
    })
})

app.listen(3000,()=> console.log('app listening at http://localhost:3000'))