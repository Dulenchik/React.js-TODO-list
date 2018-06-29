export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"

export const USER_SIGN_UP_REQUEST = "USER_SIGN_UP_REQUEST"
export const USER_SIGN_UP_SUCCESS = "USER_SIGN_UP_SUCCESS"
export const USER_SIGN_UP_FAILURE = "USER_SIGN_UP_FAILURE"

export const userLogin = (email, password) => ({
  type: USER_LOGIN_REQUEST,
  email,
  password
})

export const userSignUp = (email, password, passwordConfirmation) => ({
  type: USER_SIGN_UP_REQUEST,
  email,
  password,
  passwordConfirmation
})
