<template>
  <div>
      <b-form-group
      id="fieldset-1"
      description="Let us know your name."
      label="Enter your name"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="formRegister.username"
        trim
      ></b-form-input>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      description="Let us know your name."
      label="Enter your name"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="formRegister.email"
        trim
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-1"
      description="Let us know your name."
      label="Enter your name"
    >
      <b-form-input
        id="input-1"
        v-model="formRegister.password"
        trim
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-1"
      description="Let us know your name."
      label="Enter your name"
    >
      <b-form-input
        id="input-1"
        v-model="formRegister.first_name"
        trim
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-1"
      description="Let us know your name."
      label="Enter your name"
    >
      <b-form-input
        id="input-1"
        v-model="formRegister.last_name"
        trim
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-1"
      description="Let us know your name."
      label="Enter your name"
    >
      <b-form-input
        id="input-1"
        v-model="formRegister.telephone"
        trim
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary" @click="RegisterData"
      >Register</b-button
    >
    <b-button type="submit" variant="primary"><router-link to="login">login</router-link></b-button
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FormRegister",
  data() {
    return {
      formRegister: {
        username: null,
        email: null,
        password: null,
        first_name: null,
        last_name: null,
        telephone: '022-xxx-xxx',
      },
      userLogin: null,
    };
  },
  mounted() {},

  methods: {
    ...mapActions(["register"]),
    RegisterData: function() {
      const data = this.formRegister;
      // console.log(data);
      this.register(data);
    },
  },
};
</script>
