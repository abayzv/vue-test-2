<template>
    <div class="login">
      <div class="container mx-auto p-10">
        <div class="flex justify-center">
          <div
            class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="mb-5 text-center">
              <h5
              class="mb-2 text font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Login
            </h5>
            <p>Silahkan login untuk melanjutkan ke halaman berikutnya</p>
            <div v-if="message.error" class="p-4 mb-4 mt-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span class="font-medium">Error!</span> {{message.error}}
            </div>
            </div>
            <form @submit.prevent="_login">
                <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Email</label
              >
              <input
                v-model="form.email"
                autocomplete="email"
                type="text"
                id="email"
                class="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan email"
                required
              />
            </div>
  
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Password</label
              >
              <div class="text-sm text-red-500 mb-2" v-if="message">{{message.password}}</div>
              <input
              v-model="form.password"
                type="password"
                autocomplete="current-password"
                id="password"
                class="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan password"
                required
              />
            </div>
            <button type="submit"
              href="#"
              class="mt-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import {mapGetters ,mapActions} from 'vuex'
    export default {
        data : () => ({
            form: {
                email: '',
                password: ''
            },
            message: "" ,
        }),
        computed: {
            ...mapGetters(['isAuth'])
        },
        methods: {
            ...mapActions('auth', ['login']),
            async _login() {
                try {
                    await this.login(this.form)
                    this.$router.replace({name: 'home'})
                } catch (e) {
                    this.message = e.response.data.messages
                }
            }
        },
        created(){
            if(this.isAuth) {
                this.$router.replace({name: 'home'})
            }
        }
    }
</script>