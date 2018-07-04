import {
  COMMENTS_FETCHED,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./../actions/comments"

import { USER_LOGGED_OUT } from "./../actions/auth"

export default function comments(state = [], action) {
  switch (action.type) {
    case COMMENTS_FETCHED:
    case ADD_COMMENT:
      return state.concat(action.data)
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.id)
    case USER_LOGGED_OUT:
      return []
    default:
      return state
  }
}
