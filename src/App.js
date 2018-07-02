import React from "react"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react"
import axios from "axios"

import NavBar from "./js/components/shared/NavBar"

import Home from "./js/pages/Home"
import SignIn from "./js/pages/SignIn"
import SignUp from "./js/pages/SignUp"

import UserRoute from "./js/components/routes/UserRoute"
import GuestRoute from "./js/components/routes/GuestRoute"

import { userLogout } from "./js/actions/auth"

const App = ({ isAuthenticated, logout }) => {
  if (localStorage.todoListJWT) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      localStorage.todoListJWT
    }`
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          logout()
        }
        return Promise.reject(error)
      }
    )
  } else {
    delete axios.defaults.headers.common["Authorization"]
  }

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

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userLogout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
