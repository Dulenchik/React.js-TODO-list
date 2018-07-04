import { normalize } from "normalizr"

import { projectSchema } from "./../utils/schemas"

export const PROJECTS_FETCHED = "PROJECTS_FETCHED"
export const ADD_PROJECT = "ADD_PROJECT"
export const DELETE_PROJECT = "DELETE_PROJECT"
export const UPDATE_PROJECT = "UPDATE_PROJECT"

const projectsFetched = data => ({ type: PROJECTS_FETCHED, data })
const projectAdded = data => ({ type: ADD_PROJECT, data })
const projectUpdated = data => ({ type: UPDATE_PROJECT, data })
const projectDeleted = id => ({ type: DELETE_PROJECT, id })

export const fetchProjects = () => (dispatch, getState, api) => {
  return api.projects.fetchAll().then(projects => {
    const normalizedProjects = normalize(projects, [projectSchema])
    dispatch(
      projectsFetched(
        Object.values(normalizedProjects.entities.projects || {}) || []
      )
    )
  })
}

export const addProject = name => (dispatch, getState, api) => {
  return api.projects.create(name).then(project => {
    const normalizedProject = normalize(project, projectSchema)
    dispatch(projectAdded(Object.values(normalizedProject.entities.projects)))
  })
}

export const updateProject = (id, name) => (dispatch, getState, api) => {
  return api.projects.update(id, name).then(project => {
    const normalizedProject = normalize(project, projectSchema)
    dispatch(
      projectUpdated(Object.values(normalizedProject.entities.projects)[0])
    )
  })
}

export const deleteProject = id => (dispatch, getState, api) => {
  return api.projects
    .delete(id)
    .then(project => dispatch(projectDeleted(project.id)))
}
