export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function addComment(newCommentText, taskId) {
  return {
    type: ADD_COMMENT,
    id: Math.round(Math.random() * 100),
    text: newCommentText,
    taskId: taskId,
    createdOn: '05/05/2018'
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id: id
  }
}
