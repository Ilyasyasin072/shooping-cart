<template>
  <div class="row">
    <div
      class="col-lg-3 col-md-3 col-xs-12"
      v-for="categories in category.product_inventories"
      :key="categories._id"
    >
      <div class="card">
        <div class="text-center">
          <img
            :src="categories.image_product"
            class="img-fluid img-list"
            type="button"
          />
        </div>
        <div class="product-details">
          <span class="font-weight-bold d-block">
            <small class="lead p-2">{{ categories.name }}</small>
            <p  class="fw-100 p-2">
              {{ categories.image_detail[0].title }}
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: ["category"],
};
</script>
