<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    
  },
  computed: {
    ...mapActions(["getBack"]),
  },
};
</script>

<style>
</style>
