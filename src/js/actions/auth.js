export const USER_LOGGED_IN = "USER_LOGGED_IN"
export const USER_LOGGED_OUT = "USER_LOGGED_OUT"

export const userLoggedIn = () => ({ type: USER_LOGGED_IN })
export const userLoggedOut = () => ({ type: USER_LOGGED_OUT })

export const userLogin = (username, password) => (dispatch, getState, api) =>
  api.auth.login(username, password).then(res => {
    dispatch(userLoggedIn())
    localStorage.setItem("todoListJWT", res.data.jwt)
  })

export const userSignUp = (username, password, passwordConfirmation) => (
  dispatch,
  getState,
  api
) =>
  api.auth.signUp(username, password, passwordConfirmation).then(res => {
    localStorage.setItem("todoListJWT", res.data.jwt)
    dispatch(userLoggedIn)
  })

export const userLogout = () => (dispatch, getState, api) => {
  localStorage.removeItem("todoListJWT")
  dispatch(userLoggedOut())
}
