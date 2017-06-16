<template>
  <div>
    <div class="top-menu">
      <Menu ref="menu" mode="horizontal" theme="dark" :active-name="activeName" :open-names="openNames"
            @on-select="handleSelect">
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
    </div>
    <div class="small-menu">
      <Menu ref="menu" theme="dark" width="70" :active-name="activeName" :open-names="openNames"
            @on-select="smallSelect">
        <Submenu ref="smallSub" name="1">
          <template slot="title">
            <Icon type="navicon" color="#fff" size="36"></Icon>
          </template>
            <Menu-item name="index">首页</Menu-item>
            <Menu-item name="hello">更多</Menu-item>
            <Menu-item name="concat">举报管理</Menu-item>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'topMenu',
    data () {
      return {
        activeName: '',
        openNames: [],
      }
    },
    created () {
      this.update()
    },
    methods: {
      handleSelect (name) {
        this.$router.push(name)
      },
      smallSelect(name){
        this.$refs.smallSub.handleClick();
        this.$router.push(name);
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
  @import "../../style/common";
  .top-menu ul {
    display: inline-block;
    position: absolute;
    right: 0;
    height: $head-height;
    line-height: $head-height;
  }
  .small-menu {
    display: none;
    right: 10px;
    position: absolute;
    .ivu-menu-submenu {
      height: $head-height;
    }
    .ivu-menu-submenu-title {
      padding: 0 !important;
    }
  }

  .ivu-menu-item, .ivu-menu-submenu {
    font-size: 1.2em;
  }

  @media screen and (max-width: 768px) {
    .top-menu {
      display: none;
    }
    .small-menu {
      display: inline-block;
    }
  }
</style>
