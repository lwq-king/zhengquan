<template>
  <div id="prolist">
    <div class="s_title">
      <i class="el-icon-pie-chart"></i>
      <span>订单统计列表</span>
    </div>
    <div class="prolist_search">
      <div class="prolist_search_time">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div id="canvaschartstable"></div>
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
      options: [
        {
          value: "0",
          label: "平台盈利",
        },
        {
          value: "1",
          label: "平台成本",
        },
        {
          value: "2",
          label: "平台亏损",
        },
      ],
      value: "",
    };
  },
  mounted() {
    let mycharts = this.$echarts.init(
      document.getElementById("canvaschartstable")
    );
    this.$axios.post("/geteachartstable").then((res) => {
      let xname = [];
      let yvalue = [];
      res.data.result.map((val, index) => {
        if (index % 2 == 0) {
          xname.push(val.name);
        } else {
          xname.push("");
        }
        yvalue.push(val.value);
      });
      // 绘制图表
      mycharts.setOption({
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#16cdee", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#1891f3", // 100% 处的颜色
            },
          ],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: xname,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        itemStyle: {
          barBorderRadius: [20, 20, 0, 0],
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "15%",
            data: yvalue,
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
      color: rgb(22, 205, 238);
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
    #canvaschartstable {
      height: 200px;
    }
  }
}
</style>