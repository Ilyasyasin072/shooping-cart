<template>
  <div class="container mt-5 pt-5">
    <div class="row">
        <DetailList :category="categories_detail" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DetailList from "./detail_list.vue";
export default {
  name: "categoryDetail",
  components: {
    DetailList,
  },
  data() {
    return {
      msg: "detail",
    };
  },
  mounted() {
    this.show();
  },
  computed: {
    ...mapGetters({
      categories_detail: "categoryShow",
    }),
  },
  update() {
    this.show();
  },
  watch: {
    $route() {
      this.show();
    },
  },
  methods: {
    ...mapActions(["showCategories"]),
    show() {
      let id_ = this.$route.params.id;
      this.showCategories(id_);
    },
  },
};
</script>
