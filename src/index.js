import "semantic-ui-css/semantic.min.css"
import "react-datetime/css/react-datetime.css"
import "./css/task.css"
import "./css/project.css"
import "./css/comment.css"
import "./css/navbar.css"

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { BrowserRouter as Router, Route } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import reducer from "./js/reducers/index"
import api from "./js/utils/api"
import { userLoggedIn, userLogout } from "./js/actions/auth"

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
)

api.setup(() => store.dispatch(userLogout()))

if (localStorage.todoListJWT) {
  store.dispatch(userLoggedIn())
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
)
