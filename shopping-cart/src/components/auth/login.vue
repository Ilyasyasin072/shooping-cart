<template>
  <div class="container">
    <div class="row mt-5 mb-5 pt-5 pb-5 m-auto">
      <div class="col-6 col-xs-12">
        <img src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80" class="img-fluid" alt="Login">
      </div>
      <div class="col-6 col-xs-12">
        <div class="card">
          <div class="card-body">
            <h3 class="text-center mt-3 mb-3 fw-bold text-muted">Login</h3>
            <form-login-view></form-login-view>
            <h3 class="text-center mt-3 mb-3 fw-bold text-muted">Daftar</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormLogin from "./form/form_login.vue";
export default {
  name: "Login",
  components: {
    FormLoginView: FormLogin,
  },
};
</script>
