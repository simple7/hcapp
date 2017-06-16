<template>
    <Carousel class="app-carousel" autoplay v-model="value" :autoplay-speed="autoplaySpeed">
      <Carousel-item>
        <div class="demo-carousel">
          <img src="../../assets/img/test.gif" alt="">
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">
          <img src="../../assets/img/test.gif" alt="">
        </div>
      </Carousel-item>
    </Carousel>
</template>
<script>
  export default {
    data(){
      return {
        value: 0,
        autoplaySpeed:5000
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/common';
  .app-carousel{
    width: 100%;
    height: $pc-carousel !important;
  }
  .demo-carousel img{
    width:100%;
    height: $pc-carousel;
  }
  @media screen and (max-width: 768px){
    .app-carousel{
      height: $mobile-carousel !important;
    }
    .demo-carousel img{
      width:100%;
      height: $mobile-carousel;
    }
  }
</style>
