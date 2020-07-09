<template>
  <div class='my-div'>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul class='goods-center'>
      <li v-for="(goods,index) in goodsList" :key="goods.id">
        <a>
          <img :src='goods.src'>
          <div class="title">{{goods.goodtitle}}</div>
          <div class="desc">
            <div class="sell">
              <span>￥{{goods.currprice}}</span>
              <s>￥{{goods.oriprice}}</s>
            </div>
            <div class="detail">
              <div class="hot">
                热卖中
              </div>
              <div class="count">
                剩{{goods.stock}}件
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: '',
    data: function() {
      return {
        title: '商品列表',
        goodsList: [],
        pageindex: '',
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      loadAllGoodsWithPage(pageindex) {
        let url = 'http://localhost:8080/static/json/goods/page/' + pageindex + '.json';
        this.$axios.get(url).then(response => {
          if (!response.data.success) {
            console.log('系统异常');
          }
          this.pageindex = response.data.pagenum;
          this.goodsList = response.data.data;

        }).catch(error => {
          console.log('系统异常');
        })
      }
    },
    created() {
      this.loadAllGoodsWithPage(1);
    }
  }
</script>
<style scoped>
  ul {
    overflow: hidden;
  }

  li {
    width: 50%;
    float: left;
    padding: 6px;
    box-sizing: border-box;
  }


  li>a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
    width: 100%;
    display: block;


  }

  li>a:not(.mui-btn) img {
    width: 100%;
  }

  .sell>span {
    float: left;
    color: red;
    text-align: left;
  }

  .detail>.hot {
    float: left;
    text-align: left;
    font-size: 15px;
  }

  .detail>.count {
    float: right;
    text-align: right;
    font-size: 15px;
  }


  /*撑开，去除浮动没有的高度*/

  .detail {
    overflow: hidden;
  }

  .desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
  }

  .goods-center {
    padding: 10 5;
    overflow-y: scroll;
  }

  .my-div {
    margin-bottom: 50px;
  }

  .van-nav-bar {
     height: 95px;
  }

  img {
    height: 200px;
  }
</style>
