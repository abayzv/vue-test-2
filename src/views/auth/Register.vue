<template>
    <div class="register">
      <div class="flex justify-center">
          <div
            class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="mb-5 text-center">
              <h5
              class="mb-2 text font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Register
            </h5>
            <p>Silahkan isi form dibawah ini untuk melanjutkan pendaftaran</p>
            </div>
            <form @submit.prevent="_register">
                <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Email</label
              >
              <div class="text-sm text-red-500 mb-2" v-if="message">{{message.email}}</div>
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
                autocomplete="new-password"
                id="password"
                class="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan password"
                required
              />
            </div>
            <div>
              <label
                for="conf_password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Konfirmasi Password</label
              >
              <div class="text-sm text-red-500 mb-2" v-if="message">{{message.confpassword}}</div>
              <input
              v-model="form.confpassword"
                type="password"
                autocomplete="new-password"
                id="conf_password"
                class="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Konfirmasi password"
                required
              />
            </div>
            <button type="submit"
              href="#"
              class="mt-5 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
            </form>
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
                password: '',
                confpassword: ''
            },
            message: "" ,
        }),
        computed: {
            ...mapGetters(['isAuth'])
        },
        methods: {
            ...mapActions('auth', ['register']),
            async _register() {
                try {
                    await this.register(this.form)
                    this.$router.replace({name: 'home'})
                } catch (e) {
                    this.message = e.response.data.messages
                }
            }
        },
        created(){
            if(this.isAuth) {
                this.$router.replace({name: 'signin'})
            }
        }
    }
</script>