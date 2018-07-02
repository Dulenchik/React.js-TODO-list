import { schema } from "normalizr"
import moment from "moment"

export const projectSchema = new schema.Entity(
  "projects",
  {},
  {
    processStrategy: (value, parent, key) => {
      return { id: value.id, name: value.name }
    }
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
