<template>
  <Menu ref="menu" mode="horizontal" class="top-menu" theme="dark" :active-name="activeName" :open-names="openNames" @on-select="handleSelect">
    <Menu-item name="index">
        <Icon type="ios-paper"></Icon>
        <span class="menu-font">首页</span>
    </Menu-item>
    <Menu-item name="hello">
      <Icon type="ios-people"></Icon>
      <span class="menu-font">更多</span>
    </Menu-item>
    <Menu-item name="4">
      <Icon type="settings"></Icon>
      <span class="menu-font">关于我们</span>
    </Menu-item>
  </Menu>
</template>
<script>
  export default {
    name: 'topMenu',
    data () {
      return {
          activeName: '',
          openNames: []
      }
    },
    created () {
      this.update()
    },
    methods:{
      handleSelect (name) {
        this.$router.push(name)
      },
      update (route) {
        const path = route ? route.path : this.$route.path
        const openName = path.split('/')[1]
        const activeName = openName
        this.$set(this, 'activeName', activeName)
        this.$set(this, 'openNames', [openName])

        this.$nextTick(() => {
          this.$refs.menu.updateActiveName()
          this.$refs.menu.$children.forEach((item) => {
            item.opened = false
          })
          this.$refs.menu.updateOpened()
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .top-menu {
    display: inline-block;
    position: absolute;
    right: 0;
    height: 80px;
    line-height: 80px;
  }
  .ivu-menu-item,.ivu-menu-submenu{
    font-size: 1.2em;
  }

</style>
