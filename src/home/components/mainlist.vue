<template>
  <div>
    <div class="panel">
      <div class="header">
        <router-link :to="{query:{tab:'all'}}" :class="{'active':$route.query.tab ==='all'}">
          <span>全部</span>
        </router-link>
        <router-link :to="{query:{tab:'good'}}" :class="{'active':$route.query.tab ==='good'}">
          <span>精华</span>
        </router-link>
        <router-link :to="{query:{tab:'share'}}" :class="{'active':$route.query.tab ==='share'}">
          <span>分享</span>
        </router-link>
        <router-link :to="{query:{tab:'ask'}}" :class="{'active':$route.query.tab ==='ask'}">
          <span>问题</span>
        </router-link>
        <router-link :to="{query:{tab:'job'}}" :class="{'active':$route.query.tab ==='job'}">
          <span>招聘</span>
        </router-link>
      </div>
      <div class="body">
        <div class="inner-content border-bottom" v-for="item in currentPageData" :key="item.index">
        <img :src="item.author.avatar_url" />
        <span class="reply_count">{{item.reply_count}}/{{item.visit_count}}</span>
        <router-link class="title-wrap" :to="'/postview/'+ item.id">
          <h3
            v-text="item.title"
            :class="getTabInfo(item.tab, item.good, item.top, true)"
            :title="getTabInfo(item.tab, item.good, item.top, false)"
          ></h3>
        </router-link>
        <span class="last-repy">{{ item.last_reply_at | timerCount}}</span>
      </div>
      <div class="pageContainer">
        <ul class="pagesInner">
          <li class="page"><span class="fa fa-chevron-left" aria-hidden="true" @click="prevPage()"></span></li>
          <li class="page" v-for="(item, index) in pagingPages" :key="index"
            :class="{actived: item === currentPage}"
            @click="select(item)">
            <span>{{item}}</span>
          </li>
          <li class="page"><span class="fa fa-chevron-right" aria-hidden="true" @click="nextPage()"></span></li>
        </ul>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
//<a-pagination v-model="current" :total="50" show-less-items />
import utils from "../../fn/utils";
import axios from "axios";
import moment from "moment";
export default {
  name: "mainList",
  data() {
    return {
      posts: [],
      searchKey: {
        tab: "all",
        mdrender: true
      },
      currentPage: 1,  // 默认1
      totalPage: 1 , //一共多少页 默认1
      pageSize: 16 ,  //每页数量
      currentPageData: [] //当前页显示内容
    }
  },
  filters: {
    timerCount: function(value) {
      moment.locale("zh-cn");
      return moment(value)
        .startOf("day")
        .fromNow();
    }
  },
  computed: {
    pagingPages() {
      const c = this.currentPage;
      const t = this.totalPage;
      if (c <= 5) {
        if (t == 6) {
          return [1, 2, 3, 4, 5,6]; //第一种情况【0】
        }
      else if (t == 5) {
          return [1, 2, 3, 4, 5]; //第一种情况【1】
        } else if (t == 4) {
          return [1, 2, 3, 4]; //第一种情况【2】
        } else if (t == 3) {
          return [1, 2, 3]; //第一种情况【3】
        } else if (t == 2) {
          return [1, 2]; //第一种情况【4】
        } else if (t == 1) {
          return [1]; //第一种情况【5】
        } else {
          return [1, 2, 3, 4, 5, "...", t]; //第一种情况
        }
      } else if (c >= t - 4) {
        return [1, "...", t - 4, t - 3, t - 2, t - 1, t]; //第二种情况
      } else {
        return [1, "...", c - 1, c, c + 1, "...", t]; //第三种情况
      }
    }
  },
  created() {
    this.getData();
    console.log(sessionStorage.userToken == true);
  },

  methods: {
    async getData() {
      let tabValue = this.$route.query.tab;
      let res = await axios.get("https://cnodejs.org/api/v1/topics", {
        params: {
          tab: tabValue,
          mdrender: true
        }
      });
      this.posts = res.data.data;
      this.currentPage = 1
      this.setCurrentPageData()
    },
    getTabInfo(tab, good, top, isClass) {
      return utils.getTabInfo(tab, good, top, isClass);
    },
    select(n) {
      if (n === this.currentPage) return;
      if (typeof n === "string") return;
      this.currentPage = n;
      this.setCurrentPageData()
    },
    setCurrentPageData() {
      this.totalPage = Math.ceil(this.posts.length / this.pageSize);
      this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;

      let begin = (this.currentPage - 1) * this.pageSize;
      let end = this.currentPage * this.pageSize;

      this.currentPageData = this.posts.slice(
          begin,
          end
      )
    },
        //上一页
    prevPage() {
        if (this.currentPage == 1) return;
          this.currentPage--;
          this.setCurrentPageData();  
          console.log(this.currentPage);
    },
        // 下一页
    nextPage() {
        if (this.currentPage == this.totalPage)return ;
          this.currentPage++;
          this.setCurrentPageData();
          console.log(this.currentPage);
    }
  },
  watch: {
    $route(to) {
      // console.log(from)
      if (to.query && to.query.tab) {
        this.searchKey.tab = to.query.tab;
        console.log(this.searchKey.tab);
      }
      this.getData();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pagesInner{
    li{
      display: inline-block;
      border: 1px solid grey;
      line-height: .5rem;
      margin: .3rem .2rem 0 .2rem;
      border-radius: .1rem;
      span{
        line-height: .5rem;
        padding: 0 .2rem;
      }
    }
    .actived {
    border-color: #75aa02;
    background-color: #75aa02;
    color: #fff;
}
  }

.panel {
  margin-right: 6.2rem;
  min-width: 10rem;
    .body{
    background-color: white;
    padding-bottom: .15rem;
    height: 0;
    overflow: hidden;
    padding-bottom: 15.5rem;
  }
}
.header {
  background: #f6f6f6;
  height: 0.8rem;
  padding-left: 0.3rem;
  a {
    float: left;
    margin: 0.2rem 0.2rem;
    height: 0.4rem;
    line-height: 0.45rem;
    color: #75aa02;
    font-size: 0.3rem;
    border-radius: 0.05rem;
  }
  .active {
    color: white;
    background: #75aa02;
  }
}

.inner-content {
  display: flex;
  padding: 0.1rem 0.2rem;
  align-items: center;
  img {
    width: 0.6rem;
  }
  .title-wrap {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: inherit;
  }
  h3 {
    font-size: 0.3rem;
    display: block;
    padding: 0.2rem 0;
    text-align: left;
    &:before {
      content: attr(title);
      padding: 0.02rem 0.01rem 0.03rem 0.01rem;
      font-size: 0.2rem;
      margin: 0 0.1rem;
      color: white;
      width: 0.2rem;
      border-radius: 0.06rem;
    }
    &.top:before {
      background: #75aa02;
    }
    &.good:before {
      background: #75aa02;
    }
    &.ask:before,
    &.share:before,
    &.job:before {
      background: #ccc;
    }
  }
  .reply_count {
    padding: 0 0.1rem;
    width: 1.2rem;
    min-width: 1.2rem;
    font-size: 0.2rem;
  }
  .last-repy {
    width: 1.8rem;
    min-width: 1.8rem;
  }
}
  
</style>
