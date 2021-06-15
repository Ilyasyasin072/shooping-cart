<template>
  <div id="app">
    <navbar-view></navbar-view>
    <router-view :key="$route.params.slug"></router-view>
    <!-- <footer>
      <div style="background-color: black;" class="fixed-bottom">
        <h3 class="text-light m-1 text-center">footer</h3>
      </div>
    </footer> -->
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
