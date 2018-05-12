import React from "react"
import PropTypes from "prop-types"
import { Form as UIForm } from "semantic-ui-react"

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: "" }
  }

  handleCreateComment = e => {
    e.preventDefault()
    if (!this.state.value) return
    this.props.onCreate(this.state.value)
    this.setState({ value: "" })
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <UIForm onSubmit={this.handleCreateComment}>
        <UIForm.TextArea
          placeholder="Enter Your Comment"
          value={this.state.value}
          onChange={this.onChange}
        />

        <UIForm.Group>
          <UIForm.Button size="large" type="submit" color="blue">
            Save
          </UIForm.Button>

          <UIForm.Button
            basic
            size="large"
            type="button"
            onClick={this.props.onClose}
          >
            Cancel
          </UIForm.Button>
        </UIForm.Group>
      </UIForm>
    )
  }
}

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired
}

export default Form
