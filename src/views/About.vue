<template>
  <div class="about">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="content_list" style="background-color: rgb(89,192,192);">
          <p>审计日志代办</p>
          <span>2983个</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="content_list" style="background-color: rgb(252,85,76);">
          <p>审计日志代办</p>
          <span>2983个</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="content_list" style="background-color: rgb(251,209,58);">
          <p>审计日志代办</p>
          <span>2983个</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="content_list" style="background-color: rgb(80,197,228);">
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
            <i class="el-icon-message-solid"></i>2019年销售水量和主营业务收入对比
          </span>
          <div class="echartsOne" id="echartsOne"></div>
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
  color: #fff;
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
.echarts-bar,
.echartsOne,
.liquidFillChart {
  width: 100%;
  height: calc(100% - 30px);
}
</style>
<script>
import echarts from "echarts" 
import "echarts-liquidfill/src/liquidFill.js"; //在这里引入
export default {
  name: "about",
  data() {
    return {};
  },
  created() {
  },
  mounted() {
    this.drawChart();
    this.echartsOne();
    this.liquidFill();
  },
  methods: {
    drawChart() {
      this.myChart = this.$echarts.init(document.getElementById("echarts-bar"));
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
    echartsOne() {
      this.myChart = this.$echarts.init(document.getElementById("echartsOne"));
      let option = {
        title: {
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 20
          },
          top: "3%",
          left: "10%"
        },
        // backgroundColor: '#0f375f',
        grid: {
          top: "25%",
          bottom: "10%" //也可设置left和right设置距离来控制图表的大小
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true
            }
          }
        },
        legend: {
          data: ["销售水量", "主营业务"],
          top: "15%",
          textStyle: {
            color: "#ffffff"
          }
        },
        xAxis: {
          data: [
            "当年完成水量",
            "去年同期水量",
            "滚动目标值水量",
            "全年目标值水量",
            "当年完成金额",
            "去年同期金额",
            "滚动目标金额",
            "全年目标值"
          ],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#01FCE3"
            }
          },
          axisTick: {
            show: true //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ebf8ac" //X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: "value",
            name: "亿元",
            nameTextStyle: {
              color: "#ebf8ac"
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#FFFFFF"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ebf8ac"
              }
            }
          },
          {
            type: "value",
            name: "同比",
            nameTextStyle: {
              color: "#ebf8ac"
            },
            position: "right",
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              formatter: "{value} %", //右侧Y轴文字显示
              textStyle: {
                color: "#ebf8ac"
              }
            }
          },
          {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
              }
            }
          }
        ],
        series: [
          {
            name: "销售水量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#058cff"
            },
            lineStyle: {
              color: "#058cff"
            },
            areaStyle: {
              color: "rgba(5,140,255, 0.2)"
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
          },
          {
            name: "主营业务",
            type: "bar",
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00FFE3"
                  },
                  {
                    offset: 1,
                    color: "#4693EC"
                  }
                ])
              }
            },
            data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
          }
        ]
      };
      this.myChart.setOption(option);
      window.onresize = function() {
        this.myChart.resize();
      };
    },
    liquidFill() {
      this.liquidFillChart = this.$echarts.init(
        document.getElementById("liquidFillChart")
      );
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
            data: [0.12, 0.12],
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
