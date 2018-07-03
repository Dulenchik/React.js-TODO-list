import { normalize } from "normalizr"

import { commentSchema } from "./../utils/schemas"

export const COMMENTS_FETCHED = "COMMENTS_FETCHED"
export const ADD_COMMENT = "ADD_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

const commentsFetched = data => ({ type: COMMENTS_FETCHED, data })
const commentAdded = data => ({ type: ADD_COMMENT, data })
const commentDeleted = id => ({ type: DELETE_COMMENT, id })

export const fetchComments = taskId => (dispatch, getState, api) => {
  api.comments.fetchAll(taskId).then(comments => {
    const normalizedComments = normalize(comments, [commentSchema])
    dispatch(
      commentsFetched(Object.values(normalizedComments.entities.comments))
    )
  })
}

export const addComment = (taskId, text, image) => (
  dispatch,
  getState,
  api
) => {
  api.comments.create(taskId, text, image).then(comment => {
    const normalizedComment = normalize(comment, commentSchema)
    dispatch(commentAdded(Object.values(normalizedComment.entities.comments)))
  })
}

export const deleteComment = id => (dispatch, getState, api) => {
  api.comments.delete(id).then(comment => dispatch(commentDeleted(comment.id)))
}
