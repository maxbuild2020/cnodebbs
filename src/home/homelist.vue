<template>
  <div>
    <div class="container">
      <div class="sidebar">
        <div class="panel-right">
          <div class="inner">
            <p>CNode：Node.js专业中文社区</p>
          </div>
          <div class="inner">
            <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt />
            <div class="gap"></div>
            <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt />
            <div class="gap"></div>
            <img src="https://static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt />
          </div>
          <div class="inner">
            <p>CNode：Node.js专业中文社区</p>
          </div>
          <div class="inner">
            <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt />
            <div class="gap"></div>
            <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt />
            <div class="gap"></div>
            <img src="https://static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt />
          </div>
        </div>
      </div>
      <router-view></router-view>
      
    </div>
    <div class="backtotop" v-if="showitem" @click="backtop">回到顶部</div>
  </div>
</template>

<script>
export default {
  name: "homelist",
  data () {
    return {
      showitem: false
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop || window.pageYOffset
      if(top>80){
        this.showitem = true
        } else {
        this.showitem = false
        }
    },
    backtop() {
      document.documentElement.scrollTop= 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
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
@media(max-width:960px){
  .sidebar{
    display: none;
  }
}
.sidebar {
  width: 5.8rem;
  float: right;
}
.inner {
  margin-bottom: 0.2rem;
  background: white;
  padding: 0.2rem;
}
.inner img {
  width: 100%;
  vertical-align: middle;
}
.inner .gap {
  height: 0.2rem;
}
.backtotop{
  display: block;
  width: 0.5rem;
  padding: .2rem 0;
  border-radius: .1rem 0 0 0.1rem; 
  position: fixed;
  right: 0;
  top: 11rem;
  background: white;
  color: #999;
}
</style>
