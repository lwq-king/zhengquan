<template>
  <div id="dialoginfo">
    <el-dialog
      :visible.sync="visibleinfo"
      ref="ruleForm"
      :before-close="close"
      :close-on-press-escape="closeesc"
    >
      <template v-slot:title>
        <i class="el-icon-office-building bgcolor"></i>
        <span>{{titleTxt}}</span>
      </template>
      <slot name="Formlist" :list="form"></slot>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitinfo('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Store from "@/Vuex/Store.js";
export default {
  name: "dialoginfo",
  props: [
    "dialogFormVisible",
    "titleTxt",
    "action",
    "index",
    "element",
    "form",
  ],
  data() {
    return {
      closeesc: true,
      visibleinfo: this.dialogFormVisible,
    };
  },
  methods: {
    close(formName) {
      this.visibleinfo = false;
      this.element.dialogFormVisible = false;
    },
    submitinfo(formName) {
      this.$refs[formName].$children[2].$children[0].validate((valid) => {
        if (valid) {
          switch (this.action) {
            case "PUSH_sys_DATA":
              Store.commit("pushSysData", this.form);
              this.$Message("增加成功！");
              break;
            case "UPDATE_sys_DATA":
              Store.commit("updateAllData", {
                data: this.form,
                index: this.index,
              });
              this.$Message("修改成功！");
              break;
            case "PUSH_Actor_DATA":
              Store.commit("pushActorData", this.form);
              this.$Message("增加成功！");
              break;
            case "UPDATE_ACTOR_DATA":
              Store.commit("updateActorData", {
                data: this.form,
                index: this.index,
              });
              this.$Message("修改成功！");
              break;
          }
          this.close();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less" scope>
.bgcolor {
  color: #1470e9;
  font-size: 1.2rem;
}
.el-dialog__header {
  border-bottom: 1px solid #e6e3e3;
}
</style>