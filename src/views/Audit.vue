<template>
  <div>
    <div class="audit_search">
      <span>姓名：</span>
      <el-input v-model="input_name" placeholder="请输入内容" clearable></el-input>
      <span>地址：</span>
      <el-input v-model="input_address" placeholder="请输入内容" clearable></el-input>
      <span>日期：</span>
      <el-date-picker v-model="input_data" type="date" placeholder="选择日期"></el-date-picker>
      <span class="span_button">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </span>
    </div>
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style lang="less" scoped>
.audit_search {
  span {
    display: inline-block;
    padding: 0 10px;
  }
  .span_button {
    float: right;
  }
}
.el-input {
  width: 200px;
}
</style>
<script>
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleClick(row) {
      console.log(row.date);
      this.$confirm("你点击了查看！！！", "提示", {
        dangerouslyUseHTMLString: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消"
          });
        });
    }
  },
  data() {
    return {
      input_data: "",
      input_name: "",
      input_address: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: "1"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: "2"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: "3"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          id: "4"
        }
      ]
    };
  }
};
</script>
