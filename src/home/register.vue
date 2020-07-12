<template>
  <div class="container" > 
    <div class="panel">
      <div class="header"><p>注册</p></div>
      <form action="/api" class="form" method="post">
        <div class="wrapper">
          <label for="username">用户名</label>
          <input type="text" v-model="username" id="username" pattern="^[a-zA-Z0-9\u4E00-\u9FA5_]{3,10}$" placeholder="用户名3-10位，仅限字母数字" title="
          最短4-10位 首字母只能是大小写字母" required>
          <span><img src="@/assets/check.png" alt=""></span>
        </div>
        <div class="wrapper">
          <label for="password">密码</label>
          <input type="password" v-model="password" id="password" pattern="\w{6,10}" placeholder="请输入密码6-10位" required>
        <span><img src="@/assets/check.png" alt=""></span>
        </div>
        <div class="wrapper">
          <label for="repassword">密码确认</label>
          <input type="password" v-model="repassword" id="repassword" placeholder="密码确认" pattern="\w{6,10}" required>
        <span><img src="@/assets/check.png" alt=""></span>
        </div>
        <div class="wrapper">
          <label for="sex">性别</label>
          <select name="sex" id="sex" v-model="sex" required>
              <option disabled selected value="">请选择</option>
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
        </div>
        <div class="wrapper">
          <label for="phone">电话</label>
          <input name="phone" v-model="phone" type="tel" id="phone" placeholder="请输入电话" required>
        </div>
        <div class="wrapper">
          <label for="email">邮箱</label>
          <input name="email" v-model="email" type="email" id="email" placeholder="name@example.com" autocomplete="email" required>
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
  name: "register",
  data(){
    return {
      username: '',
      password: '',
      repassword: '',
      sex: '',
      phone: '',
      email: '',
      this: this
    }
  },
  methods: { 
    handleSubmit() {
      const vm = this
      axios.post('/api/register', {
        username: this.username,
        password: this.password,
        repassword: this.repassword,
        sex: this.sex,
        phone: this.phone,
        email: this.email,
      })
      .then(function(res){
        if(res.data.status === "1" || res.data.status=== "2" || res.data.status=== "3"){
        // console.log(res)
        alert(res.data.message)
        location.reload()
        }
        if(res.data.status === "0" ){
        // console.log(res)
        alert(res.data.message)
        vm.$router.push('login')
        // location.href = '/login'
        }
      })
      .catch((e) => {
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
