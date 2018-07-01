import { find, filter, every } from "lodash"
import { addFlashMessage } from "./flashMessages"

export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const INCREASE_TASK_PRIORITY = "INCREASE_TASK_PRIORITY"
export const DECREASE_TASK_PRIORITY = "DECREASE_TASK_PRIORITY"
export const TOGGLE_TASK_COMPLETION = "TOGGLE_TASK_COMPLETION"

export function addTask(projectId, newTaskName) {
  return {
    id: Math.round(Math.random() * 100),
    type: ADD_TASK,
    name: newTaskName,
    projectId: projectId
  }
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id: id
  }
}

export function updateTask(id, payload) {
  return {
    type: UPDATE_TASK,
    payload: payload,
    id: id
  }
}

export function toggleTaskCompletion(id) {
  return (dispatch, getState) => {
    dispatch({ type: TOGGLE_TASK_COMPLETION, id: id })

    const store = getState()
    const taskById = find(store.tasks, { id: id })
    const tasks = filter(store.tasks, { projectId: taskById.projectId })
    if (every(tasks, "isDone")) {
      const flashMessage = addFlashMessage(
        "success",
        "Well done!",
        "You've successfully done all tasks."
      )
      dispatch(flashMessage)
    }
  }
}

export function increaseTaskPriority(id) {
  return {
    type: INCREASE_TASK_PRIORITY,
    id: id
  }
}

export function decreaseTaskPriority(id) {
  return {
    type: DECREASE_TASK_PRIORITY,
    id: id
  }
}
