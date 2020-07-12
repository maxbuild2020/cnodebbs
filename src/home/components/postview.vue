<template>
  <div class="container" > 
    <div class="sidebar"></div>
    <div class="panel">
      <div class="header">
          <div class="header-content">
            <h3 v-text="postItem.title"
              :class="getTabInfo(postItem.tab, postItem.good, postItem.top, true)"
              :title="getTabInfo(postItem.tab, postItem.good, postItem.top, false)"
            ></h3>
            <div class="title-detail">
              <span>发布于{{postItem.create_at | timerCount}}</span> |
              <span v-if="flag">作者 {{postItem.author.loginname}}</span>｜
              <span>{{postItem.visit_count}}次浏览</span> ｜
              <span>来自分享</span>
              </div>
          </div>
      </div>
      <div class="inner-content">
        <div class="markdown-body" v-html="postItem.content"></div>
      </div>
    </div>

    <div class="panel ">
      <div class="reply">
          <div class="header-content">
            <span class="reply" v-if="flag">{{postItem.replies.length}}回复</span>
          </div>
      </div>
      <div class="inner-content">
        <div v-for="item in postItem.replies" :key="item.id">
          <div class="reply-wrapp border-bottom">
            <img :src="item.author.avatar_url">
            <div class="reply-user">{{item.author.loginname}} {{item.create_at | timerCount}}
              <div class="reply-content" v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'github-markdown-css'
import utils from "../../fn/utils";
import axios from "axios";
import moment from "moment";
export default {
  name: "postView",
  data() {
    return {
      itemId: '',
      postItem: [],
      flag: false
    }
  },
  filters:{
    timerCount: function (value) {
      moment.locale("zh-cn");
      return moment(value)
        .startOf("day")
        .fromNow();
    }
  },
  methods: {
    async getData() {
      this.itemId = this.$route.params.id
      let res = await axios.get('https://cnodejs.org/api/v1/topic/' + this.itemId )
      this.postItem = res.data.data
      this.flag = true
    },
    getTabInfo(tab, good, top, isClass) {
      return utils.getTabInfo(tab, good, top, isClass);
    }
  },
  mounted() {  
    this.getData();
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

.sidebar {
  width: 5.8rem;
  float: right;
}
.panel {
  margin-right: 6.2rem;
  padding-bottom: .2rem;
  min-width: 10rem;
}
.header-content {
  background: #f6f6f6;
  text-align: left;
  border-radius: .1rem;
  padding: .3rem .4rem;
  h3 {
    font-size: .3rem;
    display: block;
    padding: .2rem 0;
    text-align: left;
    &:before {
      content: attr(title);
      padding: .02rem .01rem .03rem .01rem;
      font-size: .2rem;
      margin: 0 .1rem;
      color:white;
      width: .2rem;
      border-radius: .06rem;
    }
    &.top:before {
      background:#75aa02;
    }
    &.good:before {
      background:#75aa02;
    }
    &.ask:before, &.share:before, &.job:before{
      background: #ccc;
    }
  }
  
  .title-detail{
    font-size: .2rem;
    color: #666;
  }
  .reply{
    font-size: .3rem;
  }
}
.inner-content {
  background-color: white;
  padding: .1rem .4rem;
  text-align: left;
}
.reply-wrapp{
  display: flex;
  padding: .2rem 0;
  img {
    width: .6rem;
    height: .6rem;
  }
  .reply-user{
    padding-left: .3rem;
    display: inline-block;
  }
  .reply-content{
    padding: .1rem 0;
  }
}
</style>
