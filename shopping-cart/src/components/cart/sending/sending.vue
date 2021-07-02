<template>
  <div>
    <h2 class="mr-auto p-3">Sending</h2>
    <div
      class="row ml-auto mr-auto mt-3"
      v-for="check in checkout_data"
      :key="check._id"
    >
      <div class="col">
        <div v-for="product_ in product" :key="product_._id">
          <div class="card" v-if="product_._id == check.productId">
            <div v-if="product_._id == check.productId">
              <!-- <div class="card-title">
                    <h5 class="p-3">Sending</h5>
                  </div> -->
              <div class="card-body" v-if="product_detail.product_inventories">
                <div class="row">
                  <div class="col-3">
                    <img
                      :src="product_.product_inventories.image_product"
                      class="ml-3 img-fluid card-img-to"
                      alt="Generic placeholder image"
                      width="150px"
                    />
                  </div>
                  <div class="col-9">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <h3>
                          Category
                          <span class="badge badge-success">{{
                            product_.product_categories.name
                          }}</span>
                        </h3>
                      </li>
                      <li class="list-group-item">
                        <h5>
                          Product
                          <span class="badge badge-success">{{
                            product_.product_inventories.name
                          }}</span>
                        </h5>
                      </li>
                      <li class="list-group-item">
                        <h5>
                          Quantity
                          <span class="badge badge-success">{{
                            check.quantity
                          }}</span>
                        </h5>
                      </li>
                      <li class="list-group-item">
                        <h5>
                          Price
                          <span class="badge badge-success">{{
                            check.price
                          }}</span>
                        </h5>
                      </li>
                    </ul>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SendingView",
  props: ["checkout_data", "product"],
  methods: {
    closeData() {
      this.$modal.show("order-data");
    },
  },
};
</script>
