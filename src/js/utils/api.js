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

    login: (username, password) =>
      axios.post(`${apiUrl}/auth/login`, { auth: { username, password } })
  },

  projects: {
    fetchAll: () => axios.get(`${apiUrl}/projects`).then(res => res.data),
    create: name =>
      axios
        .post(`${apiUrl}/projects`, { projects: { name } })
        .then(res => res.data),
    update: (id, name) =>
      axios
        .put(`${apiUrl}/projects/${id}`, { projects: { name } })
        .then(res => res.data),
    delete: id => axios.delete(`${apiUrl}/projects/${id}`).then(res => res.data)
  }
}
