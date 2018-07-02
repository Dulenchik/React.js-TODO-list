import {
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT
} from "./../actions/projects"

export default function projects(state = [], action) {
  switch (action.type) {
    case ADD_PROJECT:
      return state.concat({ id: action.id, name: action.name })
    case DELETE_PROJECT:
      return state.filter(project => project.id !== action.id)
    case UPDATE_PROJECT:
      return state.map(project => {
        if (project.id === action.id) {
          return Object.assign({}, project, { name: action.name })
        } else {
          return project
        }
      })
    default:
      return state
  }
}
