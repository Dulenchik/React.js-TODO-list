import React, { Component } from "react"
import { default as CommentsModal } from "./../components/comments/Modal"
import ProjectsList from "./../components/ProjectsList"

import { addTask } from "./../../js/actions/tasks"

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { commentsTaskId: null }
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
    return (
      <div>
        <ProjectsList showCommentsFor={this.showCommentsFor} />

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

export default Home
