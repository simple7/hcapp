<template>
  <div class="app">
    <app-header></app-header>
    <div class="app-main-box">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeader from './header/Header.vue'
  import appFooter from './footer/Footer.vue'
  export default {
    name: 'Home',
    components: {appHeader,appFooter}
  }
</script>

<style lang="scss">
.app-main-box{
  padding-top: 80px;
}
</style>
