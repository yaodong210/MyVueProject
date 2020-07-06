<template>
  <div>
    <van-nav-bar class="nav_bar" :title="navtitle" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="photo-title">
      <p>{{photoInfo.phototitle}}</p>
      <span>发起日期：{{photoInfo.createtime | convertTime('YYYY年MM月DD日')}}</span>
      <span>{{photoInfo.photohit}}次浏览</span>
      <span>分类：民生经济</span>
    </div>

    <!-- <vue-preview :slides="imgs"></vue-preview> -->
    <my-ul>
      <my-item v-for="(img,index) in imgs " :key="index">
        <img :src="img.src" slot="icon">
      </my-item>
    </my-ul>
    <div class="photo-desc">
      <p v-html="photoInfo.content"></p>
    </div>


    <!-- 使用评论组件 -->
    <!-- <comment :cid="$route.params.id" /> -->


  </div>
</template>
<script>
  export default {
    data() {
      return {
        navtitle: '图文详情',
        photoInfo: {}, //图文详情
        imgs: [], //缩略图
      }
    },
    methods:{
      onClickLeft() {
        this.$router.push('/')
      }
    },
    created() {

      let pid = this.$route.params.id;
      // 发起请求 获取详情信息
      var url = 'http://localhost:8080/static/json/photodetail/'+pid+'.json';
      this.$axios.get(url)
        .then(res => {

          this.photoInfo = res.data.data
        })
        .catch(console.log);

      //获取图片缩略图信息
      let getthumimagesur='http://localhost:8080/static/json/photothumimages/'+pid+'.json';
      this.$axios.get(getthumimagesur)
        .then(res => {
          this.imgs = res.data.data;
          //  给图片对象加入宽高
          this.imgs.forEach(img => {
            img.w = 200;
            img.h = 200;
            img.msrc = img.src;
          });
        })
        .catch(console.log)
    }
  }
</script>
<style scoped>
  li {
    list-style: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .photo-title {
    overflow: hidden;
  }

  .photo-title,
  .photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
  }

  .photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
  }

  .photo-title span {
    margin-right: 20px;
  }

  .photo-desc p {
    font-size: 18px;
  }
</style>
