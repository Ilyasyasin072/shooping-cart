<template>
  <div>
    <!-- <banner-list-view></banner-list-view> -->
    <div class="container mt-5 pt-5">
    <div class="hero"></div>
    <div class="mt-2">
      <product-list-view></product-list-view>
    </div>
  </div>
  </div>
</template>

<script>
import ProductList from "../product/product";
// import BannerList from "../banner/banner";
export default {
  name: "DashboardList",
  components: {
    ProductListView: ProductList,
    // BannerListView: BannerList,
  },
};
</script>

<style scoped>
.hero {
  background-image: url("https://images.unsplash.com/photo-1604898426702-4b4f1c5e973a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1984&q=80");
  height: 400px;
  background-size: cover;
  border-radius: 20px;
}
</style>
