import axios from "axios"

const state = () => ({
    user : {}
  })
  
  const mutations = {
    _user(state, payload) {
      state.user = payload
    }
  }
  
  const actions = {
    fetchUser
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  
  function fetchUser({ commit, state }) {
    return new Promise(async (resolve, reject) => {
      try {
        let config = {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
          }
        }
        let response = await axios.get('http://localhost:8080/me', config)
        commit('_user', response.data)
        resolve(response.data)
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  }