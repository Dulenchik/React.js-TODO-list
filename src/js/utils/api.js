import axios from "axios"

const apiUrl = "http://localhost:3001"

export default {
  auth: {
    signUp: (username, password, passwordConfirmation) => {
      let params = {
        username,
        password,
        password_confirmation: passwordConfirmation
      }
      return axios.post(`${apiUrl}/auth/sign_up`, { users: params })
    },

    login: (username, password) => {
      let params = { username, password }
      return axios.post(`${apiUrl}/auth/login`, { auth: params })
    }
  }
}
