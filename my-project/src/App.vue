<template>
  <div id="app">
    <van-nav-bar class="m-header" title="信息管理系统" />
    <router-view class="m-center" />

    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(tabbaritem,index) in tabbarItems" :key="tabbaritem.id" :icon="tabbaritem.icon" :text="tabbaritem.title" :to="tabbaritem.route">{{tabbaritem.title}}</van-tabbar-item>
    </van-tabbar>
   <!-- <van-tabbar v-model="active">
      <van-tabbar-item to="/">
        <span>首页</span>
        <template #icon="props">
          <img :src="icon.index" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to='/find'>
        <span>发现</span>
        <template #icon="props">
          <img :src="icon.find" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to='/shopcart'>
        <span>购物车</span>
        <template #icon="props">
          <img :src="icon.shopcart" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to='/member'>
        <span>会员</span>
        <template #icon="props">
          <img :src="icon.vip" />
        </template>
      </van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: 0,
      icon: {
        index: '../static/img/index.png',
        find: '../static/img/find.png',
        shopcart: '../static/img/shopcart.png',
        vip: '../static/img/vip.png'
      },
      tabbarItems: []
    }
  },
  created () {
    var url = 'http://localhost:8080/static/json/getTabbarItems.json'
    this.$axios.get(url)
      .then(response => {
        this.tabbarItems = response.data
      })
      .catch(error => {

      })
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .m-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #245fd7;
    color: #fff;
  }
  .m-center{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>
