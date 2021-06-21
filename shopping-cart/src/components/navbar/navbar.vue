<template>
  <nav class="bg-body text-center pt-4 fixed-top">
    <div class="container">
      <div class="navbar-brand fw-bold">
        IL<span class="text-muted">CLOTH</span>
      </div>
    </div>
    <NavBarItem />
  </nav>
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
        this.$router.push("/");
        console.log(error, "error from decoding token");
      }
    },

    loginForm: function () {},
  },
  created() {
    this.getUserDetails();
  },
};
</script>
