<template>
  <div class="home">
    <div class="home-content">
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in img_src" :key="item.startdate">
          <img v-lazy="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <ul>
      <li>
        <h1>vuex 和 localStorage 配合使用</h1>
        <el-input v-model="value_vuex" @keyup.native.enter="Btnsubmit" placeholder="请输入内容"></el-input>
        localStorage存储的值为：{{lStorage}}
        <list></list>
      </li>
      <li>
        <h1>prop 和 emit 父子组件传递</h1>
        <el-input
          v-model="valueProp"
          @keyup.native.enter="BtnsubmitOne"
          placeholder="请输入内容"
        ></el-input>
        <div>emit像父组件传递值：{{emit_value}}</div>
        
        <child-list :valueText="valueText" @show-value="funval"></child-list>
      </li>
    </ul>
  </div>
</template>


<script>
import childList from "../components/childList";
import list from "../components/list";
export default {
  name: "home",
  components: {
    list,
    childList,
    
  },
  data() {
    return {
      value_vuex: "",
      value_text: "",
      img_src: [],
      lStorage: "",
      valueProp:"",
      valueText:"",
      emit_value:""
    };
  },
  created() {
    this.lStorage = localStorage.getItem("text");
    this.$axios.get("api/bg/").then(res => {
      if (res.status == 200) {
        this.img_src = res.data.images;
      }
    });
  },
  methods: {
    Btnsubmit() {
      this.$store.commit("addtext", this.value_vuex);
      this.lStorage = localStorage.getItem("text");
    },
    BtnsubmitOne(){
      this.valueText = this.valueProp;
    },
    funval(data){
      this.emit_value = data.value;
    }
  }
};
</script>
<style lang="less" scoped>
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.home {
  width: 100%;
  & > ul {
    list-style: none;
    width: 100%;
    overflow: hidden;
  }
  & > ul > li {
    width: 50%;
    float: left;
  }
}
</style>

