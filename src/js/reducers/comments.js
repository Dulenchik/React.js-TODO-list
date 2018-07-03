import {
  COMMENTS_FETCHED,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./../actions/comments"

import { unionBy } from "lodash"

export default function comments(state = [], action) {
  switch (action.type) {
    case COMMENTS_FETCHED:
    case ADD_COMMENT:
      return unionBy(action.data, state, "id")
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.id)
    default:
      return state
  }
}
