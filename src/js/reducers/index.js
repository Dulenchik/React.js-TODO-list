import { combineReducers } from 'redux';
import { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from './../../js/actions/projects';

const projectsList = [
  { id: 1, name: 'Setup Rails' },
  { id: 2, name: 'Setup React + Redux' },
  { id: 3, name: 'Enjoy!' }
]

const tasksList = [
  { id: 39, name: 'Apply Redux', position: 1, projectId: 2, isDone: false },
  { id: 37, name: 'Learn Redux', position: 0, projectId: 2, isDone: true },

  { id: 5, name: 'Take a Coffee', position: 0, projectId: 3, isDone: false },

  { id: 12, name: 'Generate App', position: 0, projectId: 1, isDone: true },
  { id: 17, name: 'Implement Business Logic', position: 1, projectId: 1, isDone: true },
  { id: 23, name: 'Write specs', position: 2, projectId: 1, isDone: false }
]

function projects(state = projectsList, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return state.concat({ id: state.length + 1, name: action.name })
    case DELETE_PROJECT:
      return state.filter(project => project.id !== action.id );
    case UPDATE_PROJECT:
      return state.map((project) => {
        if (project.id === action.id) {
          return Object.assign({}, project, { name: action.name })
        } else {
          return project
        }
      });
    default:
      return state;
  }
};

function tasks(state = tasksList, action) {
  return state;
};

const reducer = combineReducers({
  projects,
  tasks
});

export default reducer;
