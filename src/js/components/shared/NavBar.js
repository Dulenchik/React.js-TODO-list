import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/sign_in'>SignIn</Link>
          <Link to='/sign_up'>SignUp</Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;
