<template>
  <div id="daiinfo">
    <p class="s_title">
      <i class="el-icon-success"></i>
      <span>代办信息</span>
    </p>
    <div class="dai_box">
      <div class="dai_box_left">
        <div class="dai_box_left_title">客户管理</div>
        <div class="gs_info">
          <div class="gs_left">
            <span>{{synum}}</span>
            <p>销户待办</p>
          </div>
          <div class="gs_right">
            <span>{{sydec}}</span>
            <p>转组待办</p>
          </div>
        </div>
      </div>
      <div class="dai_box_right">
        <div class="dai_box_right_title">系统用户管理</div>
        <div class="gs_info">
          <div class="gs_left">
            <span>{{syasc}}</span>
            <p>密码重置待办</p>
          </div>
          <div class="gs_right">
            <span>{{sykfc}}</span>
            <p>待办名称</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "daiinfo",
  props:['synum','sydec','syasc','sykfc']
};
</script>
<style lang="less" scope>
@import url("../../../../assets/css/index.less");
#daiinfo {
  box-sizing: border-box;
  padding: 10px;
  background-color: #fff;
  width: @width;
  height: @height;
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
  .dai_box {
    margin-top: 10px;
    height: 150px;
    display: flex;
    .dai_box_left {
      width: 50%;
      .borderRadius;
      background-image: url("../../../../../static/image/bg_1.6cc399e5.png");
      background-size: 100%;
      overflow: hidden;
      .dai_box_left_title {
        .defaulstyle;
      }
    }
    .dai_box_right {
      margin-left: 10px;
      width: 50%;
      .borderRadius;
      background-image: url("../../../../../static/image/bg_0.f1493f69.png");
      background-size: 100%;
      .dai_box_right_title {
        .defaulstyle;
      }
    }
  }
}
.defaulstyle {
  box-sizing: border-box;
  padding: 0 10px;
  height: 45px;
  line-height: 45px;
  font-size: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.596);
  color: #fff;
}
.gs_info {
  margin: 0 auto;
  width: 300px;
  .borderRadius(10px);
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  color: #fff;
  span {
    font-weight: 700;
  }
  .gs_left {
    position: relative;
    text-align: center;
    line-height: 30px;
  }
  .gs_left::after {
    content: "";
    position: absolute;
    height: 45px;
    right: -30px;
    top: 8px;
    border-right: 1px solid hsl(0, 5%, 82%);
  }
  .gs_right {
    text-align: center;
    line-height: 30px;
  }
}
</style>