export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const TOGGLE_TASK_COMPLETION = "TOGGLE_TASK_COMPLETION"
export const INCREASE_TASK_PRIORITY = "INCREASE_TASK_PRIORITY"
export const DECREASE_TASK_PRIORITY = "DECREASE_TASK_PRIORITY"

export function addTask(newTaskName, projectId) {
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

export function updateTask(id, newTaskName) {
  return {
    type: UPDATE_TASK,
    name: newTaskName,
    id: id
  }
}

export function toggleTaskCompletion(id) {
  return {
    type: TOGGLE_TASK_COMPLETION,
    id: id
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
