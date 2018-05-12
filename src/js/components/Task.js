import React, { Component } from "react"
import { Button, Grid, Popup, Form, Item } from "semantic-ui-react"
import { default as Edit } from "./Form"
import DeadlineForm from "./DeadlineForm"

class Task extends Component {
  constructor(props) {
    super(props)

    this.state = { isEditable: false }
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
    const item = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={1}>
            <Button.Group vertical size="mini" basic>
              <Button
                onClick={this.handleIncreasePriority}
                icon="long arrow up"
              />
              <Button
                onClick={this.handleDecreasePriority}
                icon="long arrow down"
              />
            </Button.Group>
          </Grid.Column>

          <Grid.Column width={11}>
            <Item
              description={
                <Form.Checkbox
                  checked={this.props.isDone}
                  onChange={this.handleToggleCompletion}
                  label={this.props.name}
                />
              }
              extra={
                !!this.props.dueDate &&
                !!this.props.dueTime &&
                `${this.props.dueDate} ${this.props.dueTime}`
              }
            />
          </Grid.Column>

          <Grid.Column width={4} textAlign={"right"}>
            <Button.Group size="mini" basic>
              <Button
                onClick={this.showCommnets}
                icon="comment"
                label={!!this.props.commentsCount && this.props.commentsCount}
                labelPosition="left"
              />

              <Popup
                basic
                on="click"
                position="bottom right"
                trigger={<Button icon="clock" />}
                content={
                  <DeadlineForm
                    taskId={this.props.id}
                    date={this.props.dueDate}
                    time={this.props.dueTime}
                    onSubmit={this.props.onSetDueDate}
                  />
                }
              />

              <Button onClick={this.handleEdit} icon="pencil" />

              <Button onClick={this.handleDelete} icon="trash" />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )

    return (
      <div className="task">
        {this.state.isEditable ? (
          <Edit
            name={this.props.name}
            placeholder={this.props.placeholder}
            onSubmit={this.handleUpdate}
            onCancel={this.handleCancel}
            alwaysShowControls={false}
          />
        ) : (
          item
        )}

        {this.props.children}
      </div>
    )
  }
}

export default Task
