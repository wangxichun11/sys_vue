<template>
  <div id="app">
    <el-container>
      <el-header>
        <p>xxx管理系统</p>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <h1 style="text-align: center;">菜单</h1>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1"><router-link to="/">首页</router-link></el-menu-item>
                    <el-menu-item index="1-1"><router-link to="/about">关于</router-link></el-menu-item>
                    <el-menu-item index="1-1"><router-link to="/audit">审计</router-link></el-menu-item>
                    
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  
}
.el-container {
  height: 100%;
}
.el-header{
  border-bottom: 1px solid #000;
}
.el-aside {
  color: #333;
  height: 100%;
  border-right: 1px solid #000;
}

.el-main {
  // background-color: #e9eef3;
  color: #333;
  height: 100%;
  padding: 0;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
