<template>
  <div id="home">
    <div class="top_admin">
      <v-Title>
        <v-User></v-User>
      </v-Title>
    </div>
    <div class="bot_admin">
      <div class="menu" :id="minw?'minwidth':''">
        <v-menu></v-menu>
      </div>
      <div class="content">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
let Title = () => import("@/Components/Admin/Title");
let User = () => import("@/Components/Admin/UserStatus");
let menu = () => import("@/Components/Admin/Leftmenu");
export default {
  name: "home",
  components: {
    "v-Title": Title,
    "v-User": User,
    "v-menu": menu,
  },
  data() {
    return {
      minw: false,
    };
  },
  mounted() {
    let zhedie = this.$cookies.get("zhedie");
    if (zhedie) {
      let hide = zhedie == "false" ? false : true;
      this.minw = !hide;
    }
    this.$eventEmit.on("changeLeftmenu", (hide) => {
      this.minw = !hide;
    });
  },
};
</script>
<style lang="less" scope>
@import url("../assets/css/index.less");
#home {
  height: @height;
  width: @width;
  display: flex;
  flex-direction: column;
  .top_admin {
    flex: 1;
    border-bottom: 1px solid #000;
  }
  .bot_admin {
    flex: 10;
    display: flex;
    flex-direction: row;
    .menu {
      width: 200px;
      height: 100%;
      background-color: #4667d8;
      transition: all 0.2s ease-in-out;
      overflow: hidden;
    }
    #minwidth {
      width: 64px;
    }
    .content {
      flex: 7;
      height: 100%;
      background-color: hsl(0, 2%, 91%);
      overflow-y: scroll;
    }
  }
}
.fade-leave-active {
  transition: all 0.2s linear;
}
.fade-leave-to {
  transform: translatex(30px);
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.2s 0.2s linear;
}
.fade-enter {
  transform: translatex(-30px);
  opacity: 0;
}
</style>