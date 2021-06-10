<template>
  <b-container class="mt-5">
    <UserDetail />
  </b-container>
</template>

<script>
import UserDetail from "./detail/user_detail.vue";
export default {
  name: "UserIndex",
  components: {
    UserDetail,
  },
};
</script>
