import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./../actions/auth"

const initialState = { isAuthenticated: false }

export default function auth(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { isAuthenticated: true }
    case USER_LOGGED_OUT:
      return { isAuthenticated: false }
    default:
      return state
  }
}
