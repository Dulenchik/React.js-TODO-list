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
  },

  tasks: {
    create: (projectId, name) =>
      axios
        .post(`${apiUrl}/projects/${projectId}/tasks`, { tasks: { name } })
        .then(res => res.data),
    update: (id, payload) =>
      axios
        .put(`${apiUrl}/tasks/${id}`, { tasks: payload })
        .then(res => res.data),
    delete: id => axios.delete(`${apiUrl}/tasks/${id}`).then(res => res.data),
    swapWith: (currentId, targetId) =>
      axios
        .put(`${apiUrl}/tasks/${currentId}/swap_with/${targetId}`)
        .then(res => res.data)
  }
}
