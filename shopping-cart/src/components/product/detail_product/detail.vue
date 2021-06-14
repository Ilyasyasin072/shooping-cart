<template>
  <b-container class="container mt-5">
    <b-row>
      <b-col>
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 60rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ product_detail.product_inventories.name }}
            {{ product_detail.product_inventories.desc }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card-group deck>
          <b-card header="Card with list group">
            <b-list-group>
              <b-list-group-item href="#">
                {{ product_detail.product_categories.name }}</b-list-group-item
              >
              <b-list-group-item href="#">
                {{
                  product_detail.product_inventories.quantity
                }}</b-list-group-item
              >
            </b-list-group>
            <p class="card-text mt-2">
              {{ product_detail.product_categories.desc }}
            </p>
          </b-card>
        </b-card-group>
      </b-col>
      <b-col>
        <b-alert show v-if="product_detail.discounts">
          <h5>
            Promo
            <b-badge variant="success"
              >{{ product_detail.discounts.discount_percent }} %</b-badge
            >
          </h5>
        </b-alert>
        <b-card>
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <b-button
            variant="success"
            @click="addCartItem(product_detail._id, product_detail.price)"
            >Add Cart</b-button
          >
        </b-card>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col lg="4" md="6" xs="12" v-for="item in product" :key="item.id">
        <ProductListItem :product="item" />
      </b-col>
    </b-row>
  </b-container>
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
  },
  mounted() {
    this.getIdProduct();

    // setInterval(() => {
    //   this.$store.dispatch("getProduct");
    // }, 2000);
  },
  watch: {
    $route() {
      this.getIdProduct();
    },
  },
  methods: {
    ...mapActions(["getProductDetail", "addCart"]),
    getIdProduct: function() {
      this.id = this.$route.query._id;
      const data = this.id;
      this.getProductDetail(data);
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
        }).then(() => {
        });
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
