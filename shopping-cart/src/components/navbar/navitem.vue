<template>
<b-nav>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
    <b-nav-item @click="logout" v-if="userLogin">Logout</b-nav-item>
  </b-nav>
</template>

<script>
import  {removeSession, authHeader }  from '../../utils/common'
export default {
  name: "NavbarItem",
  data() {
    return {
      userLogin: null
    }
  },
  mounted() {
    this.userLogin = authHeader().Authorization
  },
  methods: {
    logout() {
      removeSession();
      this.$router.go()
    }
  }
};
</script>
