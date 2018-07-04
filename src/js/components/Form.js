import React, { Component } from "react"
import { Form as UIForm } from "semantic-ui-react"
import InputWithError from "./shared/InputWithError"

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showControls: props.alwaysShowControls,
      name: this.props.name || "",
      errors: {}
    }
  }

  cancel = () => {
    const newState = { name: "", errors: {} }
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
    if (!this.state.name) {
      return
    }
    this.props
      .onSubmit(this.state.name)
      .then(() => this.cancel())
      .catch(err => this.setState({ errors: err.response.data.error.fields }))
  }

  handleCancel = e => {
    e.preventDefault()
    this.cancel()
  }

  handleChange = e => {
    const value = e.target.value
    const newState = { name: value }
    if (!this.props.alwaysShowControls) {
      newState.showControls = !!value
    }
    this.setState(newState)
  }

  render() {
    return (
      <UIForm onSubmit={this.handleSubmit}>
        <InputWithError errors={this.state.errors.name}>
          <UIForm.Input
            type="text"
            name="name"
            placeholder={this.props.placeholder}
            value={this.state.name}
            onChange={this.handleChange}
            fluid
          />
        </InputWithError>

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
