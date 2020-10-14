<template>
  <div id="listinfo">
    <div class="jigou_menu">
      <slot name="formtable"></slot>
    </div>
    <div class="jigou_list">
     <slot name="upbutton"></slot>
      <div class="jigou_list_table">
        <vtable :tableData="table" :proplist="prop" :labellist="label">
          <template v-slot:sublistbtn="butinfo">
             <slot name="button" :but="butinfo"></slot>
          </template>
          <template v-slot:dailoglist>
              <slot name="listdailog"></slot>
          </template>
        </vtable>
      </div>
      <div class="page">
        <slot name="pageList"></slot>
      </div>
    </div>
  </div>
</template>
<script>

import Store from "vuex";
export default {
  name: "listinfo",
  props: ["table", "prop", "label"],
  components: {
    vtable: () => ({
      component: import("./Table"),
      timeout: 3000,
    }),
  },
};
</script>
<style lang="less" scope>
@import url("../../../../assets/css/index.less");
#listinfo {
  width: @width;
  height: @height;
  box-sizing: border-box;
  padding: 10px;
  .jigou_menu {
    height: auto;
    background-color: #fff;
    .borderRadius;
    overflow: hidden;
    padding: 20px 30px;
    form {
      ul {
        li {
          list-style: none;
          display: inline-block;
          div {
            width: 200px;
          }
          span {
            font-size: 1rem;
            font-weight: 700;
            margin: 0 5px;
          }
        }
      }
      .butibfo {
        margin: 15px 0;
      }
    }
  }
  .jigou_list {
    position: relative;
    margin: 10px 0;
    min-height: 400px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px 10px 50px;

    .borderRadius;
    .jigou_list_table {
      margin: 10px 0;
    }
    .page {
      position: absolute;
      left: 0;
      bottom: 10px;
    }
  }
}
</style>