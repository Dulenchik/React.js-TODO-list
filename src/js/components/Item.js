import React, { Component } from "react"
import { Button, Col, Glyphicon, Row } from "react-bootstrap"
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

  handleCancel = () => {
    this.setState({ isEditable: false })
  }
  handleDelete = () => {
    this.props.onDelete(this.props.id)
  }
  handleToggleCompletion = () => {
    this.props.onCompletionToggle(this.props.id)
  }
  handleIncreasePriority = () => {
    this.props.onMoveUp(this.props.id)
  }
  handleDecreasePriority = () => {
    this.props.onMoveDown(this.props.id)
  }
  showCommnets = () => {
    this.props.onCommentsShow(this.props.id)
  }

  handleUpdate = newItemName => {
    this.props.onUpdate(this.props.id, newItemName)
    this.handleCancel()
  }

  render() {
    const checkboxId = `${this.props.id}`
    const textDecoration = this.props.isDone ? "line-through" : "none"
    const item = (
      <Row>
        <Col xs={1}>
          {!!this.props.onMoveUp &&
            !!this.props.onMoveDown && (
              <span>
                <Button onClick={this.handleIncreasePriority} bsSize="xsmall">
                  <Glyphicon glyph="arrow-up" />
                </Button>
                <br />
                <Button onClick={this.handleDecreasePriority} bsSize="xsmall">
                  <Glyphicon glyph="arrow-down" />
                </Button>
              </span>
            )}
        </Col>

        <Col xs={8}>
          {!!this.props.onCompletionToggle && (
            <input
              type="checkbox"
              id={checkboxId}
              defaultChecked={this.props.isDone}
              onChange={this.handleToggleCompletion}
            />
          )}
          <label htmlFor={checkboxId}>
            <span style={{ textDecoration: textDecoration }}>
              {this.props.name}
            </span>
          </label>
        </Col>

        <Col xs={3}>
          {this.props.onCommentsShow && (
            <Button onClick={this.showCommnets} bsSize="small">
              <Glyphicon glyph="comment" />
            </Button>
          )}

          <Button bsSize="small">
            <Glyphicon glyph="time" />
          </Button>

          <Button onClick={this.handleEdit} bsSize="small">
            <Glyphicon glyph="pencil" />
          </Button>

          <Button onClick={this.handleDelete} bsSize="small">
            <Glyphicon glyph="trash" />
          </Button>
        </Col>
      </Row>
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
