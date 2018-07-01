import {
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT
} from "./../../js/actions/projects"

const projectsList = [
  { id: 1, name: "Setup Rails" },
  { id: 2, name: "Setup React + Redux" },
  { id: 3, name: "Enjoy!" }
]

export default function projects(state = projectsList, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return state.concat({ id: state.length + 1, name: action.name })
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
