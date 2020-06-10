<template>
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :gutter="10" :column-num="3">
      <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
      <van-grid-item icon="../static/img/news.png" text="新闻资讯" @click="test" />
      <van-grid-item icon="../static/img/picShare.png" text="图文分享" />
      <van-grid-item icon="../static/img/goodsShow.png" text="商品展示" />
      <van-grid-item icon="../static/img/feedback.png" text="留言反馈" />
      <van-grid-item icon="../static/img/search.png" text="搜索资讯" />
      <van-grid-item icon="../static/img/callme.png" text="联系我们" />
    </van-grid>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
        ],
      }
    },
    methods: {
      test:function(){
        var loginMode = 'msdk'; //游戏内默认msdk(wx|qq|msdk)
        var url = 'http://localhost:8080/static/json/test.json';
        this.$axios.get(url)
          .then(response => {

          })
          .catch(error => {

          })
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .van-swipe__track img {
    width: 100%;
    height: 100%;
  }

  .van-swipe-item {
    padding: 30px 50px;
    box-sizing: border-box;
  }
</style>
