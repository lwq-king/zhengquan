<template>
  <div id="actorformlist">
    <form action method="get" @submit="formTbale">
      <ul class="formmenu">
        <li>
          <span>角色名称</span>
          <el-input v-model="val1" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <span>机构类型：</span>
          <el-select v-model="valuetype" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
      </ul>
      <div class="butibfo">
        <el-button type="primary" icon="el-icon-search" native-type="submit">搜索</el-button>
        <el-button type="danger" icon="el-icon-refresh-right" native-type="reset">重置</el-button>
      </div>
    </form>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "actorformlist",
  data() {
    return {
      val1: "",
      valuetype: "",
      options2: [
        {
          value: "运营中心",
          label: "运营中心",
        },
        {
          value: "顶层公司/集团",
          label: "顶层公司/集团",
        },
        {
          value: "交易商",
          label: "交易商",
        },
      ],
    };
  },
  methods: {
    formTbale(e) {
      let action = "";
      if (this.val1  || this.valuetype) {
        action = "FILTER_DATA";
      } else {
        action = "ALL_DATA";
      }
      let all=this.getActorData.result;
      this.$store.commit("filterData", {
        type: action,
        msg: {
          actorid: this.val1,
          type: this.valuetype,
        },
        data:all
      });
      this.$eventEmit.emit("getfilterData");
      e.preventDefault();
    },
  },
  computed:{
      ...mapGetters(["getActorData"])
  }
};
</script>
<style>
.butibfo,.formmenu{
    display: inline-block;
}
</style>