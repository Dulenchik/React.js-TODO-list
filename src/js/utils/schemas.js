import { schema } from "normalizr"
import moment from "moment"

export const projectSchema = new schema.Entity(
  "projects",
  {},
  {
    processStrategy: ({ id, name }, parent, key) => ({ id, name })
  }
)

export const taskSchema = new schema.Entity(
  "tasks",
  {},
  {
    processStrategy: (
      {
        id,
        name,
        deadline,
        priority: position,
        project_id: projectId,
        done: isDone
      },
      parent,
      key
    ) => {
      const dueDate = deadline ? moment(deadline).format("DD/MM/YYYY") : null
      const dueTime = deadline ? moment(deadline).format("HH:mm") : null
      return { id, name, position, projectId, isDone, dueDate, dueTime }
    }
  }
)

export const commentSchema = new schema.Entity(
  "comments",
  {},
  {
    processStrategy: (
      { id, text, file, created_at: createdAt, task_id: taskId },
      parent,
      key
    ) => {
      let createdOn = moment(createdAt).format("DD/MM/YYYY")
      let image = file.thumb.url
      return { id, text, image, createdOn, taskId }
    }
  }
)
