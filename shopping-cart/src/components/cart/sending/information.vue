<template>
  <div class="col-lg-6">
    <ul>
      <li>
        <span class="text-bold text-muted"
          ><h5>{{ information.name }}</h5></span
        >
        <span class="text-muted"
          ><h5>{{ information.email }}</h5></span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "InformationDetail",
  data() {
    return {
      information: {
        name: "ILYAS YASIN",
        email: "ilyas@mewahniagajaya.com",
      },
    };
  },
};
</script>
