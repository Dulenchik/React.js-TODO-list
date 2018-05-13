export const ADD_FLASH_MESSAGE = "ADD_FLASH_MESSAGE"
export const DELETE_FLASH_MESSAGE = "DELETE_FLASH_MESSAGE"

let id = 0

export function addFlashMessage(type, exclamation, text) {
  return {
    type: ADD_FLASH_MESSAGE,
    id: ++id,
    text: text,
    exclamation: exclamation,
    messageType: type
  }
}

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id: id
  }
}
