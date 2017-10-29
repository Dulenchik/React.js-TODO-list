export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';

export function addProject(newProjectName) {
  return {
    type: ADD_PROJECT,
    name: newProjectName
  }
}

export function deleteProject(id) {
  return {
    type: DELETE_PROJECT,
    id: id
  }
}

export function updateProject(id, newProjectName) {
  return {
    type: UPDATE_PROJECT,
    name: newProjectName,
    id: id
  }
}
