export const ADD_FLASH_MESSAGE = "ADD_FLASH_MESSAGE"
export const DELETE_FLASH_MESSAGE = "DELETE_FLASH_MESSAGE"

let idCounter = 0

export const addFlashMessage = (messageType, exclamation, text) => ({
  type: ADD_FLASH_MESSAGE,
  id: ++idCounter,
  messageType,
  exclamation,
  text
})

export const deleteFlashMessage = id => ({ type: DELETE_FLASH_MESSAGE, id })
