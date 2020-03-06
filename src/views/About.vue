<template>
  <div class="about">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="content_list">
          <p>审计日志代办</p>
          <span>2983个</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="content_list">
          <p>审计日志代办</p>
          <span>2983个</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="content_list">
          <p>审计日志代办</p>
          <span>2983个</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="content_list">
          <p>审计日志代办</p>
          <span>2983个</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span>
            <i class="el-icon-message-solid"></i>消息提醒
          </span>
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
          <span>
            <i class="el-icon-user-solid"></i>平台访问人数
          </span>
          <div class="echarts-bar" id="echarts-bar"></div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <span>
            <i class="el-icon-message-solid"></i>消息提醒
          </span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <span>
            <i class="el-icon-user-solid"></i>平台访问率
          </span>
          <div class="liquidFillChart" id="liquidFillChart"></div>
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
  margin-bottom: 20px;
  & > span {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
  }
}
.content_list {
  border-radius: 4px;
  padding: 5px;
  height: 60px;
  text-align: center;
  background: #fff;
  box-shadow: 0px 10px 24px 0px rgba(97, 110, 127, 0.29);
  line-height: 30px;
  margin-bottom: 20px;
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
.echarts-bar,.liquidFillChart {
  width: 100%;
  height: calc(100% - 30px);
}
</style>
<script>
import 'echarts-liquidfill/src/liquidFill.js'; //在这里引入
export default {
  name: "about",
  data() {
    return {};
  },
  created() {
    this.$axios.get("/user").then(res => {
      if (res.status == 200) {
        console.log(res);
      }
    });
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts-bar"));
    this.drawChart();
    
    this.liquidFill();
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
    },
    liquidFill() {
      this.liquidFillChart = this.$echarts.init(document.getElementById("liquidFillChart"));
      let option = {
        title: {
          textStyle: {
            fontWeight: "normal",
            fontSize: 25,
            color: "rgb(97, 142, 205)"
          }
        },
        series: [
          {
            type: "liquidFill",
            radius: "80%",
            data: [0.12,0.12],
            backgroundStyle: {
              borderWidth: 5,
              borderColor: "rgb(255,0,255,0.9)",
              color: "rgb(255,0,255,0.01)"
            },
            label: {
              normal: {
                formatter: (0.12 * 100).toFixed(2) + "%",
                textStyle: {
                  fontSize: 50
                }
              }
            }
          }
        ]
      };
      this.liquidFillChart.setOption(option);
      window.onresize = function() {
        this.liquidFillChart.resize();
      };
    }
  }
};
</script>
