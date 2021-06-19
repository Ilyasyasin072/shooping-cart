<template>
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-md-3 col-lg-3 col-xs-12 detail">
        <img
          :title="product_detail.product_inventories.name"
          :src="product_detail.product_inventories.image_product"
          img-alt="Image"
          img-top
          tag=""
          class="mb-2 text-center img-detail"
        />
        <div class="row mt-3">
          <div
            class="col-xs-3 col-lg-3 col-md-3"
            v-for="img_detail in product_detail.product_inventories
              .image_detail"
            :key="img_detail._id"
          >
            <img
              :src="img_detail.url"
              img-alt="Image"
              img-top
              tag="T-shirt"
              class="img-gallery"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xs-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="bread-item text-muted"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item">
              <router-link to="/" class="bread-item text-muted"
                >T-Shirt</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product_detail.product_categories.name }}
            </li>
          </ol>
        </nav>
        <h1 class="text-muted fw-bold">
          {{ product_detail.product_inventories.name }}
        </h1>
        <hr />
        <h3>{{ product_detail.price }}</h3>
        <div class="row mt-3">
          <div class="col-md-12 col-lg-12 col-xs-12">
            <p class="fw-bold pt-2">Size (XS, M, XL, XXL)</p>
            <p class="fw-bold pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              nesciunt excepturi minima voluptatum saepe commodi vitae nobis ea
              perspiciatis maiores? Nam, corrupti. Doloribus, amet? Illum
              sapiente error deleniti facere ipsum?
            </p>
          </div>
          <div class="row mt-5">
            <div class="col-md-7 col-7">
              <button
                class="btn btn-dark"
                @click="addCartItem(product_detail._id, product_detail.price)"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Description
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Additional Information
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Reviews
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <p class="mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              cumque possimus quasi sequi temporibus ullam, animi quidem
              voluptate in dolorem rem, magni architecto alias sunt distinctio
              earum perferendis velit. Ipsam labore, aliquam amet numquam
              commodi, iste, quaerat sit esse distinctio nobis repellendus
              sapiente adipisci ipsa id non! Consectetur provident fugit ab aut
              aperiam repellendus ipsam, deleniti expedita eum, cupiditate
              molestiae alias voluptatibus incidunt animi quibusdam perferendis
              esse minima eius nemo quisquam iusto est qui ratione error. Quam
              sapiente minima ducimus quis placeat mollitia saepe illo, fuga
              accusamus commodi iure, blanditiis consequuntur aliquid, aliquam
              qui aut amet harum. Possimus iure id impedit dignissimos repellat
              ratione, ea repudiandae, commodi ipsam similique voluptatibus rem
              enim, accusamus expedita nihil natus cumque. Veniam aperiam
              tenetur totam molestiae magni pariatur aliquam, obcaecati sed
              saepe ipsam dolore expedita ducimus, officia necessitatibus facere
              culpa eum exercitationem voluptates recusandae tempora rem! Quo ut
              inventore quidem nostrum deserunt illo nobis? Ex, quia debitis
              animi necessitatibus labore quidem maxime deserunt a perferendis,
              numquam explicabo laudantium rem, modi nulla iste. Voluptatem
              nostrum cum mollitia magni iste perferendis molestias fugit
              dolores ut, impedit velit illo doloremque molestiae accusantium
              rerum magnam debitis veritatis eos suscipit dignissimos vitae
              asperiores. Repudiandae libero consequuntur quae praesentium
              magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <b-row>
      <b-col lg="4" md="6" xs="12" v-for="item in product" :key="item.id">
        <ProductListItem :product="item" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductListItem from "../product_list.vue";
import { authHeader } from "../../../utils/common";
export default {
  name: "DetailView",
  data() {
    return {
      id: null,
      userLogin: null,
      cart_item: {
        qty: 1,
        quantity: 1,
      },
    };
  },
  components: {
    ProductListItem: ProductListItem,
  },
  computed: mapGetters({
    product_detail: "productDetail",
    product: "productGet",
  }),
  update() {
    this.getIdProduct();

      this.productGetData();
  },
  mounted() {
    this.getIdProduct();
      this.productGetData();
    // setInterval(() => {
    //   this.$store.dispatch("getProduct");
    // }, 2000);
  },
  watch: {
    $route() {
      this.getIdProduct();
      this.productGetData();
    },
  },
  methods: {
    ...mapActions(["getProductDetail", "addCart", "getProduct"]),
    getIdProduct: function() {
      this.id = this.$route.query._id;
      const data = this.id;
      this.getProductDetail(data);
    },

    productGetData() {
      this.getProduct()
    },

    addCartItem: function(productId, price) {
      this.userLogin = authHeader().Authorization;
      if (this.userLogin) {
        const { qty, quantity } = this.cart_item;
        this.addCart({
          productId: productId,
          qty: qty,
          quantity: quantity,
          total: price,
        });
        // this.$router.push("/cart/user");
        this.$fire({
          title: "Success " + this.product_detail.product_inventories.name,
          text: "text",
          type: "success",
          timer: 3000,
        }).then(() => {});
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style>

</style>
