<template>
  <div id="jigoucai">
    <List :table="tableData" :prop="propslist" :label="labellist">
      <template v-slot:formtable>
        <form action method="get" @submit="formTbale">
          <ul>
            <li>
              <span>菜单编号：</span>
              <el-input v-model="val1" placeholder="请输入内容"></el-input>
            </li>
            <li>
              <span>菜单名称：</span>
              <el-input v-model="val2" placeholder="请输入内容"></el-input>
            </li>
            <li>
              <span>菜单等级：</span>
              <el-select v-model="valuede" placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
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
      </template>
      <template v-slot:upbutton>
        <el-button @click="showMenu" type="primary" icon="el-icon-circle-plus">新增菜单</el-button>
        <dialoginfo
          v-if="dialogFormVisible&&show==0"
          action="PUSH_sys_DATA"
          titleTxt="新增菜单"
          :dialogFormVisible="dialogFormVisible"
          :element="ele"
          :form="form"
        >
          <template #Formlist="user">
            <newinsert :form="user.list"></newinsert>
          </template>
        </dialoginfo>
      </template>
      <template v-slot:button="infobut">
        <el-button
          @click.native.prevent="infoRow(infobut.but, tableData)"
          type="text"
          size="small"
        >菜单操作维护</el-button>
        <el-button
          @click.native.prevent="updateRow(infobut.but, tableData)"
          type="text"
          size="small"
        >修改</el-button>
      </template>
      <template v-slot:listdailog>
        <dialoginfo
          v-if="dialogFormVisible&&show==1"
          titleTxt="修改菜单"
          :dialogFormVisible="dialogFormVisible"
          action="UPDATE_sys_DATA"
          :index="uindex"
          :element="ele"
          :form="info"
        >
          <template #Formlist="user">
            <newinsert :form="user.list"></newinsert>
          </template>
        </dialoginfo>
      </template>
      <template v-slot:pageList>
        <page :totldata="pageNumdata"></page>
      </template>
    </List>
  </div>
</template>
<script>
import List from "./SmallPage/List";
import { mapGetters } from "vuex";
import Store from "@/Vuex/Store.js";
let dialoginfo = () => import("./Dialog");
let page = () => import("./SmallPage/PageNum");
let newinsert = () => import("./SmallPage/NewInsertMenu");
export default {
  name: "jigoucai",
  components: {
    List,
    dialoginfo,
    page,
    newinsert,
  },
  data() {
    return {
      show: 0,
      ele: this,
      propslist: [
        "menuid",
        "menuname",
        "menutype",
        "menuurl",
        "menulevel",
        "parmenuid",
        "parname",
      ],
      labellist: [
        "菜单编号",
        "菜单名称",
        "机构类型",
        "菜单Url",
        "菜单等级",
        "父菜单编号",
        "父菜单名称",
      ],
      val1: "",
      val2: "",
      valuede: "",
      valuetype: "",
      options1: [
        {
          value: "一级菜单",
          label: "一级菜单",
        },
        {
          value: "二级菜单",
          label: "二级菜单",
        },
        {
          value: "三级菜单",
          label: "三级菜单",
        },
      ],
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
      num: 10,
      current: 1,
      tableData: null,
      dialogFormVisible: false,
      info: null,
      uindex: null,
      pageNumdata: null,
      form: {
        menuid: "",
        menutype: "",
        menuname: "",
        menulevel: "",
        menuurl: "",
        parname: "",
      },
    };
  },
  mounted() {
    this.getPagelist(this.current, this.num);
    this.$eventEmit.on("sendpage", (res) => {
      this.getPagelist(res, this.num);
    });
    this.$eventEmit.on("sendpagenum", (res) => {
      this.num = res;
      this.getPagelist(this.current, this.num);
    });
    this.$eventEmit.on("getfilterData", () => {
      this.current = 1;
      this.num = 10;
      this.getPagelist(this.current, this.num);
    });
  },
  computed: {
    ...mapGetters(["getUpdateData", "readData", "getAllData"]),
  },
  watch: {
    getUpdateData() {
      //监听到操作数据的状态发生变化
      this.getPagelist(this.current, this.num);
      this.pageNumdata = this.readData.length;
      Store.commit("updateStat");
    },
  },
  methods: {
    showMenu() {
      this.show = 0;
      this.dialogFormVisible = true;
    },
    infoRow(index, data) {},
    updateRow(scope, data) {
      this.show = 1;
      let index = scope.butlist;
      this.info = data[index];
      this.uindex = index;
      this.dialogFormVisible = true;
    },
    getPagelist(current, num) {
      this.loading = true;
      this.$axios
        .get("/getSyspageinfo", {
          params: {
            current: current,
            pagenum: num,
          },
        })
        .then((res) => {
          this.loading = false;
          this.tableData = res.data.result;
        });
    },
    formTbale(e) {
      let action = "";
      if (this.val1 || this.val2 || this.valuede || this.valuetype) {
        action = "FILTER_DATA";
      } else {
        action = "ALL_DATA";
      }
      let all = this.getAllData;
      this.$store.commit("filterData", {
        type: action,
        msg: {
          menuid: this.val1,
          menuname: this.val2,
          menulevel: this.valuede,
          menutype: this.valuetype,
        },
        data: all,
      });
      this.$eventEmit.emit("getfilterData");
      e.preventDefault();
    },
  },
};
</script>
<style lang="less" scope>
@import url("../../../assets/css/index.less");
#jigoucai {
  width: @width;
  height: @height;
  box-sizing: border-box;
  padding: 10px;
}
</style>