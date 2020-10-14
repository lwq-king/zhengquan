<template>
  <div id="actorinfo">
    <List :table="tableData" :prop="propslist" :label="labellist">
      <template v-slot:formtable>
        <!-- form表单 -->
        <Formlist></Formlist>
      </template>
      <template v-slot:upbutton>
        <el-button @click="showMenu" type="primary" icon="el-icon-circle-plus">新增角色</el-button>
        <dialoginfo
          v-if="dialogFormVisible&&show==0"
          action="PUSH_Actor_DATA"
          titleTxt="新增角色"
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
        >分配权限</el-button>
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
          :form="info"
          :dialogFormVisible="dialogFormVisible"
          action="UPDATE_ACTOR_DATA"
          :index="uindex"
          :element="ele"
        >
          <template #Formlist="user">
            <newinsert :form="user.list"></newinsert>
          </template>
        </dialoginfo>
        <dialoginfo
          v-if="dialogFormVisible&&show==3"
          titleTxt="修改权限"
          :form="info"
          :dialogFormVisible="dialogFormVisible"
          action="UPDATE_ACTOR_DATA"
          :index="uindex"
          :element="ele"
        >
          <template #Formlist>
            <tree></tree>
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
let Formlist = () => import("./SmallPage/ActorForm");
let newinsert = () => import("./SmallPage/NewInsertActor");
let tree = () => import("./SmallPage/Tree");
export default {
  name: "actorinfo",
  components: {
    List,
    dialoginfo,
    page,
    Formlist,
    newinsert,
    tree,
  },
  data() {
    return {
      show: 0,
      ele: this,
      propslist: ["actorid", "actorname", "type", "name", "isguan", "beizhu"],
      labellist: [
        "角色ID",
        "角色名称",
        "机构类型",
        "机构名称",
        "是否是管理员",
        "备注",
      ],
      num: 10,
      current: 1,
      tableData: null,
      dialogFormVisible: false,
      info: null,
      uindex: null,
      pageNumdata: null,
      form: {
        type: "CNMPANY",
        name: "开源总司",
        actorname: "",
        beizhu: "",
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
    ...mapGetters(["getUpdateData", "readActorData"]),
  },
  watch: {
    getUpdateData() {
      //监听到操作数据的状态发生变化
      this.getPagelist(this.current, this.num);
      this.pageNumdata = this.readActorData.length;
      Store.commit("updateStat");
    },
  },
  methods: {
    showMenu() {
      this.show = 0;
      this.dialogFormVisible = true;
    },
    infoRow(index, data) {
      this.show = 3;
      this.dialogFormVisible = true;
    },
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
        .get("/getActorinfo", {
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
  },
};
</script>
<style lang="less" scope>
@import url("../../../assets/css/index.less");
#actorinfo {
  width: @width;
  height: @height;
  box-sizing: border-box;
  padding: 10px;
}
</style>