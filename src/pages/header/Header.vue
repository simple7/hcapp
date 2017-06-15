<template>
  <header class="header">
    <div class="container">
      <h2 class="title">Test</h2>
      <top-menu></top-menu>
    </div>
  </header>
</template>

<script>
  import topMenu from './TopMenu.vue'
  export default {
    components: {topMenu}
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 80px;
    background-color: #1c2438;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    position: fixed;
    .title {
      line-height: 80px;
      margin: 0;
      float: left;
      font-size: 3em;
      font-weight: 400;
    }
    .container{
      position: relative;
    }
  }

  @media screen and (max-width: 768px) {
    .title{
      display: none;
    }
  }
</style>
