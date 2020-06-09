<template>
  <div id="app">
    <van-nav-bar class="m-header" title="信息管理系统" />
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item >
        <span>首页</span>
        <template #icon="props">
          <img :src="icon.index" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item >
        <span>发现</span>
        <template #icon="props">
          <img :src="icon.find" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item >
        <span>购物车</span>
        <template #icon="props">
          <img :src="icon.shopcart" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item >
        <span>会员</span>
        <template #icon="props">
          <img :src="icon.vip" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        active: 0,
        icon: {
          index: '../static/img/index.png',
          find: '../static/img/find.png',
          shopcart: '../static/img/shopcart.png',
          vip: '../static/img/vip.png',
        },
      }
    }
  }
</script>

<style>
  .m-header {
    height: 50px;
    line-height: 50px;
    background: #245fd7;
    color: #fff;
  }
</style>
