<template>
  <div>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="newsItem in newslist" :key="newsItem.id" :title="newsItem.newstitle" :label="'点击数:'+newsItem.newshit"
          :icon="newsItem.newspic" :value="newsItem.createtime| convertTime('YYYY-MM-DD HH:MM:SS')" @click="queryOneNew(newsItem.id)" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '新闻列表',
        newslist: [],
        loading: false,
        finished: false,
        refreshing: false,
      };
    },
    created() {
      this.loading=true;
      var url = 'http://localhost:8080/static/json/getNewsList.json';
      this.$axios.get(url).then(response => {
        if (response.data.success) {
          console.log(response);
          this.newslist = response.data.data;
        }
      }).catch(error => {

      })
      this.finished = true;
      this.refreshing = false;
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      onLoad() {
        var url = 'http://localhost:8080/static/json/getNewsList.json';
        this.$axios.get(url).then(response => {
          if (response.data.success) {
            console.log(response);
            this.newslist = response.data.data;
          } else {

          }
        }).catch(error => {

        })
        this.finished = true;
        this.refreshing = false;
      },
      onRefresh() {
        // 清空列表数据
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        // this.refreshing = true;
        this.onLoad();
      },
      queryOneNew(id) {
          this.$router.push({ name: 'newsDetail', params: { id: id }});
      }
    },
  };
</script>

<style scoped>
  .van-cell__value {
    display: flex;
    align-items: inherit;
  }

  .van-cell__value span {
    align-self: flex-end;
    margin-left: auto;
  }

  /* .van-nav-bar{
  position: fixed;
} */
</style>
