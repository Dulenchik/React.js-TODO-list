import { ADD_COMMENT, DELETE_COMMENT } from "./../../js/actions/comments"

const commentsList = [
  {
    id: 23,
    taskId: 5,
    text: "Look at this!",
    image:
      "http://petstime.ru/sites/default/files/styles/article-500/public/field/image/5week.jpg?itok=f4zhCXrL",
    createdOn: "03/26/2018"
  },
  { id: 13, taskId: 5, text: "Wow!", image: null, createdOn: "03/27/2018" },
  {
    id: 75,
    taskId: 5,
    text: "It is so cuuuuute!!!",
    image: null,
    createdOn: "04/01/2018"
  },
  {
    id: 3,
    taskId: 5,
    text: "How old is it?",
    image: null,
    createdOn: "04/09/2018"
  },

  {
    id: 55,
    taskId: 39,
    text: "Hey, do you have photos with kitten?)",
    image: null,
    createdOn: "04/20/2018"
  },
  {
    id: 34,
    taskId: 39,
    text: "Like this: ",
    image:
      "http://petstime.ru/sites/default/files/styles/article-500/public/field/image/5week.jpg?itok=f4zhCXrL",
    createdOn: "04/20/2018"
  },
  {
    id: 63,
    taskId: 39,
    text: "Take!",
    image: "http://danlik.ru/wp-content/uploads/2014/11/glupy-kotjonok.jpg",
    createdOn: "04/20/2018"
  },

  {
    id: 95,
    taskId: 12,
    text: "Do you like React?",
    image: null,
    createdOn: "04/12/2018"
  },
  {
    id: 11,
    taskId: 23,
    text: "Do you like Ember?",
    image: null,
    createdOn: "04/13/2018"
  },
  {
    id: 67,
    taskId: 17,
    text: "Do you like Angular?",
    image: null,
    createdOn: "04/14/2018"
  },
  {
    id: 84,
    taskId: 12,
    text: "Do you like Vue?",
    image: null,
    createdOn: "04/15/2018"
  }
]

export default function comments(state = commentsList, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state.concat({
        id: action.id,
        text: action.text,
        image: action.image,
        taskId: action.taskId,
        createdOn: action.createdOn
      })
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.id)
    default:
      return state
  }
}
