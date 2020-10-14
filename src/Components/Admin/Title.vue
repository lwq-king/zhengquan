<template>
  <div id="titleinfo" :class="{'animteinfo':!hide}">
    <div class="logo">
      <img :class="{'syslogoleft':showimg}" :src="logo" alt />
      <transition name="fadeleft">
        <span class="Sysname" v-if="hide">{{sysname}}</span>
      </transition>
      <span class="iconfont" @click="HideAnimate">&#xe83a;</span>
    </div>
    <div class="userStat">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "titleinfo",
  data() {
    return {
      logo: "../../../static/image/logo.45bbb710.png",
      sysname: "证券后台系统",
      hide: true,
      showimg: false,
    };
  },
  mounted() {
    let zhedie = this.$cookies.get("zhedie");
    if (zhedie) {
      this.hide =(zhedie=='false'?false:true);
    }
  },
  methods: {
    HideAnimate() {
      this.hide = !this.hide;
      //加入hide缓存
      this.$cookies.set("zhedie", this.hide, 60 * 60 * 24 * 2);

      this.$eventEmit.emit("changeLeftmenu", this.hide);
      this.showimg = true;
      setTimeout(() => {
        this.showimg = false;
      }, 200);
    },
  },
};
</script>
<style lang="less" scope>
@import url("../../assets/css/index.less");
.animteinfo {
  background-position-x: -100px !important;
}
.syslogoleft {
  animation: bouchLeft 0.2s ease-in;
  animation-fill-mode: forwards;
}
@keyframes bouchLeft {
  0% {
    opacity: 1;
    transform: translatex(0);
  }
  50% {
    opacity: 0;
    transform: translatex(-50px);
  }
  100% {
    opacity: 1;
    transform: translatex(0);
  }
}
#titleinfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: @height;
  width: @width;
  background-image: url("../../../static/image/navbar_bg_1.137fb7f1.png");
  background-position: 0 0;
  transition: all 0.2s ease-in;
  .logo {
    width: @width * 0.3;
    height: @height;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    img {
      width: @width * 0.11;
      height: auto;
      vertical-align: middle;
    }
    .Sysname {
      display: inline-block;
      width: 130px;
    }
    span {
      color: #fff;
      font-size: 1.3em;
      margin: 0 0.7rem;
      vertical-align: middle;
    }
  }
  .userStat {
    width: 300px;
    height: @height;
  }
}
.fadeleft-enter-active,
.fadeleft-leave-active {
  transition: all 0.2s ease-in;
}
.fadeleft-enter,
.fadeleft-leave-to {
  opacity: 0;
  width: 0px;
}
</style>