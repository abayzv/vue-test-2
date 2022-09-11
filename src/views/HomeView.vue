<template>
  <div class="home">
    <Hero/>
    <Data/>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Product from "@/components/Product.vue";
import Data from "@/components/Data.vue";
import Hero from "@/components/Hero.vue";
export default {
  computed: {
    ...mapState("user", ["user"]),
    ...mapState("data", ["data"]),
  },
  methods: {
    ...mapActions("user", ["fetchUser"]),
    ...mapActions("data", ["fetchData"]),
    async _fetchUser() {
      try {
        await this.fetchUser();
      }
      catch (error) {
        console.log(error);
      }
    },
    async _fetchData() {
      try {
        await this.fetchData();
      }
      catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this._fetchUser();
    this._fetchData();
  },
  components: { Product, Data, Hero }
};
</script>
