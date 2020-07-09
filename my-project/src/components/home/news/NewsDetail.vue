<template>
  <div class="tmpl">
    <van-nav-bar :title="navtitle" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="news-title">
      <p>{{newsInfo.newstitle}}</p>
      <div>
        <span>{{newsInfo.newshit}}次点击</span>
        <span>分类:民生经济</span>
        <span>添加时间:{{newsInfo.createtime | convertTime('YYYY-MM-DD')}}</span>
      </div>
    </div>
    <div class="news-content"  v-html="newsInfo.content" ></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newsInfo: '',
        navtitle: '新闻详情'
      };
    },
    created() {
      let id=this.$route.params;
      var url = 'http://localhost:8080/static/json/getNewsDetail.json';
      this.$axios.get(url).then(response => {
        if (response.data.success) {
           console.log(response);
          this.newsInfo = response.data.data;
        }
      }).catch(error => {

      })
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    }

  };
</script>

<style scoped>
  .news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
  }

  .news-title span {
    margin-right: 30px;
  }

  .news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  /*主体文章的左右距离*/
  .van-nav-bar {
     height: 95px;
  }
  .news-content {
    padding: 10 5;
    overflow-y:scroll;
  }
</style>
