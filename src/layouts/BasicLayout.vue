<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu class="home__side-menu" 
        theme="dark" 
        :defaultSelectedKeys="['1']" 
        mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
          <a-menu-item key="6">Tom</a-menu-item>
          <a-menu-item key="7">Bill</a-menu-item>
          <a-menu-item key="8">Alex</a-menu-item>
          <a-menu-item key="9">Tom</a-menu-item>
          <a-menu-item key="10">Bill</a-menu-item>
          <a-menu-item key="11">Alex</a-menu-item>
          <a-menu-item key="12">Tom</a-menu-item>
          <a-menu-item key="13">Bill</a-menu-item>
          <a-menu-item key="14">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="15">Team 1</a-menu-item>
          <a-menu-item key="16">Team 2</a-menu-item>
          <a-menu-item key="17">Team 1</a-menu-item>
          <a-menu-item key="18">Team 2</a-menu-item>
          <a-menu-item key="19">Team 1</a-menu-item>
          <a-menu-item key="20">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="21">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout 
      class="home__right-side" 
      :class="{trigger: collapsed}">
      <a-layout-header class="home__fix-head">
        <a-icon
          class="home__trigger-icon"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapseTriggerHandler"
        />
      </a-layout-header>
      <a-layout-content class="home__content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        @cpoyRight
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    collapseTriggerHandler() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.ant-layout-sider {
  position: fixed;
  height: 100vh;
}

.home__side-menu {
  height: calc(100vh - 64px);
  overflow-y: auto;
}

.home__side-menu::-webkit-scrollbar {
  width: 0;
}

.home__side-menu::-webkit-scrollbar-thumb {
  background-color: rgb(0, 21, 41);
}

.home__side-menu::-webkit-scrollbar-track {
  background-color: transparent;
}

.ant-layout-sider-has-trigger {
  padding-bottom: 0;
}

/deep/ .ant-layout-sider-trigger {
  display: none;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.home__right-side {
  padding-left: 200px;
  transition: all .2s ease-in-out;
}

.home__right-side.trigger {
  padding-left: 80px;
}

.home__fix-head {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 200px;
  right: 0;
  padding: 0;
  background-color: #fff;
  width: calc(100% - 200px);
  transition: all .2s ease-in-out;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  z-index: 11;
}

.home__right-side.trigger .home__fix-head {
  left: 80px;
  width: calc(100% - 80px);
}

.home__trigger-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
}

.home__trigger-icon svg {
  width: 20px;
  height: 20px;
}

.home__content {
  padding-top: 64px;
}
</style>