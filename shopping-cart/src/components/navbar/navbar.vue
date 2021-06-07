<template>
  <b-navbar toggleable="lg"  class="container-fluid" variant="default">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <NavBarItem />    
  </b-navbar>
</template>

<script>
import  NavbarItem  from "./navitem";
export default {
  name: "Navbar",
  components: {
    NavBarItem: NavbarItem,
  },
};
</script>
