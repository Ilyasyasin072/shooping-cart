<template>
  <!-- <b-navbar-nav v-if="userLogin">
      <b-nav-item @click="cart">Cart (0)</b-nav-item>
      <b-nav-item @click="logout">Logout</b-nav-item>
      <b-nav-item @click="profile">Profile </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav v-else>
      <b-nav-item>
        <router-link to="/login">Login</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/register">Register</router-link>
      </b-nav-item>
    </b-navbar-nav> -->

  <div class="nav navbar navbar-expand-lg navbar-dark bg-dark">
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >user</a
            >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" @click="cart">
                  Keranjang
                  <span class="badge bg-primary text-light">0</span>
                </a>
              </li>
               <li>
                <a class="dropdown-item" @click="profile">
                  Profile
                </a>
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
      this.$router.push({ path: "/user/profile" });
    },
    cart() {
      this.$router.push({ path: "/cart/user" });
    },
  },
};
</script>
