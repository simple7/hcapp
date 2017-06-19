<template>
  <header class="header">
    <div class="container">
      <div class="title">
        <h2>Test</h2>
      </div>
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
  @import "../../style/common";

  .header {
    font-family: tahoma, Arial, simhei, "Microsoft YaHei", SourceHanSans, Verdana, Geneva, sans-serif;
    height: $head-height;
    background-color: $head-bkg;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    position: fixed;
    .title {
      display: inline-block;
      h2{
        line-height: $head-height;
        margin: 0;
        font-size: 1.8em;
      }
    }

    .container {
      position: relative;
    }
  }

  @media screen and (min-width: 768px) {
    .title {
      float: left;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      padding: 0 20px;
      text-align: center;
      border-bottom: 2px solid $head-bottom-border;
    }
  }

</style>
