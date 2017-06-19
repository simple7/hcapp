<template>
    <Carousel class="app-carousel" autoplay v-model="value" :autoplay-speed="autoplaySpeed">
      <Carousel-item>
        <div class="car-item car-item-1">
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="car-item car-item-1">
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
  .car-item{
    width:100%;
    height: $pc-carousel;
    background-size: 100% 100% !important;
    &.car-item-1{
      background: url("../../assets/img/test.gif") no-repeat;
    }
  }
  .app-carousel{
    width: 100%;
    height: $pc-carousel !important;
  }
  @media screen and (max-width: 768px){
    .app-carousel{
      height: $mobile-carousel !important;
    }
    .car-item{
      width:100%;
      height: $mobile-carousel;
    }
  }
</style>
