<template>
  <div id="app">
    <navbar-view></navbar-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/navbar/navbar.vue'
export default {
  name: 'App',
  components: {
    NavbarView : Navbar,
  }
}
</script>

<style>
</style>
