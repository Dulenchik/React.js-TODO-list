import { takeLatest } from "redux-saga/effects"
import { TOGGLE_TASK_COMPLETION_REQUEST } from "./actions/tasks"
import { toggleTaskCompletionSaga } from "./sagas/tasks"

function* saga() {
  yield takeLatest(TOGGLE_TASK_COMPLETION_REQUEST, toggleTaskCompletionSaga)
}

export default saga
