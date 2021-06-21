<template>
  <div class="mb-3 mt-3">
    <div class="card-category p-3">
      <h3>Produk Kategori</h3>
      <hr />
      <div class="row">
        <div
          class="col-md-3 col-6 mt-3"
          v-for="img_item in img"
          :key="img_item.id"
        >
          <div class="card mb-3 h-100" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  :src="img_item.url"
                  class="img-fluid w-100 rounded-2"
                  alt=""
                  type="button"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title ms-2">
                    <span class="fw-bold">{{ img_item.title_first }}</span
                    ><br /><span class="text-muted">{{
                      img_item.title_second
                    }}</span>
                  </h5>
                  <p class="text-muted">1,404 produk</p>
                  <!-- <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p> -->
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
  name: "CategoryProduct",
  data() {
    return {
      img: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Pria",

          title_second1: "Pria",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1600609842388-3e2ed2a1454a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Pria",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Pria",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Pria",
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Pria",
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Hijab",
          title_second: "Wanita",
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Baby",
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          title_first: "Kaos",
          title_second: "Wanita",
        },
      ],
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