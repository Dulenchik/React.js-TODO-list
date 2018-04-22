import { combineReducers } from 'redux';
import { find, filter, orderBy } from 'lodash';
import { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT } from './../../js/actions/projects';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, TOGGLE_TASK_COMPLETION, INCREASE_TASK_PRIORITY, DECREASE_TASK_PRIORITY } from './../../js/actions/tasks';

const projectsList = [
  { id: 1, name: 'Setup Rails' },
  { id: 2, name: 'Setup React + Redux' },
  { id: 3, name: 'Enjoy!' }
]

const tasksList = [
  { id: 39, name: 'Apply Redux', position: 1, isDone: false, projectId: 2 },
  { id: 37, name: 'Learn Redux', position: 0, isDone: true, projectId: 2 },

  { id: 5, name: 'Take a Coffee', position: 0, isDone: false, projectId: 3 },

  { id: 12, name: 'Generate App', position: 0, isDone: true, projectId: 1 },
  { id: 17, name: 'Implement Business Logic', position: 1, isDone: true, projectId: 1 },
  { id: 23, name: 'Write specs', position: 2, isDone: false, projectId: 1 }
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

function reorder(state, action, indexChanger) {
  let currentTask = find(state, (task) => { return task.id === action.id })
  let sameProjectTasks = filter(state, (task) => { return task.projectId === currentTask.projectId })
  let orderedTasks = orderBy(sameProjectTasks, 'position', ['asc'])
  let anotherTask = orderedTasks[orderedTasks.indexOf(currentTask) + indexChanger]
  if (!anotherTask) { return state }
  return state.map((task) => {
    if (task.id === currentTask.id) {
      return Object.assign({}, task, { position: anotherTask.position })
    } else if (task.id === anotherTask.id) {
      return Object.assign({}, task, { position: currentTask.position })
    } else {
      return task
    }
  });
};

function tasks(state = tasksList, action) {
  switch (action.type) {
    case DELETE_PROJECT:
      return state.filter(task => task.projectId !== action.id );
    case ADD_TASK:
      return state.concat({ id: action.id, name: action.name, isDone: false, position: state.length + 1, projectId: action.projectId })
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
    case INCREASE_TASK_PRIORITY:
      return reorder(state, action, -1)
    case DECREASE_TASK_PRIORITY:
      return reorder(state, action, 1)
    default:
      return state;
  }
};

const reducer = combineReducers({
  projects,
  tasks
});

export default reducer;
