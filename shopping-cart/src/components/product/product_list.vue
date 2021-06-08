<template>
 <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem;"
            class="mb-2"
          >
            <b-card-text>
              {{ product.product_inventories.name }}
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
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
