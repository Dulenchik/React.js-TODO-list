import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { userLogin } from "./../../actions/auth"
import { Form, Message } from "semantic-ui-react"

class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = { username: "", password: "", error: "" }
  }

  submit = e => {
    e.preventDefault()
    const { username, password } = { ...this.state }
    this.props
      .onSubmit(username, password)
      .then(res => this.props.history.push("/"))
      .catch(() => this.setState({ error: "Invalid credentials" }))
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        {this.state.error && (
          <Message header={"Error!"} content={this.state.error} error />
        )}

        <Form onSubmit={this.submit}>
          <Form.Input
            name="username"
            type="username"
            placeholder="Username"
            onChange={this.onChange}
          />
          <Form.Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.onChange}
          />

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
