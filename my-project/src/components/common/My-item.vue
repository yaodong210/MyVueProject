<template>
  <li>
    <!-- <span><img :src="icon" /></span>
    <div>{{text}}</div>

    <slot></slot> -->
    <div class="icon">
      <!-- slot其实是不存在的，所以不要设置他 -->
      <slot name="icon"></slot>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'my-item',
    data: function() {
      return {

      }
    },
    props: ['icon', 'text']
  }
</script>

<style scoped>
  li {
    list-style: none;
    float: left;
    width: 33.333%;
    text-align: center;
  }

  span {
    width: 0.625rem
  }

  .icon img {
    width: 100%;
  }
</style>
