<template>
  <div :data="listDate">
    <ul>
      <li v-for="(item,i) in list" v-show="i!==0" :key="i">{{item}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "list",
  data() {
    return {
      list: []
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

