import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Form } from "semantic-ui-react"
import { camelCase } from "lodash"
import { userSignUp } from "./../../actions/auth"

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  }

  submit = e => {
    e.preventDefault()
    const { email, password, passwordConfirmation } = { ...this.state }
    this.props.onSubmit(email, password, passwordConfirmation)
  }

  onChange = e => this.setState({ [camelCase(e.target.name)]: e.target.value })

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Form.Input
          onChange={this.onChange}
          name="email"
          type="email"
          placeholder="test@example.com"
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
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (email, password, passwordConfirmation) =>
    dispatch(userSignUp(email, password, passwordConfirmation))
})

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SignUpForm)
