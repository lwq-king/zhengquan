<template>
  <div id="message">
    <slot></slot>
    <ul class="nav">
      <li v-for="(item,index) in msg" :key="index">
        <slot name="bindData" :data="item" :index="index"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "message",
  props: {
    msg: Array,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scope>
#message {
  box-sizing: border-box;
  padding: 5px;
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
  .nav {
    list-style: none;
    margin: 5px 0;
    li {
      margin: 5px 0;
      padding-left: 20px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #1f7cf5;
      }
      p {
        font-size: 0.8rem;
        a {
          color: #1f7cf5;
          text-decoration: none;
        }
      }
      span {
        font-size: 0.7rem;
        color: #b3b3b6;
      }
    }
  }
}
</style>