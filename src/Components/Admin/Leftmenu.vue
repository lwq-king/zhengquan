<template>
  <div id="leftmenu">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#4667d8"
      text-color="#fff"
      active-text-color="#22ecf3"
    >
      <template v-for="(item,index) in menu">
        <template v-if="item.child">
          <el-submenu
            :class="{'leftborder':index==classactive}"
            :index="index.toString()"
            :key="index"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                @click="activeinfo"
                :index="`${index}-${id}`"
                v-for="(it,id) in item.child"
                :key="id"
              >
                <i class="el-icon-caret-right"></i>
                {{it.name}}
                <router-link class="router_a" :to="it.action">{{it.name}}</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item
            :class="{'leftborder':index==classactive}"
            @click="activeinfo"
            :index="index.toString()"
            :key="index"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
            <router-link class="router_a" :to="item.action">{{item.name}}</router-link>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "leftmenu",
  data() {
    return {
      menu: [
        {
          name: "首页",
          action: "index",
          icon: "el-icon-price-tag",
        },
        {
          name: "机构权限管理",
          icon: "el-icon-wallet",
          child: [
            {
              name: "机构菜单管理",
              action: "jigoumenu",
            },
            {
              name: "机构角色管理",
              action: "jigoujuese",
            },
          ],
        },
        {
          name: "系统操作员用户管理",
          action: "xitcao",
          icon: "el-icon-set-up",
        },
        {
          name: "产品管理",
          icon: "el-icon-guide",
          child: [
            {
              name: "产品分类管理",
              action: "chanpf",
            },
            {
              name: "产品列表",
              action: "chanpl",
            },
          ],
        },
        {
          name: "公司管理",
          action: "gongsg",
          icon: "el-icon-school",
        },
        {
          name: "客户管理",
          icon: "el-icon-place",
          child: [
            {
              name: "投资客户账号管理",
              action: "touzik",
            },
            {
              name: "客户账号列表",
              action: "kehuz",
            },
            {
              name: "客户组列表",
              action: "kehuzu",
            },
          ],
        },
        {
          name: "客户消息中心",
          icon: "el-icon-chat-dot-square",
          child: [
            {
              name: "客户消息模板配置",
              action: "kehuxiao",
            },
            {
              name: "客户消息列表",
              action: "kehuxiaobiao",
            },
          ],
        },
        {
          name: "交易管理",
          icon: "el-icon-postcard",
          child: [
            {
              name: "订单列表",
              action: "dingdan",
            },
            {
              name: "成交记录列表",
              action: "chengjiao",
            },
            {
              name: "仓位列表",
              action: "cangwei",
            },
          ],
        },
      ],
      isCollapse: false,
      classactive: null,
    };
  },
  mounted() {
    let zhedie = this.$cookies.get("zhedie");
    if (zhedie) {
      let hide = zhedie == "false" ? false : true;
      this.isCollapse = !hide;
    }
    this.$eventEmit.on("changeLeftmenu", (hide) => {
      this.isCollapse = !hide;
    });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    activeinfo(com) {
      //索引检测  1   1-0
      if (com.index.length == 1) {
        this.classactive = com.index;
      } else {
        this.classactive = com.index.substr(0, 1);
      }
    },
  },
};
</script>
<style lang="less" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.router_a {
  position: absolute;
  display: inline-block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: transparent;
}
.el-menu {
  border-style: none;
}
.el-menu-item i,
.el-submenu__title i {
  color: #fff;
  font-size: 1.2rem !important;
}
.el-submenu {
  position: relative;
}
.leftborder::after {
  content: "";
  position: absolute;
  width: 0;
  height: 56px;
  left: 0;
  top: 0;
  border-left: 3px solid #22ecf3;
}
</style>