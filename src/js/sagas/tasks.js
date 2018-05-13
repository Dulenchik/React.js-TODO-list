import { put, select } from "redux-saga/effects"
import { find, filter } from "lodash"
import { TOGGLE_TASK_COMPLETION_SUCCESS } from "./../actions/tasks"
import { addFlashMessage } from "./../actions/flashMessages"

const fetchTasksForSameProject = (store, taskId) => {
  const taskById = find(store.tasks, { id: taskId })
  return filter(store.tasks, { projectId: taskById.projectId })
}

export function* toggleTaskCompletionSaga(action) {
  yield put({ id: action.id, type: TOGGLE_TASK_COMPLETION_SUCCESS })
  const tasks = yield select(fetchTasksForSameProject, action.id)
  if (tasks.length === filter(tasks, "isDone").length) {
    yield put(
      addFlashMessage(
        "success",
        "Well done!",
        "You've successfully done all tasks."
      )
    )
  }
}
