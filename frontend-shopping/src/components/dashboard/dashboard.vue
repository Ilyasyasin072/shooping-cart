<template>
  <div class="container is-widescreen">
    <div style="margin-top: 20px;">
      <banner-list-view></banner-list-view>
    </div>
    <div style="margin-top: 20px;">
      <input class="input is-rounded" type="text" placeholder="Rounded input">
    </div>
    <div style="margin-top: 20px;">
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
