<template>
  <div class="bg-slate-100 min-h-screen">
    <Navbar />
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import store from "@/store";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),
  components: {
    Navbar,
    Footer
},
};
</script>
