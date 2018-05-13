import React, { Component } from "react"
import { Form as UIForm } from "semantic-ui-react"

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showControls: props.alwaysShowControls,
      value: this.props.name || ""
    }
  }

  cancel = () => {
    const newState = { value: "" }
    if (!this.props.alwaysShowControls) {
      newState.showControls = false
    }
    this.setState(newState)
    if (this.props.onCancel) {
      this.props.onCancel()
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.value) {
      return
    }
    this.props.onSubmit(this.state.value)
    this.cancel()
  }

  handleCancel = e => {
    e.preventDefault()
    this.cancel()
  }

  handleChange = e => {
    const value = e.target.value
    const newState = { value: value }
    if (!this.props.alwaysShowControls) {
      newState.showControls = !!value
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

        {this.state.showControls && (
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
