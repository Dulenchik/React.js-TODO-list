import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { filter, orderBy } from "lodash"
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

const mapStateToProps = (state, ownProps) => ({
  tasks: orderBy(
    filter(state.tasks, task => task.projectId === ownProps.projectId),
    "position",
    ["asc"]
  )
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const { projectId, showCommentsFor } = { ...ownProps }
  return {
    handleCreateTask: name => dispatch(addTask(projectId, name)),
    handleUpdateTask: (id, name) => dispatch(updateTask(id, name)),
    handleDeleteTask: id => dispatch(deleteTask(id)),
    handleToggleTaskCompletion: id => dispatch(toggleTaskCompletion(id)),
    handleIncreasePriority: id => dispatch(increaseTaskPriority(id)),
    handleDecreasePriority: id => dispatch(decreaseTaskPriority(id)),
    showCommnets: showCommentsFor
  }
}

TasksList.propTypes = {
  projectId: PropTypes.number.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)
