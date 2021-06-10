<template>
  <b-navbar toggleable="lg" class="container-fluid" variant="default">
    <b-navbar-brand href="#"
      ><router-link to="/">Navbar</router-link></b-navbar-brand
    >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <NavBarItem />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import NavbarItem from "./navitem";
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: "Navbar",
  components: {
    NavBarItem: NavbarItem,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      // get token from localstorage
      let token = localStorage.getItem("token");
      try {
        //decode token here and attach to the user object
        let decoded = VueJwtDecode.decode(token);
        this.user = decoded;
      } catch (error) {
        // return error in production env
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.$router.push('/login')
        console.log(error, "error from decoding token");
      }
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>
