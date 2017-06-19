<template>
  <div class="index">
    <carousel></carousel>
    <index-card></index-card>
    <product></product>
  </div>
</template>
<script>
  import carousel from './Carousel.vue'
  import indexCard from './IndexCard.vue'
  import product from './ProdIntro.vue'
  export default {
    components:{carousel,indexCard,product}
  }
</script>
<style>

</style>
