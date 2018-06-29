import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { userLogin } from "./../../actions/auth"
import { Form } from "semantic-ui-react"

class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = { email: "", password: "" }
  }

  submit = e => {
    e.preventDefault()
    const { email, password } = { ...this.state }
    this.props.onSubmit(email, password)
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Form.Input
          name="email"
          type="email"
          placeholder="test@example.com"
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
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (email, password) => dispatch(userLogin(email, password))
})

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default connect(
  null,
  mapDispatchToProps
)(SignInForm)
