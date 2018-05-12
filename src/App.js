import React, { Component } from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "semantic-ui-react"

import reducer from "./js/reducers/index"
import NavBar from "./js/components/shared/NavBar"

import Home from "./js/pages/Home"
import SignIn from "./js/pages/SignIn"
import SignUp from "./js/pages/SignUp"

let store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />

            <Container text>
              <Route exact path="/" component={Home} />
              <Route exact path="/sign_in" component={SignIn} />
              <Route exact path="/sign_up" component={SignUp} />
            </Container>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
