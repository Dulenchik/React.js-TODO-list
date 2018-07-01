import {
  ADD_FLASH_MESSAGE,
  DELETE_FLASH_MESSAGE
} from "./../../js/actions/flashMessages"

export default function flashMessages(state = [], action) {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return state.concat({
        id: action.id,
        type: action.messageType,
        exclamation: action.exclamation,
        text: action.text
      })
    case DELETE_FLASH_MESSAGE:
      return state.filter(flashMessage => flashMessage.id !== action.id)
    default:
      return state
  }
}
