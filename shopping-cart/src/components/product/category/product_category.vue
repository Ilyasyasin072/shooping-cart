<template>
  <div class="mb-3 mt-3">
    <div class="card-category p-3">
      <h3>Produk Kategori</h3>
      <hr />
      <div class="row">
        <VueSlickCarousel v-bind="setting">
          <div
            class="col-lg-3 col-md-3 col-12 mt-3"
            v-for="img_item in img"
            :key="img_item.id"
          >
            <div class="mb h-100" style="max-width: 540px">
              <div class="row g-0">
                <div class="col23">
                  <img
                    :src="img_item.url"
                    class="img-fluid w-100 rounded-2"
                    alt=""
                    type="button"
                  />
                  <p class="card-title">
                    <span class="fw-bold">{{ img_item.title_first }}</span
                    >&nbsp;<span class="text-muted">{{
                      img_item.title_second
                    }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "CategoryProduct",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      img: [
        {
          id: 1,
          url:
            "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Pria",

          title_second1: "Pria",
        },
        {
          id: 2,
          url:
            "https://images.unsplash.com/photo-1600609842388-3e2ed2a1454a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Pria",
        },
        {
          id: 3,
          url:
            "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Pria",
        },
        {
          id: 4,
          url:
            "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Pria",
        },
      ],
      setting: {
        dots: true,
        // arrows: "true",
        autoplay: true,
        focusOnSelect: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
      },
    };
  },
};
</script>

<style scoped>
.card-category {
  border: 1px solid rgb(240, 239, 239);
  border-radius: 10px;
  box-shadow: 0px 2px 0px rgb(240, 239, 239);
}
</style>
