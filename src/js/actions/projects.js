import { normalize } from "normalizr"
import { flatMap } from "lodash"

import { projectSchema, tasksSchema } from "./../utils/schemas"
import { tasksFetched } from "./tasks"

export const PROJECTS_FETCHED = "PROJECTS_FETCHED"
export const ADD_PROJECT = "ADD_PROJECT"
export const DELETE_PROJECT = "DELETE_PROJECT"
export const UPDATE_PROJECT = "UPDATE_PROJECT"

let idCounter = 0

const projectsFetched = data => ({ type: PROJECTS_FETCHED, data })
export const addProject = name => ({ type: ADD_PROJECT, id: ++idCounter, name })
export const deleteProject = id => ({ type: DELETE_PROJECT, id })
export const updateProject = (id, name) => ({ type: UPDATE_PROJECT, name, id })

export const fetchProjects = () => (dispatch, getState, api) => {
  api.projects.fetchAll().then(projectsWithTasks => {
    const tasks = flatMap(
      projectsWithTasks,
      project => project.associations.tasks
    )
    const normalizedProjects = normalize(projectsWithTasks, [projectSchema])
    const normalizedTasks = normalize(tasks, [tasksSchema])
    dispatch(
      projectsFetched(Object.values(normalizedProjects.entities.projects))
    )
    dispatch(tasksFetched(Object.values(normalizedTasks.entities.tasks)))
  })
}
