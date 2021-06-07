<template>
  <div id="nav">
      <navbar-item></navbar-item>
    <router-view></router-view>
  </div>
</template>

<script>
import  Navbar  from "../src/components/navbar/navbar";
export default {
  components: {
    NavbarItem: Navbar,
  },
};
</script>

<style>
</style>
