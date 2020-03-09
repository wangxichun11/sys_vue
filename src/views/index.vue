<template>
  <div class="home">
    <input type="text" v-focus placeholder="我有v-focus,所以,我获取了焦点" />
    <h1>vue 和 localStorage 配合使用</h1>
    <el-input v-model="value_vuex" @keyup.native.enter="Btnsubmit" placeholder="请输入内容"></el-input>
    localStorage存储的值为：{{value_text}}
    <list></list>
  </div>
</template>


<script>
import list from "../components/list";
export default {
  name: "home",
  data() {
    return {
      value_vuex: "",
      value_text: ""
    };
  },
  components: {
    list
  },
  methods: {
    Btnsubmit() {
      this.$store.commit("addtext", this.value_vuex);
      this.value_text = localStorage.getItem("text");
    }
  }
};
</script>

