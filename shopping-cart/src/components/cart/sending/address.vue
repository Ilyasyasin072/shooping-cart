<template>
  <div class="col-lg-6">
    <ul>
      <li>
        <span class="text-bold text-muted"
          ><h5>{{ information.name }}</h5></span
        >
        <span class="text-muted"
          ><h5>{{ information.address1 }}</h5></span
        ><span class="text-muted"
          ><h5>{{ information.address2 }}</h5></span
        ><span class="text-muted"
          ><h5>{{ information.address3 }}</h5></span
        ><span class="text-muted"
          ><h5>{{ information.city }}</h5></span
        ><span class="text-muted"
          ><h5>{{ information.phone }}</h5></span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AddressDetail",
  data() {
    return {
      information: {
        name: "Min peng",
        address1: "710 Mariners Island Blvd",
        address2: "Apt 210",
        address3: "San Mateo, Ca 94404",
        city: "United States",
        phone: "(315) 39607661"
      },
    };
  },
};
</script>
