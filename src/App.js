import React from "react"
import { connect } from "react-redux"
import { Container } from "semantic-ui-react"

import NavBar from "./js/components/shared/NavBar"

import Home from "./js/pages/Home"
import SignIn from "./js/pages/SignIn"
import SignUp from "./js/pages/SignUp"

import UserRoute from "./js/components/routes/UserRoute"
import GuestRoute from "./js/components/routes/GuestRoute"

import { fetchProjects } from "./js/actions/projects"
import { fetchTasks } from "./js/actions/tasks"
import { fetchComments } from "./js/actions/comments"

class App extends React.Component {
  componentDidMount = () => {
    if (!this.props.isAuthenticated) return
    this.onInit()
  }

  componentDidUpdate = nextProps => {
    if (this.props.isAuthenticated === nextProps.isAuthenticated) return
    if (nextProps.isAuthenticated) return
    this.onInit()
  }

  onInit = () => {
    this.props.fetchProjects()
    this.props.fetchTasks()
    this.props.fetchComments()
  }

  render() {
    const { isAuthenticated } = this.props
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
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchTasks: () => dispatch(fetchTasks()),
  fetchComments: () => dispatch(fetchComments())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
