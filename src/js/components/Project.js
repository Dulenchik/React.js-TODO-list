import React, { Component } from "react"
import { Button, Grid, Icon, Segment } from "semantic-ui-react"
import { default as Edit } from "./Form"

class Project extends Component {
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

  handleUpdate = newItemName => {
    this.props.onUpdate(this.props.id, newItemName)
    this.handleCancel()
  }

  render() {
    const item = (
      <Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}>
              <Icon name="dropdown" />
            </Grid.Column>

            <Grid.Column width={11}>
              <span onClick={this.props.onClick}>{this.props.name}</span>
            </Grid.Column>

            <Grid.Column width={4} textAlign={"right"}>
              <Button.Group size="mini" basic>
                <Button onClick={this.handleEdit} icon="pencil" />
                <Button onClick={this.handleDelete} icon="trash" />
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
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

export default Project
