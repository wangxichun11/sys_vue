<template>
  <div class="list_todo" :data="listDate">
    <h1>存储数据</h1>
    <ul>
      <li v-for="(item,i) in list" v-show="i!==0" :key="i"><el-radio v-model="radio" :label="item">{{item}}</el-radio></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "list",
  data() {
    return {
      list: [],
      radio:1
    };
  },
  computed: {
    listDate() {
      let list = this.list;
      list.push(this.$store.state.text);
      return list;
    }
  }
};
</script>
<style lang="less" scoped>
.list_todo{
  width: 80%;
  margin: 0 auto;
  &>h1{
    text-align: center;
  }
  &>ul{
    list-style: none;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 0 10px;
    height: 240px;
    overflow: auto;
    &>li{
      line-height: 40px;
    }
  }
}
</style>

