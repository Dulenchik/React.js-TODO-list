import React from "react"
import { Link } from "react-router-dom"
import { Header, Divider } from "semantic-ui-react"
import SignInForm from "./../components/auth/SignInForm"

const SignIn = ({ history }) => (
  <div>
    <Header>Sign In</Header>
    <SignInForm history={history} />
    <Divider hidden />
    <p>
      Don't have an account?<Link to="/sign_up">Sign Up</Link>
    </p>
  </div>
)

export default SignIn
