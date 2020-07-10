<template>
  <div>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
   <div class="product-desc">
      <ul>
        <li><span class="product-desc-span">
            {{info.goodstitle}}
          </span></li>
        <li class="price-li">市场价：
          <s>￥{{info.oriprice}}</s> 销售价：<span>￥{{info.currprice}}</span></li>
        <li class="number-li">购买数量：<span>-</span><span>1</span><span>+</span></li>
      </ul>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>

    <!-- <div class="ball"></div> -->
    <div class="product-props">
      <ul>
        <li>商品参数</li>
        <li>商品货号：123441231</li>
        <li>库存情况：{{info.stock}}件</li>
        <li>上架时间：{{info.uptime|convertTime('yyyy-MM-DD hh:MM:ss')}}</li>
      </ul>
    </div>
    <div class="product-info">
     <!-- <ul>
        <li>
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        </li>
        <li>
          <mt-button type="danger" size="large" plain>商品评论</mt-button>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        title: '商品详情',
        info: {},
        images: [
          '../../../../static/img/goods/detail/1-detail-1.jpg',
          '../../../../static/img/goods/detail/1-detail-2.jpg',
          '../../../../static/img/goods/detail/1-detail-3.jpg'
        ],
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
    },
    created() {
      let id = this.$route.query.id;
      let url = 'http://localhost:8080/static/json/goods/gooddetail/' + id + '.json';
      this.$axios.get(url).then(res => {
        this.info = res.data.data;

      }).catch(error => {

      })
    }
  }
</script>
<style scoped>
  .ball-enter-active {
    animation: bounce-in 1s;
  }

  @keyframes bounce-in {
    0% {
      transform: translate3d(0, 0, 0);
    }

    50% {
      transform: translate3d(140px, -50px, 0);
    }

    75% {
      transform: translate3d(160px, 0px, 0);
    }

    100% {
      transform: translate3d(140px, 300px, 0);
    }
  }

  .swiper {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
    overflow: hidden;
  }

  .outer-swiper,
  .product-desc,
  .product-props,
  .product-info {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px;
  }


  /*请ulpadding*/

  .outer-swiper ul,
  .product-desc ul,
  .product-props ul,
  .product-info ul {
    padding: 0;
  }

  .product-desc ul li,
  .product-props ul li,
  .product-info ul li {
    list-style: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 8px;
  }

  .product-desc ul>:nth-child(1) span {
    color: blue;
    font-size: 22px;
    font-weight: bold;
  }

  .product-desc ul>:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .product-desc ul,
  .product-info ul,
  .product-props ul {
    padding-left: 10px;
  }

  .price-li span {
    color: red;
    font-size: 25px;
  }

  .price-li s {
    margin-right: 16px;
  }


  /*加减*/

  .number-li span {
    display: inline-block;
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 25px;
  }


  /*商品参数*/

  .product-props ul>:nth-child(1) {
    text-align: left;
  }

  .product-props ul:not(:nth-child(1)) {
    margin-left: 40px;
  }

  .product-info ul {
    margin-bottom: 70px;
    padding: 0 5;
  }

  .number-li span {
    text-align: center;
  }

  .number-li>:nth-child(2) {
    width: 40px;
  }

  .ball {
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
  }

  .van-swipe__track img {
    width: 100%;
    height: 100%;
  }

  .van-swipe-item {
    box-sizing: border-box;
  }
  .m-center{
    overflow-y: scroll;
  }
 /* .van-nav-bar {
    height: 95px;
  } */
</style>
