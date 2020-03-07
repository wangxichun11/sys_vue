<template>
  <div id="app">
    <el-container>
      <el-header>
        <p>xxx审计日志管理系统</p>
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
                @select="handleSelect"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/about">审计一</el-menu-item>
                    <el-menu-item index="/audit">审计二</el-menu-item>

                  </el-menu-item-group>
                  
                </el-submenu>
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
    },
    handleSelect(key, keyPath) {
      this.$router.push({ path: keyPath[1] });
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
.el-header {
  border-bottom: 1px solid #000;
  p {
    font-size: 20px;
    line-height: 60px;
  }
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
