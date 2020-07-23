<template>
  <div class='my-div'>
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul class='goods-center'>
        <li v-for="(goods,index) in goodsList" :key="goods.id" >
           <router-link :to="{ name:'gooddetail',query:{id:goods.id } }">
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
            </router-link>
        </li>
      </ul>
    </van-pull-refresh>
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
        pagesize: '',
        total: '',
        count: 0,
        isLoading: false,

      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onRefresh() {
        console.log(this.pageindex);
        console.log(this.pagesize);
        console.log(this.total);
        if (this.pageindex  * this.pagesize > this.total) {
          this.$toast('已经没有内容了,客官轻一点!');
          this.isLoading = false;
          return;
        }
        this.loadAllGoodsWithPage(this.pageindex += 1);
        this.isLoading = false;
      },
      loadAllGoodsWithPage(pageindex) {
        let url = 'http://localhost:8080/static/json/goods/page/' + pageindex + '.json';
        this.$axios.get(url).then(response => {

          if (!response.data.success) {
            console.log('系统异常');
          }
          this.pageindex = response.data.pagenum;
          this.pagesize=response.data.pagesize;
          this.total=response.data.total;
          if (this.pageindex === 1) {
            this.goodsList = response.data.data;
          } else {
            // 追加
            this.goodsList = this.goodsList.concat(response.data.data);
          }
        }).catch(error => {
          // console.log('系统异常');
          console.log(error);

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
    /* overflow-y: scroll; */
  }

  .my-div {
    margin-bottom: 50px;
    /* overflow-y: scroll; */
  }

 /* .van-nav-bar {
    height: 95px;
  } */

  .van-pull-refresh {
    overflow-y: scroll;
  }

  img {
    height: 200px;
  }
</style>
