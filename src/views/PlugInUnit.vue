<template>
  <div>
      <button v-tanK>按钮</button>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
// import addmessage from "../components/form";
import Vue from 'vue'
export default {
  myOption: 'hello!',
  mounted() {
    this.$myMethod();
    Vue.myGlobalMethod();
    // this.$loading.show();
    // console.log(this.$loading)
  }
};
</script>
