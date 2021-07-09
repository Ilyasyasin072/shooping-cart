<template>
  <nav class="bg-body text-center pt-3 fixed-top">
    <div class="container">
      <div class="navbar-brand fw-bold">
        IL<span class="text-muted">CLOTH</span>
      </div>
    </div>
    <NavBarItem />
    <div class="container mt-2">
      <div class="navbar-brand fw-bold">
        <div class="form-group">
          <b-row class="">
            <b-col>
              <div class="example">
                <input
                  class="form-control form-control-sm"
                  v-model="query"
                  type="text"
                  placeholder="Search .."
                  @click="showCategory"
                />
              </div>
            </b-col>
            <div class="results" v-if="listOpen">
              <ul>
                <li
                  v-for="item_data in product_search"
                  :key="item_data.id"
                  @click="onClick(item_data)"
                >
                  <img :src="item_data.image_product" />
                  <span class="fw-100">{{ item_data.name }}</span>
                </li>  
              </ul>
            </div>
            <div class="results" v-if="listComponent">
              <ul v-for="prod in categories" :key="prod._id">
                <li @click="showCategoriesClick(prod)">
                <img
                  src="https://images.unsplash.com/photo-1543855549-4ab79f1860b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  class="img-fluid"
                />&nbsp;
                  <p class="text-muted">{{ prod.name }}</p>
                  
                </li>
              </ul>
              <a @click="closeList"
                ><span aria-hidden="true" style="float:right; cursor: pointer;">&times;</span></a
              >
            </div>
          </b-row>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarItem from "./navitem";
import VueJwtDecode from "vue-jwt-decode";
// import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  components: {
    NavBarItem: NavbarItem,
  },
  data() {
    return {
      user: {},
      query: "",
      product_data: [],
      listOpen: true,
      isShow: false,
      listComponent: false,
    };
  },
  watch: {
    query: function() {
      this.search_();
    },
  },
  computed: {
    ...mapGetters({
      product_search: "productSearch",
      categories: "categoryGet",
    }),
  },
  methods: {
    ...mapActions(["getProductSearch", "getCategoryories", "showCategories"]),
    getUserDetails() {
      // get token from localstorage
      let token = localStorage.getItem("token");
      try {
        //decode token here and attach to the user object
        let decoded = VueJwtDecode.decode(token);
        this.user = decoded;
      } catch (error) {
        // return error in production env
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.$router.push("/");
        console.log(error, "error from decoding token");
      }
    },
    search_: function() {
      if (this.query.length > 1) {
        console.log(this.product_search);
        this.getProductSearch(this.query);
        // this.product_search;
        this.listOpen = true;
        this.isShow = true;
        this.listComponent = false;
      } else {
        this.product_data = [];
        this.listOpen = false;
        this.listComponent = true;
      }
    },
    onClick(product_) {
      this.product_data = product_._id;
      this.listOpen = false;
      this.$router.push({
        path: "/product/detail",
        query: { _id: product_.products._id },
      });
      this.query = "";
    },
    close() {
      this.product_data = [];
      this.query = "";
      this.listOpen = false;
      this.isShow = false;
    },
    showCategory() {
      this.listComponent = true;
    },
    closeList() {
      this.listComponent = false;
    },

    showCategoriesClick(categories) {
      // this.showCategories(categories._id)
      this.$router.push({
        path: "/category/"+categories._id,
      })
       this.listComponent = false;
    },

    loginForm: function() {},
  },
  created() {
    this.getUserDetails();
    this.getCategoryories();
  },
};
</script>

<style>
/* Style the search field */
.example input[type="text"] {
  /* padding: 5px; */
  /* font-size: 17px; */
  /* border: 1px solid; */
  float: left;
  width: 100%;
  /* background: #f1f1f1; */
}

/* Style the submit button */
.example button {
  float: left;
  width: 20%;
  /* padding: 1px; */
  background: #6c757d;
  color: white;
  /* font-size: 17px; */
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

.example button:hover {
  background: grey;
}

/* Clear floats */
.example::after {
  content: "";
  clear: both;
  display: table;
}

.searchbox {
  padding: 20px 0 0 0;
  text-align: center;
}
.searchbox input {
  width: 60%;
  height: 30px;
  font-size: 16px;
  padding: 0 10px;
  border: 1px solid silver;
}

.results {
  display: flex;
  justify-content: center;
}
.results ul {
  width: 100%;
  padding: 10px;
}
.results li {
  padding: 5px;
  border-bottom: 1px dotted black;
  display: flex;
  align-items: center;
}
.results li:hover {
  background-color: rgba(221, 221, 221, 0.5);
  cursor: pointer;
}
.results img {
  width: 50px;
  /* border-radius: 50%; */
}
.results li span {
  display: inline-block;
  margin-left: 20px;
}

#content-product {
  overflow: scroll;
  height: 500px;
  overflow-x: hidden;
}
</style>
