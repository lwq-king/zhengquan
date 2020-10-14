<template>
  <div id="login">
    <div class="centerlogin">
      <img class="leftBotImage" src="static/image/login_bg_1.dfe3d5ed.png" alt />
      <img class="tightTopImage" src="static/image/login_bg_0.100e2602.png" alt />
      <div class="loginForm">
        <v-login :userid="id" :pass="pwd"></v-login>
      </div>
    </div>
  </div>
</template>
<script>
import {Base64} from 'js-base64'
export default {
  name: "login",
  components:{
     'v-login':()=>import('./LoginChildComponents/LoginForm')
  },
  mounted(){
    let data=this.$cookies.get("User");
    if(data)
    {
      let user=JSON.parse(Base64.decode(data));
      this.id=user.id;
      this.pwd=user.pwd;
    }
  },
  data(){
    return {
      id:'',
      pwd:''
    }
  }
};
</script>
<style lang='less' scope>
@import url('../assets/css/index.less');
#login {
  width: @width;
  height: @height;
  position: relative;
  background-image: url("../../static/image/login_background.aac5fe6d.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .centerlogin {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: @width * 0.8;
    height: @height * 0.8;
    background-color: @bgcolor;
    border-radius: 20px;
    box-shadow: 0 0 50px #4e4e4e;
    overflow: hidden;
    .leftBotImage {
      position: absolute;
      left: 0;
      bottom: 0;
      width: @width * 0.5;
    }
    .tightTopImage {
      position: absolute;
      right: 0;
      top: 0;
      width: @width * 0.2;
    }
    .loginForm{
        width: @width * 0.4;
        height: @width * 0.4;
        position: absolute;
        right: @width * 0.05;
        top: @height * 0.3;
    }
  }
}
</style>