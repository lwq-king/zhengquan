<template>
  <div id="tableinfo">
    <el-table
      v-loading="loading"
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :row-class-name="tableRowClassName"
      :header-row-class-name="headername"
    >
      >
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="序号">
        <template slot-scope="scope">{{scope.$index+1}}</template>
      </el-table-column>
      <el-table-column v-for="(item,index) in proplist" :key="index" :prop="item" :label="labellist[index]"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
           <slot name="sublistbtn" :butlist="scope.$index"></slot>
        </template>
      </el-table-column>
    </el-table>
    <slot name="dailoglist">
    </slot>
  </div>
</template>
<script>

export default {
  name: "tableinfo",
  props:["tableData","proplist","labellist"],
  
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    headername() {
      return "header-row";
    },
    tableRowClassName({ row, rowIndex }) {
      return "success-row";
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style>
.el-table .warning-row {
  background: #cee2f5;
}
.el-table th,
.el-table tr {
  background-color: transparent;
}

.header-row {
  background-color: #1188f7 !important;
  color: #fff;
}
</style>