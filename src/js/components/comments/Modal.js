import React, { Component } from "react"
import { connect } from "react-redux"
import { filter, orderBy } from "lodash"
import Form from "./Form"
import Item from "./Item"
import {
  fetchComments,
  addComment,
  deleteComment
} from "./../../actions/comments"
import { Modal as ModalUI, List, Divider } from "semantic-ui-react"

class Modal extends Component {
  componentDidMount = () => this.props.fetchComments()

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
  comments: orderBy(
    filter(state.comments, item => item.taskId === ownProps.taskId),
    "id",
    ["desc"]
  )
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreate: (text, fileUrl) =>
    dispatch(addComment(ownProps.taskId, text, fileUrl)),
  onDelete: id => dispatch(deleteComment(id)),
  fetchComments: () => dispatch(fetchComments(ownProps.taskId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
