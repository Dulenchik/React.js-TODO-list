import React, { Component } from "react"
import { connect } from "react-redux"
import { filter } from "lodash"
import Form from "./Form"
import Item from "./Item"
import { Modal as BsModal } from "react-bootstrap"
import { addComment, deleteComment } from "./../../actions/comments"

class Modal extends Component {
  handleCreateComment = newCommentText => {
    this.props.dispatch(addComment(newCommentText, this.props.taskId))
  }

  handleDeleteComment = commentId => {
    this.props.dispatch(deleteComment(commentId))
  }

  render() {
    return (
      <BsModal show={!!this.props.taskId} onHide={this.props.onClose}>
        <BsModal.Header closeButton>
          <BsModal.Title>Add comment</BsModal.Title>
        </BsModal.Header>

        <BsModal.Body>
          <Form
            onCreate={this.handleCreateComment}
            onClose={this.props.onClose}
          />
        </BsModal.Body>

        <BsModal.Footer>
          <ul>
            {this.props.comments.map(comment => (
              <Item
                {...comment}
                key={comment.id}
                onDelete={this.handleDeleteComment}
              />
            ))}
          </ul>
        </BsModal.Footer>
      </BsModal>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const comments = filter(state.comments, item => {
    return item.taskId === ownProps.taskId
  })
  return { ...ownProps, comments: comments }
}

export default connect(mapStateToProps)(Modal)
