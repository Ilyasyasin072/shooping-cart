<template>
  <div class="container mt-5 pt-5">
      <!-- Content Sending -->
    <ContentSending/>
    <div class="row">
      <div class="card-sending">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-6 p-5">
              <div class="row">
                <div class="col-lg-6">
                  <span class="text-muted"><h4>Your Information</h4></span>
                </div>
                <div class="col-lg-6 text-end">
                  <a><span class="text-muted">Edit</span></a>
                </div>
                <hr />
              </div>
            </div>
            <div class="col-lg-6 p-5">
              <div class="row">
                <div class="col-lg-6">
                  <span class="text-muted"><h4>Shipping Address</h4></span>
                </div>
                <div class="col-lg-6 text-end">
                  <a><span class="text-muted">Edit</span></a>
                </div>
                <hr />
              </div>
            </div>
            <!-- INFORMATION COMPONENT -->
            <InformationDetail />
            <AddressDetail/>
          </div>
          <!-- Payment And Billing -->
          <div class="row">
            <div class="col-lg-6 p-5">
              <div class="row">
                <div class="col-lg-6">
                  <span class="text-muted"><h4>Your Information</h4></span>
                </div>
                <div class="col-lg-6 text-end">
                  <a><span class="text-muted">Edit</span></a>
                </div>
                <hr />
              </div>
            </div>
            <div class="col-lg-6 p-5">
              <div class="row">
                <div class="col-lg-6">
                  <span class="text-muted"><h4>Your Information</h4></span>
                </div>
                <div class="col-lg-6 text-end">
                  <a><span class="text-muted">Edit</span></a>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InformationDetail from "./information.vue";
import ContentSending from "./content_sending.vue";
import AddressDetail from './address.vue'
export default {
  name: "SendingOrder",
  components: {
    InformationDetail,
    ContentSending,
    AddressDetail
  },
};
</script>

<style>
ul {
  list-style-type: none;
}

.card-sending {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}
</style>
