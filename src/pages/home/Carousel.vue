<template>
    <Carousel class="app-carousel" autoplay v-model="value" :autoplay-speed="autoplaySpeed">
      <Carousel-item>
        <div class="demo-carousel">
          <img src="../../assets/test.gif" alt="">
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">
          <img src="../../assets/test.gif" alt="">
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

<style scoped="">
  .app-carousel{
    width: 100%;
    height: 520px !important;
  }
  .demo-carousel img{
    width:100%;
    height: 520px;
  }
  @media screen and (max-width: 768px){
    .app-carousel{
      height: 300px !important;
    }
    .demo-carousel img{
      width:100%;
      height: 300px;
    }
  }
</style>
