<template>
  <div class="container-fluid">
      <banner-list-view></banner-list-view>
    <div class="mt-2">
      <product-list-view></product-list-view>
    </div>
  </div>
</template>

<script>

import ProductList from "../product/product";
import BannerList from "../banner/banner";

export default {
  name: "DashboardList",
  components: {
    ProductListView: ProductList,
    BannerListView: BannerList,
  },
};
</script>
