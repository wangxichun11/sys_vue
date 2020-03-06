<template>
  <div>
    <div class="audit_search">

      <span>地址：</span>
      <el-input v-model="addres" placeholder="请输入内容" clearable></el-input>

      <span class="span_button">
        <el-button @click="handleSearch()" type="primary" icon="el-icon-search">搜索</el-button>
      </span>
    </div>
    <el-table
      :data="tableData"
      ref="dataTable"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="addres" label="地址"></el-table-column>
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
  data() {
    return {
      addres: "",
      table_list: []
    };
  },
  created() {
    this.$axios.get("/user").then(res => {
      if (res.status == 200) {
        this.table_list = res.data.data;
      }
    });
  },
  computed: {
    tableData() {
      const addres = this.addres;

      if (addres) {
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        // 注意： filter() 不会对空数组进行检测。
        // 注意： filter() 不会改变原始数组。
        return this.table_list.filter(data => {
          // some() 方法用于检测数组中的元素是否满足指定条件;
          // some() 方法会依次执行数组的每个元素：
          // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
          // 如果没有满足条件的元素，则返回false。
          // 注意： some() 不会对空数组进行检测。
          // 注意： some() 不会改变原始数组。
          return Object.keys(data).some(key => {
            // console.log(data[key]);
            // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
            // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
            if (String(data[key]).indexOf(addres) > -1) {
              console.log(data[key]);
              return true;
            }
          });
        });
      }

      return this.table_list;
    }
  },
  methods: {
    tableRowClassName({rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleClick(row) {
      this.$confirm(`你点击了第${row.id}行！！！`,`提示`, {
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
    },
    handleSearch() {}
  }
};
</script>
