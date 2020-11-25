<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="img in imgList" :key="img.id">
      <img :src="img.img" class="imgStyle"/>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props: ['imgList']
}
</script>

<style scoped>
.mint-swipe{
  height:200px;
}
.imgStyle{
  width:100%;
  height:100%;
}
</style>
