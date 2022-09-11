import axios from "axios";

const state = () => {

}

const mutations = {

}

const actions = {
login,
register
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

function login({commit}, payload)
{
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post('http://localhost:8080/login', payload)
            localStorage.setItem('access_token', response.data)
            commit('_set_token', response.data, { root: true })
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
}

function register({commit}, payload)
{
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.post('http://localhost:8080/register', payload)
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
}