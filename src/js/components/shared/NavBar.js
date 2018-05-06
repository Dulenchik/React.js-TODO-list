import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/sign_in">SignIn</Link>
        </li>

        <li>
          <Link to="/sign_up">SignUp</Link>
        </li>
      </ul>
    )
  }
}

export default NavBar
