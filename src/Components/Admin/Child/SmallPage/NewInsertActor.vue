<template>
  <div id="newinsertactorinfo">
    <el-form :model="form" :inline="true" :rules="rules">
      <el-form-item label="机构类型" :label-width="formLabelWidth" prop="type">
        <el-input v-model="form.type" :disabled="true" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所属机构" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" :disabled="true" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色名称" :label-width="formLabelWidth" prop="actorname">
        <el-input v-model="form.actorname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="备注" :label-width="formLabelWidth" prop="beizhu">
        <el-input type="textarea" v-model="form.beizhu" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "newinsertactorinfo",
  props:["form"],
  data() {
    return {
      formLabelWidth:"120px",
      rules: {
        actorname: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
        beizhu: [{ required: true, message: "请输入备注", trigger: "blur" }],
      },
    };
  },
};
</script>
<style>
#newinsertactorinfo{
    width: 350px;
    margin: 0 auto;
}
</style>