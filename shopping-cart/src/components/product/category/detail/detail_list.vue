<template>
  <div class="row">
    <div
    v-for="item in category.products"
      :key="item._id"

      class="col-lg-3 col-md-3 col-xs-12"
      >
      <div
      v-for="categories in category.product_inventories"
      :key="categories._id"
    >
      <div class="card" v-if="item.inventory_id === categories._id">
        <div class="text-center">
          <img
            :src="categories.image_product"
            class="img-fluid img-list"
            type="button"
            @click="productDetail(item._id)"
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
    </div></div>
    
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: ["category"],
  methods: {
     productDetail: function(id) {
      this.$router.push({
        path: "/product/detail",
        query: { _id: id },
      });
      window.scrollTo(0, 0);
    },
  }
};
</script>
