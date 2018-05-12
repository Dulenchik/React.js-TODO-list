import React, { Component } from "react"
import { Form as UIForm } from "semantic-ui-react"

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEdit: !props.alwaysShowControls,
      value: this.props.name || ""
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
    this.handleCancel(e)
  }

  handleCancel = e => {
    e.preventDefault()
    this.setState({ value: "" })
    if (this.props.onCancel) {
      this.props.onCancel()
    }
    this.handleChange(e)
  }

  handleChange = e => {
    const value = e.target.value
    const newState = { value: value }
    if (this.props.alwaysShowControls) {
      newState.isEdit = !!value
    }
    this.setState(newState)
  }

  render() {
    return (
      <UIForm onSubmit={this.handleSubmit}>
        <UIForm.Input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
          fluid
        />

        {this.state.isEdit && (
          <UIForm.Group>
            <UIForm.Button type="submit">Save</UIForm.Button>
            <UIForm.Button onClick={this.handleCancel}>Cancel</UIForm.Button>
          </UIForm.Group>
        )}
      </UIForm>
    )
  }
}

export default Form
