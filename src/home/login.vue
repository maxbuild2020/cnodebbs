<template>
  <div class="container" > 
    <div class="panel">
      <div class="header"><p>注册</p></div>
      <form action="/register" class="form">
        <div class="wrapper">
          <label name="username" for="username">用户名</label>
          <input v-model="username" type="text" id="username" pattern="^[a-zA-Z0-9\u4E00-\u9FA5_]{3,10}$" placeholder="请输入用户名" title="
          最短4-10位 首字母只能是大小写字母" required>
          <span><img src="@/assets/check.jpg" alt=""></span>
        </div>
        <div class="wrapper">
          <label for="password">密码</label>
          <input v-model="password" type="password" id="password" pattern="\w{6,10}" placeholder="请输入密码" required>
        <span><img src="@/assets/check.jpg" alt=""></span>
        </div>
        
        <div class="wrapper" >
          <input type="button" class="submit" value="提交" @click="handleSubmit">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      axios.post('/api/login', {
        username: this.username,
        password: this.password
      })
      .then(function(res) {
        if(res.data.status === '5'){
          alert(res.data.message)
          console.log(res.data)
          sessionStorage.setItem('userName',res.data.username)
          sessionStorage.setItem('userToken',res.data.token)
          console.log(sessionStorage)
          location.href = '/'
        }if(res.data.status === '3'){
          alert(res.data.message)
          location.reload()
        }
      })
      .catch(function(e){
        console.log(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0.3rem auto;
  min-height: 8rem;
  position: relative;
  overflow: hidden;
}
.panel {
  margin-right: 6.2rem;
  padding-bottom: .2rem;
  min-width: 10rem;
}
.header {
  background: #F6F6F6;
  height: 0.8rem;
  padding-left: 0.3rem;
  p {
  float: left;
  margin: 0.2rem 0.2rem;
  height: 0.4rem;
  line-height: 0.45rem;
  color: #75aa02;
  font-size: .3rem;
  border-radius: 0.05rem;
  }
}
.form {
  background: white;
  padding-top: .5rem;
  text-align:left;
  span{
    display: none;
  }
  input[required]:valid + span {
    display: inline;
  }
  // input[required]:empty + span {
  //   display: none;
  // }
  // input[type="text"]:invalid ~ input[type="submit"] {
  //   display: none;
  // }
}
.wrapper {
    padding: .2rem;
    margin-left: 2rem;
  label{
    text-align: right;
    display: inline-block;
    width: 1.2rem;
    margin-right: .5rem;
  }
  input,select{
    border: 1px solid #cccccc;
    border-radius: .05rem;
    width: 4rem;
    margin-right: .2rem;
  }
  .submit {
    margin-left: 2.5rem;
    width: 1.5rem;
    background: #75aa02;
    color: #F6F6F6;
  }
}
</style>
