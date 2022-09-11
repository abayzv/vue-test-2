<template>
  <div class="bg-slate-100 min-h-screen">
    <Navbar />
    <div class="container mx-auto p-10">
      <router-view />
    </div>
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
