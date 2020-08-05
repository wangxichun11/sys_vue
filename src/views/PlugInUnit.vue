<template>
  <div>
    <el-form
      label-position="right"
      :inline="true"
      label-width="120px"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-button @click="toggle">Click Me</el-button>
      <on-select
        :watchSelect="watchSelect"
        v-model="prealarmStatus"
        name="告警状态："
        cmovies="logistics_tracking"
        type="prealarm_status"
        :selectArr="selectArr"
        :disabled="disabled"
        :selected="selected"
      ></on-select>
    </el-form>
    <!-- <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-top">
        <div
          v-show="show"
          v-bind:style="{ height: heightSize + 'px',display:'block'}"
          class="transition-box"
        >.el-zoom-in-top</div>
      </transition>
    </div>-->
    <el-tree :props="props" :load="loadNode" lazy show-checkbox></el-tree>
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
import onSelect from "../components/select";
export default {
  data() {
    return {
      show: "true",
      heightSize: 200,
      watchSelect: true,
      prealarmStatus: "",
      formInline: {},
      selectArr: ["PROCESSED", "UNTREATED"],
      // selectArr: [],
      disabled: false,
      selected: "PROCESSED",
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf",
      },
    };
  },
  components: {
    onSelect,
  },
  created() {},
  methods: {
    toggle() {
      // this.watchSelect = !this.watchSelect;
      console.log(this.prealarmStatus);
      // let heightSize = this.heightSize;
      // if (this.show == "true") {
      //   let timer = setInterval(() => {
      //     heightSize = heightSize + 5;
      //     this.heightSize = heightSize;
      //     heightSize == 500 ? clearInterval(timer) : "";
      //   }, 10);
      //   this.show = "false";
      // } else {
      //   let timer = setInterval(() => {
      //     heightSize = heightSize - 5;
      //     this.heightSize = heightSize;
      //     heightSize == 200 ? clearInterval(timer) : "";
      //   }, 10);
      //   this.show = "true";
      // }
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "region" }]);
      }
      // if (node.level > 1) return resolve([]);

      // setTimeout(() => {
      const data = [
        {
          name: "leaf",
          zones:true,
          leaf: true,
        },
        {
          name: "zone",
          
        },
      ];

      resolve(data);
      // }, 500);
    },
  },
};
</script>
