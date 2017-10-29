export const ADD_PROJECT = 'ADD_PROJECT';

export function addProject(newProjectName) {
  return {
    type: ADD_PROJECT,
    name: newProjectName
  }
}
