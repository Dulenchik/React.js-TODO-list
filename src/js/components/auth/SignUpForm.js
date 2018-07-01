import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Form, Message } from "semantic-ui-react"
import { camelCase } from "lodash"
import { userSignUp } from "./../../actions/auth"

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      errors: {}
    }
  }

  submit = e => {
    e.preventDefault()
    const { username, password, passwordConfirmation } = { ...this.state }
    this.props
      .onSubmit(username, password, passwordConfirmation)
      .then(() => this.props.history.push("/"))
      .catch(err => this.setState({ errors: err.response.data.error.message }))
  }

  onChange = e => this.setState({ [camelCase(e.target.name)]: e.target.value })

  render() {
    return (
      <div>
        {this.state.errors.length && (
          <Message header={"Error!"} content={this.state.errors} error />
        )}

        <Form onSubmit={this.submit}>
          <Form.Input
            onChange={this.onChange}
            name="username"
            type="text"
            placeholder="theCoolest17"
          />
          <Form.Input
            onChange={this.onChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Form.Input
            onChange={this.onChange}
            name="password_confirmation"
            type="password"
            placeholder="Confirm Password"
          />

          <Form.Button type="submit" size="large" color="blue">
            Sign Up
          </Form.Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (username, password, passwordConfirmation) =>
    dispatch(userSignUp(username, password, passwordConfirmation))
})

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm)
