<template>
  <div>
    <div class="container">
      <div class="panel">
        <div class="header">
          <ul>
          <li><a href="/">主页</a></li>
          <li>Node.js 新手入门</li>
          </ul>
        </div>
        <div class="content-wrapper">
          <div class="content">
            <h1 class="border-bottom">Node.js 入门</h1>
            <p>《快速搭建 Node.js 开发环境以及加速 npm》</p>
            <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
            <p>《Node.js 包教不包会》</p>
            <p><a href="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</a></p>
            <p>《ECMAScript 6入门》</p>
            <p><a href="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</a></p>
            <p>《七天学会NodeJS》</p>
            <p><a href="https://github.com/nqdeng/7-days-nodejs">https://github.com/nqdeng/7-days-nodejs</a></p>
            <h1 class="border-bottom">Node.js 资源</h1>
            <p>《前端资源教程》</p>
            <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
            <p>《国内的 npm 镜像源》</p>
            <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
            <p>《node weekly》</p>
            <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
            <p>《node123-node.js中文资料导航》</p>
            <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>  
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div class="panel-right">
          <div class="inner">
            <p>CNode：Node.js专业中文社区</p>
            <div>
            您可以 <a href="">登陆</a> 或 <a href="">注册</a> , 也可以
            </div>
          </div>
          <div class="inner">
          <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="">
          <div class="gap"></div>
          <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="">
          <div class="gap"></div>
          <img src="https://static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt="">
          </div>
           <div class="inner">
            <p>CNode：Node.js专业中文社区</p>
            <div>
            您可以 <a href="">登陆</a> 或 <a href="">注册</a> , 也可以
            </div>
          </div>
          <div class="inner">
          <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="">
          <div class="gap"></div>
          <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="">
          <div class="gap"></div>
          <img src="https://static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'getstart'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 90%;
  margin: .3rem auto;
  min-height: 8rem;
  overflow:hidden;
}
.panel{
  float: left;
  width: 68%;
  min-width: 10rem;

}
@media(max-width:960px){
  .sidebar{
    display: none;
  }
}
.sidebar{
  width: 28%;
  float: right;
}
.header{
  background:#F6F6F6;
  height: .8rem;
  padding-left: .3rem;
}
.header li{
  float: left;
  padding: .2rem .2rem;
  height: .4rem;
  line-height: .45rem;
  color: #666;
}
.header a:first-child{
  color: white;
  background: #75AA02;
  border-radius: .05rem;
}
.content-wrapper{
  padding: .2rem .2rem 1rem .2rem;
  background: white;
  text-align: left;
}
.content h1{
    font-size: .5rem;
    padding: .2rem;
}
.content p{
    font-size: .25rem;
    margin: .3rem 0;
    font-weight: bold;
}
.inner{
  margin-bottom: .2rem;
  background: white;
  padding: .2rem;
}
.inner img{
  width: 100%;
  vertical-align: middle;
}
.inner .gap{
  height: .2rem;
}

</style>
