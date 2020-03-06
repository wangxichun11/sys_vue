<template>
  <div class="about">
    <el-row :gutter="20">
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span>疫情最新消息</span>
          <ul class="list">
            <li>
              <el-link type="primary">好消息：新型冠状肺炎疫苗已经研发完毕</el-link>
              <span>2020-10-20</span>
            </li>
            <li>
              <el-link type="primary">好消息：新型冠状肺炎疫苗已经研发完毕</el-link>
              <span>2020-10-20</span>
            </li>
            <li>
              <el-link type="primary">好消息：新型冠状肺炎疫苗已经研发完毕</el-link>
              <span>2020-10-20</span>
            </li>
            <li>
              <el-link type="primary">好消息：新型冠状肺炎疫苗已经研发完毕</el-link>
              <span>2020-10-20</span>
            </li>
            <li>
              <el-link type="primary">好消息：新型冠状肺炎疫苗已经研发完毕</el-link>
              <span>2020-10-20</span>
            </li>
            <li>
              <el-link type="primary">好消息：新型冠状肺炎疫苗已经研发完毕</el-link>
              <span>2020-10-20</span>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span>疫情发展趋势图</span>
          <div class="echarts-bar" id="echarts-bar"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding: 5px;
  height: 300px;
  & > span {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
  }
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.list > li {
  list-style: none;
  line-height: 30px;
  span {
    float: right;
  }
}
.echarts-bar {
  width: 100%;
  height: calc(100% - 30px);
}
</style>
<script>
export default {
  name: "about",
  data (){
    return {
    }
  },
  created (){
    this.$axios.get('/user').then(
      (res) =>{
        if(res.status == 200){
          console.log(res);
        }
      }
    )
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts-bar"));
    this.drawChart();
  },
  methods: {
    drawChart() {
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      };
      this.myChart.setOption(option);
      window.onresize = function() {
        this.myChart.resize();
      };
    }
  }
};
</script>
