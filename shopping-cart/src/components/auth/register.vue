<template>
  <div class="container">
    <div class="row mt-5 mb-5 pt-5 pb-5 m-auto">
      <div class="col-6 col-xs-12 img-fluid" style="background-image: url('https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')">
      </div>
      <div class="col-6 col-xs-12">
        <div class="card">
          <div class="card-body">
            <h3 class="text-center mt-3 mb-3 fw-bold text-muted">Login</h3>
            <form-register-view></form-register-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormRegister from "./form/form_register.vue";
export default {
  name: "Register",
  components: {
    FormRegisterView: FormRegister,
  },
};
</script>
