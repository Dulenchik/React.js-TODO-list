export const ADD_COMMENT = "ADD_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

let idCounter = 0

export const addComment = (taskId, text, image) => ({
  type: ADD_COMMENT,
  id: ++idCounter,
  text,
  image,
  taskId,
  createdOn: "05/05/2018"
})

export const deleteComment = id => ({ type: DELETE_COMMENT, id })
