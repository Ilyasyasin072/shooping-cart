<template>
  <div class="wrapper">
    <splide :options="options" :slides="slides">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" alt="slide.alt" />
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
        // perPage: 1,
        gap: "1rem",
        autoWidth: true,
        autoplay: true,
        pauseOnHover: false,
        arrows: "slider",
      },
      slides: createSlides(4),
      count: 0,
    };
  },
  methods: {},
};
</script>
