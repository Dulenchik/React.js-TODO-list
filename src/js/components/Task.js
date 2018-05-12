import React, { Component } from "react"
import { Button, Grid } from "semantic-ui-react"
import { default as Edit } from "./Form"

class Item extends Component {
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
    const checkboxId = `${this.props.id}`
    const textDecoration = this.props.isDone ? "line-through" : "none"
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
            <input
              type="checkbox"
              id={checkboxId}
              defaultChecked={this.props.isDone}
              onChange={this.handleToggleCompletion}
            />
            <label htmlFor={checkboxId}>
              <span style={{ textDecoration: textDecoration }}>
                {this.props.name}
              </span>
            </label>
          </Grid.Column>

          <Grid.Column width={4} textAlign={"right"}>
            <Button.Group size="mini" basic>
              <Button onClick={this.showCommnets} icon="comment" />

              <Button icon="clock" />

              <Button onClick={this.handleEdit} icon="pencil" />

              <Button onClick={this.handleDelete} icon="trash" />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )

    return (
      <div>
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

export default Item
