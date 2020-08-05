<template>
  <el-form-item :label="name">
    <el-select v-model="svalue" placeholder="请选择" clearable :disabled="disabled">
      <el-option v-for="item in options" :key="item.key" :label="item.value" :value="item.key"></el-option>
    </el-select>
  </el-form-item>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  props: {
    value:String,
    cmovies: String, //category对应的值 类似与模块名 true
    type: String, //type对应的值    true
    name: String, //select的名字比如 “合同类型:”  true
    watchSelect: Boolean, //监听select 清空 如果多个组件的话 可以统一清空
    selected: String, //判断select 是否默认选中 true为选中 false 为不选中 不写为false
    selectArr: Array, //根据数组展示指定字段 key 必须一致 true
    disabled: Boolean, //true
  },
  data() {
    return {
      options: [],
      svalue: "",
    };
  },
  mounted() {
    //初始话下拉框的值
    this.svalue = this.svalue;
  },
  created() {
    this.findSelect();
  },
  methods: {
    findSelect() {
      let that = this;
      if (!sessionStorage.configList) {
        this.$axios.get("/select_list").then((res) => {
          let data = res.data;
          let selectFind = new onSelset(
            data,
            this.cmovies,
            this.type,
            this.selectArr,
            this.selected
          );
          selectFind.showSelect();
        });
      }
      class onSelset {
        constructor(data, cmovies, type, selectArr, selected) {
          this.data = data;
          this.cmovies = cmovies;
          this.type = type;
          this.selectArr = selectArr || "";
          this.selected = selected || "";
        }
        showSelect() {
          this.data.map((item) => {
            if (item.category == this.cmovies && item.type == this.type) {
              if (this.selected == item.key) {
                that.svalue = item.key;
              }
              if (this.selectArr == "") {
                that.options.push(item);
              } else {
                this.selectArr.forEach((NumItem) => {
                  if (
                    item.category == this.cmovies &&
                    item.type == this.type &&
                    item.key == NumItem
                  ) {
                    that.options.push(item);
                  }
                });
              }
            }
          });
        }
      }
    },
  },
  watch: {
    //判断下拉框的值是否有改变
    svalue(val, oldVal) {
      if (val != oldVal) {
        this.$emit("input", this.svalue);
      }
    },
    value: function(val, oldVal) {
      debugger;
      console.log(oldVal);
      if (!val) {
        this.svalue = "";
      }else{
        this.svalue = val
      }
    },
    watchSelect() {
      this.svalue = "";
    },
  },
};
</script>

