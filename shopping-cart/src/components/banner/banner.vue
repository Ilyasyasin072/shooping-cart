<template>
  <div class="wrapper mt-5 pt-5">
    <splide :options="options" :slides="slides">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt" class="w-100" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

import { createSlides } from "../../utils/slide";
export default {
  name: "BannerList",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        perPage: 1,
        gap: "1rem",
        autoWidth: true,
        autoplay: true,
        pauseOnHover: false,
        arrows: "slider",
      },
      slides: createSlides(3),
      count: 0,
    };
  },
  methods: {},
};
</script>
