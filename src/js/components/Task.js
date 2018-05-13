import React, { Component } from "react"
import { Button, Grid, Popup, Form, Item, Confirm } from "semantic-ui-react"
import { default as Edit } from "./Form"
import DeadlineForm from "./DeadlineForm"

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = { isEditable: false, showConfirm: false }
  }

  handleEdit = e => {
    e.preventDefault()
    this.setState({ isEditable: true })
  }

  handleCancel = () => this.setState({ isEditable: false })
  handleDelete = () => this.props.onDelete(this.props.id)
  handleToggleCompletion = () => this.props.onCompletionToggle(this.props.id)
  handleIncreasePriority = () => this.props.onMoveUp(this.props.id)
  handleDecreasePriority = () => this.props.onMoveDown(this.props.id)
  showCommnets = () => this.props.onCommentsShow(this.props.id)

  handleUpdate = newItemName => {
    this.props.onUpdate(this.props.id, newItemName)
    this.handleCancel()
  }

  render() {
    const { id, name, isDone, dueDate, dueTime, commentsCount } = {
      ...this.props
    }

    const item = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={1}>
            <Button.Group vertical size="mini" basic>
              <Button
                onClick={this.handleIncreasePriority}
                icon="long arrow up"
                compact
              />
              <Button
                onClick={this.handleDecreasePriority}
                icon="long arrow down"
                compact
              />
            </Button.Group>
          </Grid.Column>

          <Grid.Column width={10}>
            <Item
              description={
                <Form.Checkbox
                  checked={isDone}
                  onChange={this.handleToggleCompletion}
                  label={name}
                />
              }
              extra={!!dueDate && !!dueTime && `${dueDate} ${dueTime}`}
            />
          </Grid.Column>

          <Grid.Column width={5} textAlign={"right"}>
            <Button.Group size="mini" basic>
              {!!commentsCount && (
                <Button disabled compact content={commentsCount} />
              )}
              <Button onClick={this.showCommnets} icon="comment" />

              <Popup
                basic
                on="click"
                position="bottom right"
                trigger={<Button icon="clock" />}
                content={
                  <DeadlineForm
                    taskId={id}
                    date={dueDate}
                    time={dueTime}
                    onSubmit={this.props.onSetDueDate}
                  />
                }
              />

              <Button onClick={this.handleEdit} icon="pencil" />

              <Button
                onClick={() => this.setState({ showConfirm: true })}
                icon="trash"
              />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )

    return (
      <div className="task">
        {this.state.isEditable ? (
          <Edit
            name={name}
            placeholder={this.props.placeholder}
            onSubmit={this.handleUpdate}
            onCancel={this.handleCancel}
            alwaysShowControls={true}
          />
        ) : (
          item
        )}

        {!!this.state.showConfirm && (
          <Confirm
            size="small"
            header={"Delete task"}
            content={`Do you really want to delete "${name}"?`}
            cancelButton="Cancel"
            confirmButton="Delete"
            open={this.state.showConfirm}
            onCancel={() => this.setState({ showConfirm: false })}
            onConfirm={() => this.handleDelete()}
          />
        )}
      </div>
    )
  }
}

export default Task
