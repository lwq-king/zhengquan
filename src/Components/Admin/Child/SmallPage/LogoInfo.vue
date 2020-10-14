<template>
  <div id="logoInfo">
    <div class="logoimg">
      <img :src="logo" alt />
      <div class="gstxt">
        <h2>{{name}}</h2>
        <h4>{{detail}}</h4>
      </div>
    </div>
    <div class="gs_info">
      <div class="gs_left">
        <span>{{gsnum}}</span>
        <p>下属公司</p>
      </div>
      <div class="gs_right">
        <span>{{xsp}}</span>
        <p>系统操作员</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "logoInfo",
  props: {
    logo: "",
    name: "",
    detail: "",
    gsnum: 0,
    xsp: 0,
  },
};
</script>
<style lang="less">
@import url("../../../../assets/css/index.less");
#logoInfo {
  width: @width;
  display: flex;
  justify-content: space-between;
  .logoimg {
    width: 50%;
    .borderRadius(50%);
    display: flex;
    vertical-align: middle;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      .borderRadius(50%);
    }
    .gstxt {
      vertical-align: middle;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      margin-left: 20px;
    }
  }
  .gs_info {
    width: 300px;
    background-color: rgba(23, 108, 187, 0.651);
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
}
</style>