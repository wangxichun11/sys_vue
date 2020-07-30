<template>
  <div>
    <el-button @click="toggle">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-top">
        <div
          v-show="show"
          v-bind:style="{ height: heightSize + 'px',display:'block'}"
          class="transition-box"
        >.el-zoom-in-top</div>
      </transition>
    </div>
  </div>
</template>
<style lang="less" scoped>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      show: "true",
      heightSize: 200
    };
  },
  created() {},
  methods: {
    toggle() {
      let heightSize = this.heightSize;
      if (this.show == "true") {
        let timer = setInterval(() => {
          heightSize = heightSize + 5;
          this.heightSize = heightSize;
          heightSize == 500 ? clearInterval(timer) : "";
        }, 10);
        this.show = "false";
      } else {
        let timer = setInterval(() => {
          heightSize = heightSize - 5;
          this.heightSize = heightSize;
          heightSize == 200 ? clearInterval(timer) : "";
        }, 10);
        this.show = "true";
      }
    }
  }
};
</script>
