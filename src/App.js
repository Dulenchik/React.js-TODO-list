import React from "react"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react"

import NavBar from "./js/components/shared/NavBar"

import Home from "./js/pages/Home"
import SignIn from "./js/pages/SignIn"
import SignUp from "./js/pages/SignUp"

import UserRoute from "./js/components/routes/UserRoute"
import GuestRoute from "./js/components/routes/GuestRoute"

const App = ({ isAuthenticated }) => {
  return (
    <div>
      <NavBar />

      <Container text>
        <UserRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/"
          component={Home}
        />
        <GuestRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/sign_in"
          component={SignIn}
        />
        <GuestRoute
          isAuthenticated={isAuthenticated}
          exact
          path="/sign_up"
          component={SignUp}
        />
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(App)
