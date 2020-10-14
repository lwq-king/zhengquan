<template>
  <div id="prolist">
    <div class="s_title">
      <i class="el-icon-pie-chart"></i>
      <span>订单统计列表</span>
    </div>
    <div class="prolist_search">
      <div class="prolist_search_time">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
      </div>
      <div id="canvascharts"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "prolist",
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
  mounted() {
    let mycharts = this.$echarts.init(document.getElementById("canvascharts"));
    this.$axios.post("/geteachartsinfo").then((res) => {
      // 绘制图表
      mycharts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["撤单", "待成交", "部分成交", "完成成交"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            emphasis: {
              label: {
                show: true,
                fontSize: "13",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: true,
            },
            data: res.data.result,
          },
        ],
      });
    });
  },
};
</script>
<style lang="less" scope>
@import url("../../../../assets/css/index.less");
#prolist {
  width: @width;
  height: @height;
  box-sizing: border-box;
  padding: 10px;
  .s_title {
    font-size: 0.9rem;
    i {
      vertical-align: middle;
      color: #1a8fee;
    }
    span {
      vertical-align: middle;
      color: rgb(155, 150, 150);
    }
  }
  .prolist_search {
    padding: 10px 0;
    .prolist_search_time {
      text-align: center;
      padding: 5px 0;
      .borderRadius;
    }
    #canvascharts {
      height: 200px;
    }
  }
}
</style>