<template>
  <div>
    <b-form-group
      id="fieldset-1"
      description="example@mail.com"
      label="Email"
      label-for="input-1"
    >
      <b-form-input id="input-1" v-model="formLogin.email" trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-1"
      description="********"
      label="Password"
    >
      <b-form-input
        id="input-1"
        type="password"
        v-model="formLogin.password"
        trim
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="dark" @click="loginData" class="w-100 mt-3"
      >Submit</b-button
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { authHeader } from "../../../utils/common";
export default {
  name: "FormLogin",
  data() {
    return {
      formLogin: {
        email: null,
        password: null,
      },
      userLogin: null,
    };
  },
  mounted() {
    this.userLogin = authHeader().Authorization;
  },

  methods: {
    ...mapActions(["login"]),
    loginData: function() {
      const { email, password } = this.formLogin;
      this.login({ email, password });
      // this.$router.push('/')
     setTimeout(() => {
        this.$router.go();
     }, 500)
      // console.log(email, password);
    },
  },
};
</script>
