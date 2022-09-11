<template>
     <div class="bg-white pb-52">
        <div class="container mx-auto p-5 py-10 w-full flex">
          <div class="w-1/4">
            <h2 class="text-lime-500 font-medium text-lg mb-5">{{data?.product?.title}}</h2>
            <ul class="border-l border-gray-400 py-2">
              <a href=""><li class="p-2 hover:underline font-medium text-lime-500 px-6 border-l border-lime-500">Infrastructure as a Service</li></a>
              <a href=""><li class="p-2 hover:underline font-medium text-gray-500 px-6">Software as a Service</li></a>
              <a href=""><li class="p-2 hover:underline font-medium text-gray-500 px-6">Platform as a Service</li></a>
              <a href=""><li class="p-2 hover:underline font-medium text-gray-500 px-6">Hybrid Multicloud</li></a>
              <a href=""><li class="p-2 hover:underline font-medium text-gray-500 px-6">Services</li></a>
              <a href=""><li class="p-2 hover:underline font-medium text-gray-500 px-6">Private Cloud</li></a>
            </ul>
          </div>
          <div class="w-3/4">

            <form>
              <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search Products</label>
              <div class="relative">
                <input type="search" id="default-search"
                  class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Products" required="">
                <button type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg></button>
              </div>
            </form>
            <hr class="my-6">
           <a href=""> <h2 class="text-lime-500 font-medium text-md underline">Explore infrastructure as a service Production
              (Iaas)</h2></a>
            <p class=" text-gray-500 text-sm">Helping to accelerate the business through strong and resilient
              infrastructure for unlimited customer
              experience.</p>
            <div class="flex mt-5">
              <div class="w-1/2">
               <div class="w-2/3">
                <h2 class="text-lime-500 font-medium text-lg">Flou Cloud</h2>
                <hr class="w-1/2 my-2">
                <!-- product component -->
                <Product title="FLOU Compute" desc="Elastic Compute Service, Compute High
                Performance, Auto Scalling, Container" />
                <Product title="FLOU Network" desc="Elastic IP, Server Load Balancer" />
                <Product title="FLOU Security" desc="Anti DDoS, Web Application Firewall WAF,
Server Guard" />
                <Product title="FLOU Storage" desc="Object Storage Service, Block Storage" />
               </div>
              </div>
              <div class="w-1/2">
               <div class="w-2/3">
                <h2 class="text-lime-500 font-medium text-lg">Telkom Cloud</h2>
                <hr class="w-1/2 my-2">
                <!-- product component -->
                <Product title="Telkom Cloud Compute" desc="Virtual server service with CPU and RAM
resources" />
                <Product title="Telkom Cloud Network" desc="Public or Private Cloud infrastructure
support services that enable
communication" />
               </div>
               <div class="w-2/3">
                <h2 class="text-lime-500 font-medium text-lg">BackUp Service</h2>
                <hr class="w-1/2 my-2">
                <!-- product component -->
                <Product title="Cloud BackUp Service Veem" desc="Object Storage Service (OSS) is an
encrypted object storage service" />
                <Product title="Cloud BackUp HBR" desc="Object Storage Service (OSS) is an
encrypted object storage service" />
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    import Product from "@/components/Product.vue";
    export default {
      computed: {
        ...mapState("data", ["data"]),
      },
      methods: {
        ...mapActions("data", ["fetchData"]),
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
        this._fetchData();
      },
      components: { Product }
    };
</script>