import React from "react"
import { Link } from "react-router-dom"
import { Header, Divider } from "semantic-ui-react"
import SignUpForm from "./../components/auth/SignUpForm"

const SignUp = props => (
  <div>
    <Header>Sign Up</Header>
    <SignUpForm />
    <Divider hidden />
    <p>
      Already a member?<Link to="/sign_in">Sign In</Link>
    </p>
  </div>
)

export default SignUp
