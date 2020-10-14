<template>
  <div id="symessage">
    <div class="syscontent">
      <div class="s_title">
        <i :class="icon"></i>
        <span>{{name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "symessage",
  data(){
      return{
          icon:"",
          name:"",
          id:"",
          api:[
              "/api/message",
              "/api/sysmessage",
              "/api/syshelp"
          ]

      }
  },
  mounted(){
    let query=this.$route.query;
    this.icon=query.icon;
    this.name=query.name;
    this.id=query.id;
    let index=query.index;
    this.$axios.post(this.api[index],{
        id:this.id
    }).then((res)=>{
        console.log(res);
    });
  }
};
</script>
<style lang="less" scope>
@import url("../../../assets/css/index.less");
#symessage {
  width: @width;
  height: @height;
  padding: 10px;
  box-sizing: border-box;
  .syscontent {
    background: #fff;
    width: @width;
    height: @height;
    box-sizing: border-box;
    padding: 10px;
    .borderRadius;
    .s_title {
      font-size: 0.9rem;
      i {
        vertical-align: middle;
        color: rgb(22, 205, 238);
      }
      span {
        vertical-align: middle;
        color: rgb(155, 150, 150);
      }
    }
  }
}
</style>