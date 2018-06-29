import React from "react"
import { Link } from "react-router-dom"
import { Header, Divider } from "semantic-ui-react"
import SignInForm from "./../components/auth/SignInForm"

const SignIn = props => (
  <div>
    <Header>Sign In</Header>
    <SignInForm />
    <Divider hidden />
    <p>
      Don't have an account?<Link to="/sign_up">Sign Up</Link>
    </p>
  </div>
)

export default SignIn
