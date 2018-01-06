export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

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