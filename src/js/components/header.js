import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import logoIcon from './../../../src/images/logo_icon.svg';
import logoText from './../../../src/images/logo_text.svg';

class Header extends Component {
  render() {
    return (
      <div className="row  text-center bg-primary">
        <div className="col-xs-2 ">
          <img alt="RubyGarage" src={logoIcon} />
          <img alt="RubyGarage" src={logoText} />
        </div>

        <div className="col-xs-8">
          <h1>Simple TODO List</h1>
        </div>

        <div className="col-xs-2 ">
          <Glyphicon glyph="log-out" />
        </div>
      </div>
    );
  }
}

export default Header;
