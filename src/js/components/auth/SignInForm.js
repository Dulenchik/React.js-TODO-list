import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Form, Message } from "semantic-ui-react"
import { userLogin } from "./../../actions/auth"
import validator from "./../../utils/validations"

import InputWithErrors from "./../shared/InputWithError"

class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      serverError: "",
      errors: {},
      isValid: true
    }
  }

  submit = e => {
    e.preventDefault()
    this.setState(validator.signIn(this.state), () => {
      if (!this.state.isValid) return
      const { username, password } = { ...this.state }
      this.props
        .onSubmit(username, password)
        .then(res => this.props.history.push("/"))
        .catch(() => this.setState({ serverError: "Invalid credentials" }))
    })
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        {this.state.serverError && (
          <Message header={"Error!"} content={this.state.serverError} error />
        )}

        <Form onSubmit={this.submit}>
          <InputWithErrors errors={this.state.errors.username}>
            <Form.Input
              onChange={this.onChange}
              name="username"
              type="text"
              placeholder="Username"
            />
          </InputWithErrors>
          <InputWithErrors errors={this.state.errors.password}>
            <Form.Input
              onChange={this.onChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </InputWithErrors>

          <Form.Button type="submit" size="large" color="blue">
            Sign In
          </Form.Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (username, password) => dispatch(userLogin(username, password))
})

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default connect(
  null,
  mapDispatchToProps
)(SignInForm)
