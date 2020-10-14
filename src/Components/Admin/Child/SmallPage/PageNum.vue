<template>
  <div id="pagenum">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagenum"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totle"
    ></el-pagination>
  </div>
</template>
<script>
import Store from "@/Vuex/Store.js";
import { mapGetters } from "vuex";
export default {
  name: "pagenum",
  props: ["totldata"],
  data() {
    return {
      currentPage: 1,
      totle: 0,
      pagenum: 10,
    };
  },
  mounted() {
    this.totle = this.readData.length;
    this.$eventEmit.on("getfilterData", () => {
      this.totle = this.readData.length;
    });
  },
  watch: {
    totldata(n) {
      this.totle = n;
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$eventEmit.emit("sendpagenum", val);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$eventEmit.emit("sendpage", val);
    },
  },
  computed: {
    ...mapGetters(["readData"]),
  },
};
</script>
<style>
</style>