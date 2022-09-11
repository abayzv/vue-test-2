<template>
  <div class="home">
    <div
      class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span class="font-medium">Wellcome !</span> {{ user.email }}
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("user", ["user"]),
  },
  methods: {
    ...mapActions("user", ["fetchUser"]),
    async _fetchUser() {
      try {
        await this.fetchUser();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this._fetchUser();
  },
};
</script>
