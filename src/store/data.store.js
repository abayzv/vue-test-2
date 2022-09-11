import axios from "axios"

const state = () => ({
    data : {}
  })
  
  const mutations = {
    _data(state, payload) {
      state.data = payload
    }
  }
  
  const actions = {
    fetchData
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  
  function fetchData({ commit, state }) {
    return new Promise(async (resolve, reject) => {
      try {
        let config = {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
          }
        }
        let response = await axios.get('http://localhost:8080/jsonTest', config)
        commit('_data', response.data)
        resolve(response.data)
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  }