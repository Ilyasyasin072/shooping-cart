<template>
  <div class="container mt-5 pt-5">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-12">
        <VueSlickCarousel v-bind="setting">
          <div>
            <img
              :title="product_detail.product_inventories.name"
              :src="product_detail.product_inventories.image_product"
              img-alt="Image"
              img-top
              tag=""
              class="mb-2 text-center w-100 img-thumbnail"
            />
          </div>
          <div>
            <img
              :title="product_detail.product_inventories.name"
              src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
              img-alt="Image"
              img-top
              tag=""
              class="mb-2 text-center w-100 img-thumbnail"
            />
          </div>
          <div>
            <img
              :title="product_detail.product_inventories.name"
              src="https://images.unsplash.com/photo-1605777537795-126b415e9b51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
              img-alt="Image"
              img-top
              tag=""
              class="mb-2 text-center w-100 img-thumbnail"
            />
          </div>
        </VueSlickCarousel>
        <!-- <img
          :title="product_detail.product_inventories.name"
          :src="product_detail.product_inventories.image_product"
          img-alt="Image"
          img-top
          tag=""
          class="mb-2 text-center w-100 img-thumbnail"
        /> -->
        <div class="row">
          <div class="col-3">
            <div
              v-for="img_detail in product_detail.product_inventories
                .image_detail"
              :key="img_detail._id"
            >
              <img
                :src="img_detail.url"
                img-alt="Image"
                img-top
                tag="T-shirt"
                class="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-5 col-12">
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
        <div class="row">
          <div class="col-3">
            <p>Terjual <span class="text-muted">151</span>.</p>
          </div>
          <div class="col-8">
            4.6 <span class="text-muted">(32 ulasan)</span>
          </div>
        </div>
        <h3 class="fw-bold">Rp. {{ formatCurrancy(product_detail.price) }}</h3>
        <p>
          <span class="badge bg-danger">1 %</span>&nbsp;<del
            ><small>Rp. {{ formatCurrancy(product_detail.price) }} </small></del
          >
        </p>
        <hr />
        <div class="row mt-3">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <span class="text-muted">Detail</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <span class="text-muted"> Info Penting</span>
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="mt-3">
                <ul class="nolist">
                  <li><span class="text-muted">Kondisi : </span>Baru</li>
                  <li><span class="text-muted">Berat : </span>14 Kg</li>
                  <li>
                    <span class="text-muted">Kategori : </span
                    ><span class="fw-bold">Baju Gaul</span>
                  </li>
                  <li>
                    <span class="text-muted">Kondisi : </span
                    ><span class="fw-bold">Baju Gaul</span>
                  </li>
                </ul>
                <ul class="text-muted">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minus laboriosam numquam odio a impedit nisi fuga ut vel
                    temporibus! Quo accusamus tempore dolores sapiente qui odio
                    ullam earum obcaecati facilis.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit optio consequatur dolorum. Culpa quia inventore minima
                    nemo, officiis nobis enim numquam omnis quidem doloribus
                    aperiam magni eveniet, necessitatibus vero! Necessitatibus.
                  </p>
                </ul>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="mt-3">
                <ul class="text-muted">
                  <li>
                    <span
                      ><p class="fw-bold">
                        Kebijakan Pengembalian Produk
                      </p></span
                    >
                    <div class="row">
                      <span
                        ><small>
                          <read-more
                            more-str="read more"
                            text="1. Mohon untuk bisa melakukan Video Unboxing
                          (Pembukaan Paket), Foto Penerimaan Produk, Foto Resi
                          dan Label Pembeli saat paket sudah berhasil diterima
                          sehingga jika ada Kerusakan, Kekurangan Produk/Hadiah,
                          atau Ketidaksesuaian Produk yang diterima bisa
                          dilakukan validasi melalui kelengkapan
                          tersebut."
                            link="#"
                            less-str="read less"
                            :max-chars="200"
                          ></read-more></small
                      ></span>
                      <div class="row mt-1">
                        <span
                          ><small
                            ><read-more
                              more-str="read more"
                              text="2. Jika tidak ada atau hanya memiliki salah satu
                            dari kelengkapan yang disebutkan, maka segala bentuk
                            komplain yang masuk tidak bisa ditindak lanjuti atau
                            dianggap tidak sah. *kecuali: memang ada kesalahan
                            dari sisi Penjual"
                              link="#"
                              less-str="read less"
                              :max-chars="200"
                            ></read-more></small
                        ></span>
                      </div>
                      <div class="row mt-1">
                        <span
                          ><small>
                            <read-more
                              more-str="read more"
                              text="3. Kerusakan packaging hanya pada bagian luar
                            (bagian dalam utuh, produk tidak ada
                            kerusakan/kekurangan, dll) disebabkan penanganan
                            paket dari Pihak Jasa Ekspedisi yang kurang baik.
                            Diharapkan agar Pembeli bisa melakukan komplain
                            langsung ke Pihak Jasa Ekspedisi."
                              link="#"
                              less-str="read less"
                              :max-chars="200"
                            ></read-more></small
                        ></span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-12">
        <div class="card">
          <div class="card-body">
            <p class="fw-bold">Atur jumlah dan catatan</p>
            <p class="text-muted">Max. pembelian 1 pcs</p>
            <p class="color:black">Tambah Catatan</p>
            <del
              ><span class="text-end text-muted"
                >Rp. {{ formatCurrancy(product_detail.price) }}</span
              ></del
            >
            <div class="row">
              <div class="col-6 col-md-6">
                <p>Sub Total</p>
              </div>
              <div class="col-6 col-md-6">
                <p class="text-end fw-bold">
                  Rp. {{ formatCurrancy(product_detail.price) }}
                </p>
              </div>
            </div>
            <button
              class="w-100 btn btn-success rounded-10"
              @click="addCartItem(product_detail._id, product_detail.price)"
            >
              Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-lg-2 col-md-2 col-6 mt-3"
        v-for="item in product"
        :key="item.id"
      >
        <ProductListItem :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductListItem from "../product_list.vue";
import { authHeader } from "../../../utils/common";
import VueSlickCarousel from "vue-slick-carousel";
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
      setting: {
        dots: true,
        arrows: "true",
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 2,
        // touchThreshold: 10,
      },
    };
  },
  components: {
    ProductListItem: ProductListItem,
    VueSlickCarousel,
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
    getIdProduct: function () {
      this.id = this.$route.query._id;
      const data = this.id;
      this.getProductDetail(data);
    },

    productGetData() {
      this.getProduct();
    },

    addCartItem: function (productId, price) {
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
    formatCurrancy: function (value) {
      let val = (value / 1).toFixed(2).replace("&#39;.&#39;, &#39;,&#39;");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style>
.card-checkout {
  border-radius: 10px;
}
.nolist {
  list-style: none;
}
</style>
