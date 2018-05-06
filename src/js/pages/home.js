import React, { Component } from "react"
import { connect } from "react-redux"
import { filter, orderBy } from "lodash"
import { ListGroup, ListGroupItem } from "react-bootstrap"

import { default as Project } from "./../components/Item"
import { default as NewProject } from "./../components/Form"

import { default as Task } from "./../components/Item"
import { default as NewTask } from "./../components/Form"
import { default as CommentsModal } from "./../components/comments/Modal"

import { addProject, deleteProject, updateProject } from "./../actions/projects"
import {
  addTask,
  deleteTask,
  updateTask,
  toggleTaskCompletion,
  increaseTaskPriority,
  decreaseTaskPriority
} from "./../../js/actions/tasks"

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { commentsTaskId: null }
  }

  handleCreateProject = newProjectName => {
    this.props.dispatch(addProject(newProjectName))
  }
  handleUpdateProject = (id, newProjectName) => {
    this.props.dispatch(updateProject(id, newProjectName))
  }
  handleDeleteProject = id => {
    this.props.dispatch(deleteProject(id))
  }
  handleUpdateTask = (id, newTaskName) => {
    this.props.dispatch(updateTask(id, newTaskName))
  }
  handleDeleteTask = id => {
    this.props.dispatch(deleteTask(id))
  }
  handleToggleTaskCompletion = id => {
    this.props.dispatch(toggleTaskCompletion(id))
  }
  handleIncreasePriority = id => {
    this.props.dispatch(increaseTaskPriority(id))
  }
  handleDecreasePriority = id => {
    this.props.dispatch(decreaseTaskPriority(id))
  }
  showCommentsFor = id => {
    this.setState({ commentsTaskId: id })
  }
  hideComments = () => {
    this.setState({ commentsTaskId: null })
  }

  handleCreateTask = projectId => {
    return newTaskName => {
      this.props.dispatch(addTask(newTaskName, projectId))
    }
  }

  render() {
    const taskFormPlaceholder = "Enter Tasks Name..."
    const projectFormPlaceholder = "Enter Project Name..."
    const listOfProjects = this.props.projects.map(project => {
      return (
        <li key={project.id}>
          <Project
            {...project}
            placeholder={projectFormPlaceholder}
            onUpdate={this.handleUpdateProject}
            onDelete={this.handleDeleteProject}
          >
            <ListGroup>
              {project.tasks.map(task => (
                <ListGroupItem key={task.id}>
                  <Task
                    {...task}
                    placeholder={taskFormPlaceholder}
                    onMoveUp={this.handleIncreasePriority}
                    onMoveDown={this.handleDecreasePriority}
                    onUpdate={this.handleUpdateTask}
                    onDelete={this.handleDeleteTask}
                    onCompletionToggle={this.handleToggleTaskCompletion}
                    onCommentsShow={this.showCommentsFor}
                  />
                </ListGroupItem>
              ))}

              <ListGroupItem>
                <NewTask
                  onSubmit={this.handleCreateTask(project.id)}
                  placeholder={taskFormPlaceholder}
                  alwaysShowControls={true}
                />
              </ListGroupItem>
            </ListGroup>
          </Project>
        </li>
      )
    })

    return (
      <div>
        <ul>
          {listOfProjects}
          <li>
            <NewProject
              onSubmit={this.handleCreateProject}
              placeholder={projectFormPlaceholder}
              alwaysShowControls={true}
            />
          </li>
        </ul>

        {this.state.commentsTaskId && (
          <CommentsModal
            taskId={this.state.commentsTaskId}
            onClose={this.hideComments}
          />
        )}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const newState = {}
  newState.projects = state.projects.map(project => {
    const tasks = orderBy(
      filter(state.tasks, task => task.projectId === project.id),
      "position",
      ["asc"]
    )
    return { ...project, tasks: tasks }
  })
  return newState
}

export default connect(mapStateToProps)(Home)
