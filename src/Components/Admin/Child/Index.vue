<template>
  <div id="indexinfo">
    <div class="leftbox">
      <div class="leftele box1">
        <LogoInfo :logo="logo" :name="name" :detail="detail" :gsnum="gsnum" :xsp="xsp"></LogoInfo>
      </div>
      <div class="leftele box2">
        <daiInfo :synum="synum" :sydec="sydec" :syasc="syasc" :sykfc="sykfc"></daiInfo>
      </div>
      <div class="leftele box3">
        <div class="box3_left">
          <proInfo></proInfo>
        </div>
        <div class="box3_right">
          <tableInfo></tableInfo>
        </div>
      </div>
    </div>
    <div class="rightbox">
      <div class="leftele box4">
        <msgInfo :msg="msg">
          <template>
            <div class="s_title">
              <i class="el-icon-s-ticket"></i>
              <span>消息/通知</span>
            </div>
          </template>
          <template v-slot:bindData="Msg">
            <p>
              <router-link :to="`/Message?icon=el-icon-s-ticket&name=消息/通知&num=${Msg.data.id}&index=${Msg.index}`">{{Msg.data.name}}</router-link>
            </p>
            <span>{{Msg.data.time}}</span>
          </template>
        </msgInfo>
      </div>
      <div class="leftele box5">
        <msgInfo :msg="msglist">
          <template>
            <div class="s_title">
              <i class="el-icon-s-ticket"></i>
              <span>系统公告</span>
            </div>
          </template>
          <template v-slot:bindData="Msg">
            <p>
              <router-link :to="`/Message?icon=el-icon-s-ticket&name=系统公告&num=${Msg.data.id}&index=${Msg.index}`">{{Msg.data.name}}</router-link>
            </p>
          </template>
        </msgInfo>
      </div>
      <div class="leftele box6">
        <msgInfo :msg="msgSy">
          <template>
            <div class="s_title">
              <i class="el-icon-question"></i>
              <span>系统帮助</span>
            </div>
          </template>
          <template v-slot:bindData="Msg">
            <p>
              <router-link :to="`/Message?icon=el-icon-question&name=系统帮助&num=${Msg.data.id}&index=${Msg.index}`">{{Msg.data.name}}</router-link>
            </p>
          </template>
        </msgInfo>
      </div>
    </div>
  </div>
</template>
<script>
let LogoInfo = () => import("./SmallPage/LogoInfo");
let daiInfo = () => import("./SmallPage/Daiinfo");
let proInfo = () => import("./SmallPage/Prolist");
let tableInfo = () => import("./SmallPage/GsTableinfo");
let msgInfo = () => import("./SmallPage/Message");
export default {
  name: "indexinfo",
  components: {
    LogoInfo,
    daiInfo,
    proInfo,
    tableInfo,
    msgInfo,
  },
  data() {
    return {
      logo: "",
      name: "",
      detail: "",
      gsnum: 0,
      xsp: 0,
      synum: 0,
      sydec: 0,
      syasc: 0,
      sykfc: 0,
      msg: [
        {
          id: "1000",
          name: "成交通知",
          time: "2019-10-01",
        },
        {
          id: "1001",
          name: "用户注册通知",
          time: "2019-10-01",
        },
        {
          id: "1002",
          name: "产品下架通知",
          time: "2019-10-01",
        },
      ],
      msglist: [
        {
          id: "1011",
          name: "机构调整公告",
        },
        {
          id: "1012",
          name: "系统升级公告",
        },
        {
          id: "1013",
          name: "日志更新公告",
        },
      ],
      msgSy: [
        {
          id: "2011",
          name: "帮助手册v3.0",
        },
        {
          id: "2010",
          name: "帮助手册v2.0",
        },
        {
          id: "2009",
          name: "帮助手册v1.0",
        },
      ],
    };
  },
  mounted() {
    this.$axios
      .post("/gsinfo")
      .then((res) => {
        this.logo = res.data.result.logo;
        this.name = res.data.result.name;
        this.detail = res.data.result.detail;
        this.gsnum = res.data.result.gsnum;
        this.xsp = res.data.result.xsp;
        this.synum = res.data.result.synum;
        this.sydec = res.data.result.sydec;
        this.syasc = res.data.result.syasc;
        this.sykfc = res.data.result.sykfc;
      })
      .catch((err) => {
        throw err;
      });
  },
};
</script>
<style lang="less" scope>
@import url("../../../assets/css/index.less");
#indexinfo {
  width: @width;
  height: auto;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  .leftbox {
    width: @width * 0.8;
    display: flex;
    flex-direction: column;
    .box1 {
      height: 118px;
      .borderRadius;
      background-image: url("../../../../static/image/company_bg.d0846830.png");
      background-size: 100%;
      box-sizing: border-box;
      padding: 15px;
      display: flex;
      justify-content: space-between;
    }
    .box2 {
      height: 200px;
      margin-top: 10px;
      .borderRadius;
      overflow: hidden;
    }
    .box3 {
      height: 295px;
      margin-top: 10px;
      display: flex;
      .box3_left,
      .box3_right {
        width: 50%;
        background-color: #fff;
        .borderRadius;
        overflow: hidden;
      }
      .box3_right {
        margin-left: 10px;
      }
    }
  }
  .rightbox {
    width: @width * 0.2;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    .box4 {
      height: 328px;
      background-color: #fff;
      .borderRadius;
    }
    .box5 {
      height: 145px;
      margin-top: 10px;
      background-color: #fff;
      .borderRadius;
    }
    .box6 {
      height: 140px;
      margin-top: 10px;
      background-color: #fff;
      .borderRadius;
    }
  }
}
</style>