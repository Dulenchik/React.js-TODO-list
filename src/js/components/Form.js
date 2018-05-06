import React, { Component } from "react"
import { Button, FormControl } from "react-bootstrap"

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
      <form onSubmit={this.handleSubmit}>
        <FormControl
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />

        {this.state.isEdit && <Button type="submit">Save</Button>}
        {this.state.isEdit && (
          <Button onClick={this.handleCancel}>Cancel</Button>
        )}
      </form>
    )
  }
}

export default Form
