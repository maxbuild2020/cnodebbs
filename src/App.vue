<template>
  <div id="app" class="app">
    <navbar></navbar>
    <router-view class="app-content"></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import navbar from "./home/navbar";
import bottom from "./home/bottom";
export default {
  name: "app",
  components: {
    navbar,
    bottom
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  background: #e1e1e1;
}
html{
  $font-size-root: 50px;
}
.app {
  display: flex;
  display: -webkit-flex;
  min-height: 100vh;
  flex-direction: column;
}
.app-content {
  flex: 1;
}
</style>
