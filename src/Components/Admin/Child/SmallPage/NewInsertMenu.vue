<template>
  <div id="newinsert">
    <el-form :model="form" :inline="true" :rules="rules">
      <el-form-item label="菜单编号" :label-width="formLabelWidth" prop="id">
        <el-input v-model="form.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="机构类型" :label-width="formLabelWidth" prop="menutype">
        <el-select v-model="form.menutype" placeholder="请选择活动区域">
          <el-option
            v-for="(item,index) in options2"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="菜单名称" :label-width="formLabelWidth" prop="menuname">
        <el-input v-model="form.menuname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="菜单等级" :label-width="formLabelWidth" prop="menulevel">
        <el-select v-model="form.menulevel" placeholder="请选择活动区域">
          <el-option
            v-for="(item,index) in options1"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="菜单Url" :label-width="formLabelWidth" prop="menuurl">
        <el-input v-model="form.menuurl" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="父级菜单" :label-width="formLabelWidth" prop="parname">
        <el-select v-model="form.parname" placeholder="请选择活动区域">
          <el-option
            v-for="(item,index) in parmenu"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "newinsert",
  props:["form"],
  mounted(){
    console.log(this.form);
  },
  data() {
    return {
      rules: {
        id: [{ required: true, message: "请输入菜单编号", trigger: "blur" }],
        menutype: [{ required: true, message: "请选择机构类型", trigger: "blur" }],
        menuname: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
        menulevel: [{ required: true, message: "请选择菜单等级", trigger: "blur" }],
        menuurl: [
          { required: true, message: "请输入菜单Url", trigger: "blur" },
          {
            min: 5,
            max: 45,
            message: "长度在 5 到 15 个字符",
            trigger: "blur",
          },
        ],
        parname: [
          { required: true, message: "请选择父级菜单", trigger: "blur" },
        ],
      },
      
      formLabelWidth: "120px",
      options2: [
        {
          value: "运营中心",
          label: "运营中心",
        },
        {
          value: "顶层公司/集团",
          label: "顶层公司/集团",
        },
        {
          value: "交易商",
          label: "交易商",
        },
      ],
      options1: [
        {
          value: "一级菜单",
          label: "一级菜单",
        },
        {
          value: "二级菜单",
          label: "二级菜单",
        },
        {
          value: "三级菜单",
          label: "三级菜单",
        },
      ],
      parmenu: [
        {
          value: "机构权限管理",
          label: "机构权限管理",
        },
        {
          value: "产品管理",
          label: "产品管理",
        },
        {
          value: "公司管理",
          label: "公司管理",
        },
        {
          value: "客户管理",
          label: "客户管理",
        },
        {
          value: "客户消息中心",
          label: "客户消息中心",
        },
        {
          value: "交易管理",
          label: "交易管理",
        },
        {
          value: "系统操作员用户管理",
          label: "系统操作员用户管理",
        },
      ],
    };
  },
};
</script>
<style>
</style>