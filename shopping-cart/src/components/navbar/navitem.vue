<template>
  <div
    class="
      nav
      navbar navbar-expand-lg navbar-light
      bg-body
      text-light
      shadow-sm
    "
  >
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto" v-if="userLogin">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >user</a
            >

            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" @click="cart"> Keranjang </a>
              </li>
              <li>
                <a class="dropdown-item" @click="profile"> Profile </a>
              </li>
              <li>
                <a class="dropdown-item" @click="logout">Keluar</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto" v-else>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { removeSession, authHeader } from "../../utils/common";
import { mapGetters } from "vuex";
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
  computed: mapGetters({
    cartItems: "cartItems",
  }),
  methods: {
    logout() {
      removeSession();
      this.$router.go();
    },

    profile() {
      this.$router.push({ path: "/user/profile" });
    },
    cart() {
      this.$router.push({ path: "/cart/user" });
    },
  },
};
</script>
