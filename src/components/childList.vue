<template>
  <div class="list_todo" :data="Proplist">
    <h1>存储数据</h1>
    <ul>
      <li @change="handleChange" v-for="(item,i) in value_Arr" v-show="i!==0" :key="i">
        <el-checkbox :label="item">{{item}}</el-checkbox>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "childList",
  props: {
    valueText: String
  },
  data() {
    return {
      value_Arr: []
    };
  },
  computed: {
    Proplist() {
      let value_Arr = this.value_Arr;
      value_Arr.push(this._props.valueText);
      return value_Arr;
    }
  },
  methods: {
    handleChange(e) {
      console.log(e.target.checked);
      console.log(e.target.value)
    }
  }
};
</script>
<style lang="less" scoped>
.list_todo {
  width: 80%;
  margin: 0 auto;
  & > h1 {
    text-align: center;
  }
  & > ul {
    list-style: none;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 0 10px;
    height: 240px;
    overflow: auto;
    & > li {
      line-height: 40px;
    }
  }
}
</style>

