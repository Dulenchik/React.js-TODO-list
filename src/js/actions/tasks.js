import { find, filter, every } from "lodash"
import { addFlashMessage } from "./flashMessages"

export const TASKS_FETCHED = "TASKS_FETCHED"
export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const INCREASE_TASK_PRIORITY = "INCREASE_TASK_PRIORITY"
export const DECREASE_TASK_PRIORITY = "DECREASE_TASK_PRIORITY"
export const TOGGLE_TASK_COMPLETION = "TOGGLE_TASK_COMPLETION"

let idCounter = 0

export const tasksFetched = data => ({ type: TASKS_FETCHED, data })

export const addTask = (projectId, name) => ({
  id: ++idCounter,
  type: ADD_TASK,
  name,
  projectId
})

export const deleteTask = id => ({ type: DELETE_TASK, id })
export const updateTask = (id, payload) => ({ type: UPDATE_TASK, payload, id })
export const increaseTaskPriority = id => ({ type: INCREASE_TASK_PRIORITY, id })
export const decreaseTaskPriority = id => ({ type: DECREASE_TASK_PRIORITY, id })

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
