<template>
  <div id="user">
    <div class="userface">
      <img class="face" :src="face" alt />
    </div>
    <span class="username">欢迎，{{name}}</span>
    <span class="line">|</span>
    <div class="close" @click="userClose">
      <span class="iconfont">&#xeae2;</span>
      <span>退出</span>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "user",
  data() {
    return {
      face: "../../../static/image/user.png",
      name: "Lucky灬baibai",
    };
  },
  mounted() {
    console.log(this.$router);
  },
  methods: {
    userClose() {
      this.$cookies.remove("status");
      this.$cookies.remove("zhedie");
      this.$router.replace("/Login");
    },
  },
  computed: {
    ...mapActions(["updateActionstatus"]),
  },
};
</script>
<style lang="less" scope>
@import url("../../assets/css/index.less");
#user {
  color: #fff;
  height: @height;
  width: @width;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  .userface {
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
    margin: 0 0.5rem;
    .face {
      height: auto;
      width: 20px;
    }
  }
  .line {
    margin: 0 1rem;
    font-weight: bold;
  }
  .close {
    cursor: pointer;
  }
}
</style>