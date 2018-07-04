import isEmpty from "validator/lib/isEmpty"
import isLength from "validator/lib/isLength"
import equals from "validator/lib/equals"
import isAlphanumeric from "validator/lib/isAlphanumeric"

import { every } from "lodash"

const validationResult = errors => {
  const isValid = every(errors, arrayOfErrors => arrayOfErrors.length === 0)
  return { errors, isValid }
}

export default {
  signIn: state => {
    const errors = { username: [], password: [] }
    if (isEmpty(state.username)) errors.username.push("can't be blank")
    if (isEmpty(state.password)) errors.password.push("can't be blank")

    return validationResult(errors)
  },

  signUp: state => {
    const errors = { username: [], password: [], password_confirmation: [] }
    if (isEmpty(state.username)) {
      errors.username.push("can't be blank")
    } else if (!isLength(state.username, { min: 8, max: 50 })) {
      errors.username.push("should be between 8 and 50 characters")
    }

    if (isEmpty(state.password)) {
      errors.password.push("can't be blank")
    } else if (!isAlphanumeric(state.password)) {
      errors.password.push(
        "is invalid, only aplhanumeric characters are allowed"
      )
    }
    if (!equals(state.password, state.passwordConfirmation))
      errors.password_confirmation.push("doesn't match Password")

    return validationResult(errors)
  },

  projectAndTask: state => {
    const errors = { name: [] }
    if (isEmpty(state.name)) {
      errors.name.push("can't be blank")
    } else if (!isLength(state.name, { min: 0, max: 256 })) {
      errors.name.push("is too long (maximum is 256)")
    }

    return validationResult(errors)
  },

  comment: state => {
    const errors = { text: [] }
    if (isEmpty(state.text)) {
      errors.text.push("can't be blank")
    } else if (!isLength(state.text, { min: 10, max: 256 })) {
      errors.text.push("should be between 10 and 256 characters")
    }

    return validationResult(errors)
  }
}

// signIn
// usersname
//  isEmpty
// password
//  isEmpty

// signUp
// usersname
//  isEmpty
//  isLength
// password
//  isEmpty
//  isAlphanumeric
//  isLength
// passwordConfirmation
//  isEmpty
//  isAlphanumeric
//  isLength
//  equals

// project
//  isEmpty
//  isLength

// task
//  isEmpty
//  isLength

// comment
//  isEmpty
//  isLength

// can't be blank
// doesn't match Password
// is too short (minimum is 8 characters)
// is too long (maximum is 50 characters)
// is invalid
