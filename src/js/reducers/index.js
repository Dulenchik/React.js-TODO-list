import { combineReducers } from 'redux';
import { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from './../../js/actions/projects';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, TOGGLE_TASK_COMPLETION } from './../../js/actions/tasks';

const projectsList = [
  { id: 1, name: 'Setup Rails', taskIds: [12, 17, 23] },
  { id: 2, name: 'Setup React + Redux', taskIds: [39, 37] },
  { id: 3, name: 'Enjoy!', taskIds: [5] }
]

const tasksList = [
  { id: 39, name: 'Apply Redux', position: 1, isDone: false },
  { id: 37, name: 'Learn Redux', position: 0, isDone: true },

  { id: 5, name: 'Take a Coffee', position: 0, isDone: false },

  { id: 12, name: 'Generate App', position: 0, isDone: true },
  { id: 17, name: 'Implement Business Logic', position: 1, isDone: true },
  { id: 23, name: 'Write specs', position: 2, isDone: false }
]

function projects(state = projectsList, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return state.concat({ id: state.length + 1, name: action.name, taskIds: [] })
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
    case ADD_TASK:
      return state.map((project) => {
        if (project.id === action.projectId) {
          return Object.assign({}, project, { taskIds: project.taskIds.concat(action.id) })
        } else {
          return project
        }
      })
    default:
      return state;
  }
};

function tasks(state = tasksList, action) {
  switch (action.type) {
    case ADD_TASK:
      return state.concat({ id: action.id, name: action.name, isDone: false, position: state.length + 1 })
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id );
    case UPDATE_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          return Object.assign({}, task, { name: action.name })
        } else {
          return task
        }
      });
    case TOGGLE_TASK_COMPLETION:
      return state.map((task) => {
        if (task.id === action.id) {
          return Object.assign({}, task, { isDone: !task.isDone })
        } else {
          return task
        }
      });
    default:
      return state;
  }
};

const reducer = combineReducers({
  projects,
  tasks
});

export default reducer;
