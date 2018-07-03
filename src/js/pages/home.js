import React, { Component } from "react"
import { connect } from "react-redux"
import { default as CommentsModal } from "./../components/comments/Modal"
import ProjectsList from "./../components/ProjectsList"
import FlashMessagesList from "./../components/FlashMessagesList"
import { Header } from "semantic-ui-react"

import { fetchProjects } from "./../actions/projects"
import { fetchTasks } from "./../actions/tasks"
import { fetchComments } from "./../actions/comments"

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { commentsTaskId: null }
  }

  componentDidMount = () => {
    this.props.fetchProjects()
    this.props.fetchTasks()
    this.props.fetchComments()
  }

  showCommentsFor = id => {
    this.setState({ commentsTaskId: id })
  }
  hideComments = () => {
    this.setState({ commentsTaskId: null })
  }

  render() {
    return (
      <div>
        <FlashMessagesList />
        <Header>Projects</Header>
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

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchTasks: () => dispatch(fetchTasks()),
  fetchComments: () => dispatch(fetchComments())
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
