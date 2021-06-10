<template>
  <b-row>
    <b-col cols="6">
      <div class="clearfix">
        <b-img
        width="200%"
          left
          src="https://picsum.photos/125/125/?image=58"
          alt="Left image"
        ></b-img>
        <hr>
        <h5 style="color: #47597e">
          {{ user.email}}
        </h5>
        <hr>
      </div>
    </b-col>
    <b-col>
      <b-row>
        <h3 style="color: #47597e">{{ user.name.first }}{{ user.name.last}} </h3>
      </b-row>
      <hr>  
      <b-tabs content-class="mt-3">
        <b-tab title="Contact" active>
          <p>
           <ul v-for="address in user.address" :key="address._id">
           
              <li class="mt-3">
                Country :<strong> {{ address.country}}</strong>
              </li>
              <li class="mt-3">
            City : <strong> {{ address.city}}</strong>
              </li>
               <li class="mt-3">
                Country :<strong> {{ address.zipCode}}</strong>
              </li>
              <li class="mt-3">
            Address  : <strong> {{ address.address_line1}}</strong>
              </li>
              <li class="mt-3">
            Address Job : <strong> {{ address.address_line2}}</strong></li>
            </ul>
                <ul v-for="phone in user.phone" :key="phone._id">
                 <li>
                   Phone :<strong> {{ phone.number }}</strong>
                 </li>
               </ul>
          </p>
          </b-tab>
        <b-tab title="About"><p>I'm the second tab</p></b-tab>
      </b-tabs>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { authHeader } from "../../../utils/common";
import moment from "moment";
export default {
  name: "UserDetail",
  computed: mapGetters({
    user: "getUserProfile",
  }),
  methods: {
    ...mapActions(["getUserProfileAction"]),
    profile: function() {
      const token = authHeader().Authorization;
      this.getUserProfileAction(token);
    },

    formatDate: (value) => {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
  },
  mounted() {
    this.profile();
  },
  watch: {
    $route() {
      this.profile();
    },
  },
};
</script>
