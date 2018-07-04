import { DELETE_PROJECT } from "./../actions/projects"

import {
  TASKS_FETCHED,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK
} from "./../actions/tasks"

import { USER_LOGGED_OUT } from "./../actions/auth"

export default function tasks(state = [], action) {
  switch (action.type) {
    case DELETE_PROJECT:
      return state.filter(task => task.projectId !== action.id)
    case TASKS_FETCHED:
    case ADD_TASK:
      return state.concat(action.data)
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id)
    case UPDATE_TASK:
      return state.map(task => {
        if (task.id === action.data.id) {
          return Object.assign({}, task, action.data)
        } else {
          return task
        }
      })
    case USER_LOGGED_OUT:
      return []
    default:
      return state
  }
}
