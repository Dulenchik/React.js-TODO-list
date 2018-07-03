import axios from "axios"

const apiUrl = "http://localhost:3001"

export default {
  setup: logout => {
    const token = localStorage.todoListJWT
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
      axios.interceptors.response.use(
        response => response,
        error => {
          if (error.response.status === 401) {
            logout()
          }
          return Promise.reject(error)
        }
      )
    } else {
      delete axios.defaults.headers.common["Authorization"]
    }
  },

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
    fetchAll: () => axios.get(`${apiUrl}/tasks`).then(res => res.data),
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
  },

  comments: {
    fetchAll: () => axios.get(`${apiUrl}/comments`).then(res => res.data),
    create: (taskId, text, file) => {
      const formData = new FormData()
      formData.append("comments[text]", text)
      formData.append("comments[file]", file)

      return axios
        .post(`${apiUrl}/tasks/${taskId}/comments`, formData)
        .then(res => res.data)
    },
    delete: id => axios.delete(`${apiUrl}/comments/${id}`).then(res => res.data)
  }
}
