<template>
  <b-container>
    <b-row>
      <b-col>
          <UserDetail/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserDetail from './detail/user_detail.vue'
export default {
  name: "UserIndex",
  components: {
      UserDetail
  }
};
</script>
