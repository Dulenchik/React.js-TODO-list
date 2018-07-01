import { combineReducers } from "redux"
import projects from "./projects"
import tasks from "./tasks"
import comments from "./comments"
import flashMessages from "./flashMessages"
import auth from "./auth"

const reducer = combineReducers({
  projects,
  tasks,
  comments,
  flashMessages,
  auth
})

export default reducer
