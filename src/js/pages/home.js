import React, { Component } from "react"
import { default as CommentsModal } from "./../components/comments/Modal"
import ProjectsList from "./../components/ProjectsList"
import FlashMessagesList from "./../components/FlashMessagesList"
import { Header } from "semantic-ui-react"

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = { commentsTaskId: null }
  }

  showCommentsFor = id => this.setState({ commentsTaskId: id })
  hideComments = () => this.setState({ commentsTaskId: null })

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

export default Home
