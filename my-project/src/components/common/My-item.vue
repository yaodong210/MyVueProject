<template>
  <li >
      <span ><img :src="icon"/></span>
      <div>{{text}}</div>
  </li>
</template>

<script>
  export default {
    name: 'my-item',
    data: function() {
      return {

      }
    },
    props:['icon','text']
  }
</script>

<style scoped>
  li {
    list-style: none;
    float: left;
    width: 33.333%;
    text-align: center;
  }
  span{
      width:0.625rem
  }
</style>
