<template>
  <div class=".container.is-widescreen">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Component
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>

      <div class=".container.is-widescreen">
        <div class="field">
          <div class="control is-small is-loading">
            <input
              class="input is-small"
              type="text"
              v-model="formLogin.email"
              placeholder="Small loading input"
            />
          </div>
        </div>
        <div class="field">
          <div class="control is-small is-loading">
            <input
              class="input is-small"
              type="text"
              v-model="formLogin.password"
              placeholder="Small loading input"
            />
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="loginData">Login</a>
      </footer>
    </div>
  </div>
</template>

<script>
import {  mapActions } from 'vuex';
import {authHeader} from '../../utils/common'
export default {
  name: "Login",
  data() {
    return {
      formLogin: {
        email: null,
        password: null,
      },
      userLogin: null
    };
  },

  mounted() {
    this.userLogin = authHeader().Authorization
  },

  methods: {
     ...mapActions([
      'login',
    ]),
    loginData: function() {
      const {email, password} = this.formLogin;
      this.login({email, password})
    },
  },
};
</script>
