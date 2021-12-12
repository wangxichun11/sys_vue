<template>
  <div>
    <div class="tab">
      <ul class="top">
        <li
          :class="{ active: checked == i }"
          @click="activeFn(i)"
          v-for="(item, i) in tabSize"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
      <div class="bottom">
        <div v-if="checked == 0"><img src="../assets/1.jpg" alt="" /></div>
        <div v-if="checked == 1"><img src="../assets/2.jpg" alt="" /></div>
        <div v-if="checked == 2"><img src="../assets/3.jpg" alt="" /></div>
        <div v-if="checked == 3"><img src="../assets/4.jpg" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lunbo",
  data() {
    return {
      checked: 0,
      tabSize: [1, 2, 3, 4],
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.tabFn();
  },

  methods: {
    activeFn(i) {
      this.checked = i;
    },
    tabFn() {
      setInterval(()=> {
        this.checked++;
        console.log(this.checked);
        if (this.checked >= 4) {
          this.checked = 0;
        }
      }, 2000);
    },
  },
};
</script>
<style lang="less" scoped>
.tab {
  width: 100%;
  height: 500px;
}
.top {
  overflow: hidden;
}
.top li {
  width: 100px;
  height: 30px;
  margin: 20px;
  float: left;
  background-color: greenyellow;
  list-style: none;
  text-align: center;
  line-height: 30px;
}
.bottom div {
  width: 100%;
  height: 100%;
  background: gold;
  & > img {
    width: 100%;
    height: 100%;
  }
}
.active {
  background-color: red !important;
}
</style>
