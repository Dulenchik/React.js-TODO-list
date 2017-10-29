import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './js/pages/home';
import SignIn from './js/pages/sign_in';
import SignUp from './js/pages/sign_up';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
              <Link to='/sign_in'>SignIn</Link>
              <Link to='/sign_up'>SignUp</Link>
            </li>
          </ul>

          <Route exact path='/' component={Home}/>
          <Route exact path='/sign_in' component={SignIn}/>
          <Route exact path='/sign_up' component={SignUp}/>
        </div>
      </Router>
    );
  }
}

export default App;
