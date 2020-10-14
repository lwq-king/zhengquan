<template>
  <div id="loginForm">
    <h3>{{name}}</h3>
    <div class="userform">
      <form  @submit="submitLogin">
        <div class="user_id">
          <span class="iconfont icon">&#xe96b;</span>
          <input type="text" v-model="id" />
        </div>
        <div class="user_pwd">
          <span class="iconfont icon">&#xe741;</span>
          <input :type="type" class="password" v-model="pwd" />
          <span
            class="iconfont y_icon"
            @click.prevent="changeS"
            onselectstart="return false"
            v-if="isShow"
          >&#xe7b2;</span>
          <span
            class="iconfont y_icon"
            @click.prevent="changeS"
            onselectstart="return false"
            v-else
          >&#xe7b3;</span>
        </div>
        <div class="remober">
          <input type="checkbox" v-model="single" />
          记住我
        </div>
        <button class="userbtn">登录</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { Base64 } from "js-base64";
export default {
  name: "loginForm",
  props: {
    userid: {
      type: String,
      default: "",
    },
    pass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      name: "证券后台系统",
      isShow: true,
      type: "password",
      single: false,
      id: this.userid,
      pwd: this.pass,
    };
  },
  methods: {
    submitLogin(e) {
      let that = this;
      if (that.id.length != 0 && that.pwd.length != 0) {
        that.checkUser().then((res) => {
          if (res.data.status === "OK") {
            //检测变量是否是true
            if (that.single) {
              let data = {
                id: that.id,
                pwd: that.pwd,
              };
              this.$cookies.set(
                "User",
                Base64.encode(JSON.stringify(data)),
                60 * 60 * 24
              );
            }
            this.$cookies.set("status", true, 60 * 60 * 24 * 2);
            //修改全局登陆状态
            that.$router.replace("/");
          } else {
            //登陆失败
            this.$Message.error("失败！账号或者密码错误！");
          }
        });
      } else {
        this.$Message({
          message: "警告！账号密码不能为空！",
          type: "warning",
        });
      }
      e.preventDefault();
    },
    async checkUser() {
      let that = this;
      let info = await new Promise((resolve, reject) => {
        that.$axios
          .post("/userlogin", {
            id: that.id,
            pwd: that.pwd,
          })
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
      return info;
    },
    changeS() {
      this.isShow = !this.isShow;
      if (!this.isShow) {
        this.type = "";
      } else {
        this.type = "password";
      }
    },
  },
  computed: {
    ...mapActions(["updateActionstatus"]),
  },
};
</script>
<style lang='less' scope>
@import url("../../assets/css/index.less");
#loginForm {
  h3 {
    text-align: center;
    font-size: 2.3rem;
    color: #356eea;
    margin: 20px 0;
    letter-spacing: 3px;
  }
  form {
    text-align: center;
    .user_id {
      position: relative;
      display: inline-block;
      width: @width * 0.8;
      height: 45px;
      border: 1px solid #979595;
      border-radius: 5px;
      overflow: hidden;
      box-sizing: border-box;
      padding-left: 2.3rem;
      .icon {
        position: absolute;
        left: 0.3rem;
        top: 0;
        display: block;
        height: 45px;
        line-height: 45px;
        font-size: 1.6rem;
      }
      input[type="text"] {
        width: @width;
        height: @height;
        outline: none;
        border: none;
        font-size: 1rem;
      }
    }
    .user_pwd {
      position: relative;
      display: inline-block;
      margin: 15px 0;
      width: @width * 0.8;
      height: 45px;
      border: 1px solid #979595;
      border-radius: 5px;
      overflow: hidden;
      box-sizing: border-box;
      padding-left: 2.3rem;
      .icon {
        position: absolute;
        left: 0.3rem;
        top: 0;
        display: block;
        height: 45px;
        line-height: 45px;
        font-size: 1.6rem;
      }
      input.password {
        font-size: 1rem;
        width: @width;
        height: @height;
        outline: none;
        border: none;
      }
      .y_icon {
        position: absolute;
        right: 0.3rem;
        top: 0;
        display: block;
        height: 45px;
        color: #838080;
        line-height: 45px;
        font-size: 1.4rem;
        cursor: pointer;
      }
    }
    .userbtn {
      width: @width * 0.8;
      height: 45px;
      border: 1px solid #2e50e1;
      border-radius: 5px;
      background-color: #2e50e1;
      color: @bgcolor;
    }
    .remober {
      display: inline-block;
      width: @width * 0.8;
      text-align: left;
      input[type="checkbox"] {
        position: relative;
        top: 2px;
      }
    }
  }
}
</style>