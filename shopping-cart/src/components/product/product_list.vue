<template>
  <!-- <div class="card">
    <div class="card-content">
      <div class="content">
        <h4>{{ product.title }}</h4>
        <a class="button is-rounded is-pulled-left" @click="addCart(product)">
          <strong>Add to Cart</strong>
        </a>
        <br />
        <p class="mt-4">
          {{ product.product_categories.name }}
        </p>
        <p class="mt-4">
          {{ product.product_inventories.name }}
        </p>
        <p class="mt-4">
          {{ product.product_inventories.quantity }}
        </p>
        <a class="button is-primary is-light">
          <strong>$ {{ product.discounts.desc }}</strong> </a
        ><a class="button is-primary is-light">
          <strong>$ {{ product.discounts.discount_percent }}</strong>
        </a>
      </div>
      <div class="media">
        <div class="media-content">
          <p class="title is-6">{{ product.owner }}</p>
          <p class="subtitle is-7">{{ product.email }}</p>
        </div>
        <div class="media-right">
          <a class="button is-primary is-light">
            <strong>$ {{ product.price }}</strong>
          </a>
        </div>
      </div>
    </div>
  </div> -->
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4 by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ product.product_categories.name }}</p>
            <p class="subtitle is-6">{{ product.product_categories.name }}</p>
          </div>
        </div>

        <div class="content">
          {{ product.product_categories.name }}&nbsp;<a>@bulmaio</a>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>

          <div class="field mb-3 mt-3">
            <div class="control is-small is-loading">
              <button
                class="button is-rounded is-pulled-right 2"
                @click="addCart(product)"
              >
                <strong>Add to Cart</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ProductListItem",
  props: ["product"],
  methods: {
    ...mapActions(["addCart"]),
  },
};
</script>
