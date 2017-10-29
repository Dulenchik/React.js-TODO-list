export const ADD_PROJECT = 'ADD_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

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
