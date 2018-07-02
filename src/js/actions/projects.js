export const ADD_PROJECT = "ADD_PROJECT"
export const DELETE_PROJECT = "DELETE_PROJECT"
export const UPDATE_PROJECT = "UPDATE_PROJECT"

let idCounter = 0

export const addProject = name => ({ type: ADD_PROJECT, id: ++idCounter, name })
export const deleteProject = id => ({ type: DELETE_PROJECT, id })
export const updateProject = (id, name) => ({ type: UPDATE_PROJECT, name, id })
