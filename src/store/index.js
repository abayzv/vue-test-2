import { createStore } from 'vuex'
import auth from './auth.store'
import user from './user.store'
import data from './data.store'

export default createStore({
  state: {
    access_token : localStorage.getItem('access_token'),
  },
  getters: {
  },
  mutations: {
    _set_token(state, payload) {
      state.access_token = payload
    }
  },
  actions: {
  },
  getters:{
    isAuth: state => {
      if(state.access_token != "" && state.access_token != null) {
        return true
      }
      return false
    }
  },
  modules: {
    auth,
    user,
    data
  }
})
