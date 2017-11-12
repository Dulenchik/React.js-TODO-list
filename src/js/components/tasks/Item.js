import React, { Component } from 'react';

class Item extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <span>{this.props.name}</span>
    );
  }
}

export default Item;
