import React, { Component } from "react"
import { connect } from "react-redux"
import { filter } from "lodash"
import Form from "./Form"
import Item from "./Item"
import { addComment, deleteComment } from "./../../actions/comments"
import { Modal as ModalUI, List, Divider } from "semantic-ui-react"

class Modal extends Component {
  render() {
    return (
      <ModalUI
        open={!!this.props.taskId}
        onClose={this.props.onClose}
        closeIcon
      >
        <ModalUI.Header>Add comment</ModalUI.Header>

        <ModalUI.Content>
          <Form onCreate={this.props.onCreate} onClose={this.props.onClose} />
        </ModalUI.Content>

        <Divider />

        <ModalUI.Content>
          <List>
            {this.props.comments.map(comment => (
              <Item
                {...comment}
                key={comment.id}
                onDelete={this.props.onDelete}
              />
            ))}
          </List>
        </ModalUI.Content>
      </ModalUI>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: filter(state.comments, item => item.taskId === ownProps.taskId)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreate: (text, fileUrl) =>
    dispatch(addComment(ownProps.taskId, text, fileUrl)),
  onDelete: id => dispatch(deleteComment(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
