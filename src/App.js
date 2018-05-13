import React, { Component } from "react"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "semantic-ui-react"

import reducer from "./js/reducers/index"
import saga from "./js/saga"
import NavBar from "./js/components/shared/NavBar"

import Home from "./js/pages/Home"
import SignIn from "./js/pages/SignIn"
import SignUp from "./js/pages/SignUp"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

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
