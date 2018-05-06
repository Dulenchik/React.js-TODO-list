import React from "react"
import PropTypes from "prop-types"
import { FormControl, Button } from "react-bootstrap"

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
      <form onSubmit={this.handleCreateComment}>
        <FormControl
          componentClass="textarea"
          placeholder="Enter Your Comment"
          value={this.state.value}
          onChange={this.onChange}
        />

        <div className="text-right">
          <Button type="submit" bsSize="large" bsStyle="primary">
            Save
          </Button>

          <Button
            type="button"
            bsSize="large"
            bsStyle="link"
            onClick={this.props.onClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.string.isRequired
}

export default Form
