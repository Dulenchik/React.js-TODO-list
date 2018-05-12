import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { filter, orderBy, map, countBy, includes } from "lodash"
import Task from "./Task"
import { Segment } from "semantic-ui-react"
import { default as NewTask } from "./../components/Form"

import {
  addTask,
  deleteTask,
  updateTask,
  toggleTaskCompletion,
  increaseTaskPriority,
  decreaseTaskPriority
} from "./../../js/actions/tasks"

const TasksList = props => {
  const taskFormPlaceholder = "Enter Tasks Name..."

  return (
    <Segment.Group>
      {props.tasks.map(task => {
        return (
          <Segment key={task.id}>
            <Task
              {...task}
              placeholder={taskFormPlaceholder}
              onMoveUp={props.handleIncreasePriority}
              onMoveDown={props.handleDecreasePriority}
              onUpdate={props.handleUpdateTask}
              onDelete={props.handleDeleteTask}
              onCompletionToggle={props.handleToggleTaskCompletion}
              onCommentsShow={props.showCommentsFor}
              onSetDueDate={props.handleSetDueDate}
            />
          </Segment>
        )
      })}

      <Segment>
        <NewTask
          onSubmit={props.handleCreateTask}
          placeholder={taskFormPlaceholder}
          alwaysShowControls={true}
        />
      </Segment>
    </Segment.Group>
  )
}

const mapStateToProps = (state, ownProps) => {
  const tasks = filter(
    state.tasks,
    task => task.projectId === ownProps.projectId
  )
  const taskIds = map(tasks, "id")
  const commentsCount = countBy(
    filter(state.comments, comment => includes(taskIds, comment.taskId)),
    "taskId"
  )
  const tasksWithCommentsCount = map(tasks, task => ({
    ...task,
    commentsCount: commentsCount[task.id] || 0
  }))

  return { tasks: orderBy(tasksWithCommentsCount, "position", ["asc"]) }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { projectId, showCommentsFor } = { ...ownProps }
  return {
    handleCreateTask: name => dispatch(addTask(projectId, name)),
    handleUpdateTask: (id, name) => dispatch(updateTask(id, { name })),
    handleDeleteTask: id => dispatch(deleteTask(id)),
    handleToggleTaskCompletion: id => dispatch(toggleTaskCompletion(id)),
    handleIncreasePriority: id => dispatch(increaseTaskPriority(id)),
    handleDecreasePriority: id => dispatch(decreaseTaskPriority(id)),
    handleSetDueDate: (id, dueDate, dueTime) =>
      dispatch(updateTask(id, { dueDate, dueTime })),
    showCommnets: showCommentsFor
  }
}

TasksList.propTypes = {
  projectId: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)
