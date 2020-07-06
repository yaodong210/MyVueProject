<template>
  <div class="temp">
    <van-nav-bar class="nav_bar" :title="navtitle" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-tabs @click="navigateToCateById">
      <van-tab v-for="photocate in photoCateList" :title="photocate.catetitle" :key="photocate.id" :name="photocate.id">
        <div class="photo-list">
          <ul>
            <li v-for="(img,index) in imageList" :key="index">
              <router-link :to="{ name:'photodetail',params:{id:img.id} }">
                <img v-if="$route.query.categoryId === '000'" v-lazy="img.photo">
                <img v-else :src="img.photo">
                <p>
                  <span>{{img.title}}</span>
                  <br>
                  <span>{{img.desc}}</span>
                </p>
               </router-link>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navtitle: '图片分享',
        photoCateList: [],
        imageList: []
      };
    },
    created() {

      // let {
      //   categoryId
      // } = this.$route.query;
      this.loadImgByCateId('000');

      var url = 'http://localhost:8080/static/json/getAllPhotoCateList.json';
      this.$axios.get(url).then(response => {
        this.photoCateList = response.data;
        this.photoCateList.unshift({
          id: "000",
          catetitle: '全部'
        });
      }).catch(error => {
        console.log(error);
      })
    },
    // beforeRouteUpdate(to, from, next) {
    //   let categoryId = to.query.categoryId;
    //   // 发请求更改页面数据
    //   this.loadImgByCateId(categoryId);

    //   next();
    //   // 在当前路由改变，但是该组件被复用时调用
    //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    //   // 可以访问组件实例 `this`
    // },
    methods: {
      onClickLeft() {
        this.$router.push('/')
      },
      navigateToCateById(name) {
        this.$router.push({
          name: 'photolist',
          query: {
            categoryId: name
          }
        });
      },
      loadImgByCateId(name) {
        var url = 'http://localhost:8080/static/json/photolist/' + name + '.json';
        this.$axios.get(url).then(response => {
          this.imageList = response.data;

        }).catch(error => {
          console.log(error);
        })

      }
    }
  };
</script>

<style>
  /*下面的图片*/

  .photo-list li {
    list-style: none;
    position: relative;
  }

  .photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
  }

  .photo-list ul {
    padding-left: 0px;
    margin: 0;
  }

  .photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
  }

  .photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
  }
</style>
