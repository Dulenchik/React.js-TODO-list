import { combineReducers } from 'redux';
import { ADD_PROJECT, DELETE_PROJECT } from './../../js/actions/projects';

const projectsList = [
  { id: 1, name: 'Setup Rails' },
  { id: 2, name: 'Setup React + Redux' },
  { id: 3, name: 'Enjoy!' }
]

function projects(state = projectsList, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return state.concat({ id: state.length + 1, name: action.name })
    case DELETE_PROJECT:
      return state.filter(project => project.id !== action.id );
    default:
      return state;
  }
};

function tasks(state = [], action) {
  return state;
};

const reducer = combineReducers({
  projects,
  tasks
});

export default reducer;
