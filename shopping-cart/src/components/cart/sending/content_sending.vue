<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="pt-5 row">
        <span class="fw-bold text-muted"
          ><h2>{{ msg }}</h2></span
        >
      </div>
    </div>
    <div class="col-lg-6">
      <div class="row">
        <div class="pt-5 row col-lg-6">
          <span class="text-muted"
            >Order Total
            <h4>{{ price }}</h4></span
          >
        </div>
        <div class="pt-5 p-5 row col-lg-6">
          <button class="btn btn-sm btn-success fw-100">
            <span class="text-bold">Place Holder</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentSending",
  data() {
    return {
      msg: "Order Comfirmation",
      price: "$89.1123",
    };
  },
};
</script>
