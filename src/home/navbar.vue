<template>
  <div>
    <div class="narbar">
      <div class="container">
        <div class="log">
          <a href="/"><img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""></a>
        </div>
        <form class="search">
          <input type="text" class="input"></form>
        <div class="nav"><ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/getstart">新手入门</router-link></li>
          <li v-if="!showUser"><router-link to="/register">注册</router-link></li>
          <li v-if="!showUser"><router-link to="/login">登陆</router-link></li>
          <li v-if="showUser"><router-link to="/">{{username}}</router-link></li>
          <li v-if="showUser" @click="logout"><router-link to="">logout</router-link></li>
          </ul></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      username: '',
      showUser:false
    }
  },
  created() {
    this.username = sessionStorage.getItem('userName')
    if(this.username){
      this.showUser = !this.showUser
    }
  },
  methods: {
    logout() {
      if(confirm('确定要退出么')==true){
        sessionStorage.clear()
        location.href = '/'
      }else{
        return
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.narbar {
  width: 100%;
  background: #444444;
  height: 1rem;
}
.container{
  padding: .1rem 1.5rem;
  height: .8rem;
  line-height: .8rem;
}
.log{
  width: 2.4rem;
  padding: .1rem .5rem .1rem 0;
  float: left;
}
.log img{
  vertical-align:initial
}
.search{
  float: left;
  padding-top: .01rem ;
}
.input{
  width: 4.5rem;
  height: .5rem;
  border-radius: .5rem;
  text-indent: .45rem;
  background: url("https://static2.cnodejs.org/public/images/search.e53b380a.hashed.png") 3px 3px no-repeat #888;
  transition: all 1s;
}
.nav{
  float: right;
  height: .8rem;
  min-width: 6rem;
}
.nav li{
  float: left;
  text-decoration: none;
  padding: 0 .3rem;
}
.nav a{
  color: #ccc;
  font-size: 0.26rem;
}
</style>
