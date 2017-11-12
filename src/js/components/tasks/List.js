import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  render() {
    return (
      <ul>
        { this.props.tasks.map((task) =>
          <li key={task.id}>
            <Item {...task} />
          </li>
        ) }
      </ul>
    );
  }
}

export default List;
