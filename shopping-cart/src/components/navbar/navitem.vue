<template>
  <div>
    <b-navbar-nav v-if="userLogin">
      <b-nav-item>Cart (0)</b-nav-item>
      <b-nav-item @click="logout">Logout</b-nav-item>
      <b-nav-item @click="profile">Profile
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav v-else>
      <b-nav-item>
        <router-link to="/login">Login</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/register">Register</router-link>
      </b-nav-item>
    </b-navbar-nav>
  </div>
</template>

<script>
import { removeSession, authHeader } from "../../utils/common";
export default {
  name: "NavbarItem",
  data() {
    return {
      userLogin: null,
    };
  },
  mounted() {
    this.userLogin = authHeader().Authorization;
  },
  methods: {
    logout() {
      removeSession();
      this.$router.go();
    },
    
    profile() {
      this.$router.push({ path : '/user/profile'})
    }
  },
};
</script>
