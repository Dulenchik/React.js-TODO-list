import {
  PROJECTS_FETCHED,
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT
} from "./../actions/projects"

export default function projects(state = [], action) {
  switch (action.type) {
    case ADD_PROJECT:
    case PROJECTS_FETCHED:
      return state.concat(action.data)
    case DELETE_PROJECT:
      return state.filter(project => project.id !== action.id)
    case UPDATE_PROJECT:
      return state.map(project => {
        if (project.id === action.data.id) {
          return Object.assign({}, project, action.data)
        } else {
          return project
        }
      })
    default:
      return state
  }
}
