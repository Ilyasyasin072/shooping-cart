<template>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h4>{{ product.title }}</h4>
          <a
            class="button is-rounded is-pulled-left"
            @click="addCart(product)"
          >
            <strong>Add to Cart</strong>
          </a>
          <br />
          <p class="mt-4">
            {{ product.description }}
          </p>
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
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: "ProductListItem",
  props: ["product"],
  methods: {
    ...mapActions(['addCart'])
  }
};
</script>