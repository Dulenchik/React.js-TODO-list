import { normalize } from "normalizr"
import moment from "moment"
import { find, filter, every, orderBy } from "lodash"
import { addFlashMessage } from "./flashMessages"

import { taskSchema } from "./../utils/schemas"

export const TASKS_FETCHED = "TASKS_FETCHED"
export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"

const tasksFetched = data => ({ type: TASKS_FETCHED, data })
const taskAdded = data => ({ type: ADD_TASK, data })
const taskUpdated = data => ({ type: UPDATE_TASK, data })
const taskDeleted = id => ({ type: DELETE_TASK, id })

export const fetchTasks = () => (dispatch, getState, api) => {
  return api.tasks.fetchAll().then(tasks => {
    const normalizedTasks = normalize(tasks, [taskSchema])
    dispatch(tasksFetched(Object.values(normalizedTasks.entities.tasks)))
  })
}

export const addTask = (projectId, name) => (dispatch, getState, api) => {
  return api.tasks.create(projectId, name).then(task => {
    const normalizedTask = normalize(task, taskSchema)
    dispatch(taskAdded(Object.values(normalizedTask.entities.tasks)))
  })
}

export const updateTask = (id, payload) => (dispatch, getState, api) => {
  let params = {}
  if (payload.name) params.name = payload.name
  if (payload.dueDate || payload.dueTime) {
    params.deadline = moment(
      `${payload.dueDate} ${payload.dueTime}`,
      "DD/MM/YYYY HH:mm"
    )
      .utc()
      .format()
  }
  if (payload.isDone !== null) params.done = payload.isDone

  return api.tasks.update(id, params).then(task => {
    const normalizedTask = normalize(task, taskSchema)
    dispatch(taskUpdated(Object.values(normalizedTask.entities.tasks)[0]))
    return task
  })
}

export const deleteTask = id => (dispatch, getState, api) => {
  return api.tasks.delete(id).then(task => dispatch(taskDeleted(task.id)))
}

export const toggleTaskCompletion = id => (dispatch, getState) => {
  const isDone = find(getState().tasks, { id }).isDone
  dispatch(updateTask(id, { isDone: !isDone })).then(updatedTask => {
    const task = find(getState().tasks, { id: updatedTask.id })
    const tasks = filter(getState().tasks, { projectId: task.projectId })
    if (every(tasks, "isDone")) {
      const flashMessage = addFlashMessage(
        "success",
        "Well done!",
        "You've successfully done all tasks."
      )
      dispatch(flashMessage)
    }
  })
}

const reorderCreator = orderModifier => id => (dispatch, getState, api) => {
  const task = find(getState().tasks, { id })
  const projectTasks = filter(getState().tasks, { projectId: task.projectId })
  const orderedTasks = orderBy(projectTasks, "position", ["asc"])
  const targetTask = orderedTasks[orderedTasks.indexOf(task) - orderModifier]
  if (!targetTask) return

  api.tasks.swapWith(task.id, targetTask.id).then(tasks => {
    const normalizedOrigin = normalize(tasks.origin, taskSchema)
    dispatch(taskUpdated(Object.values(normalizedOrigin.entities.tasks)[0]))
    const normalizedTarget = normalize(tasks.target, taskSchema)
    dispatch(taskUpdated(Object.values(normalizedTarget.entities.tasks)[0]))
  })
}

export const increaseTaskPriority = reorderCreator(1)
export const decreaseTaskPriority = reorderCreator(-1)
