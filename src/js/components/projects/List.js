import React, { Component } from 'react';
import Item from './Item';
import New from './forms/New';

class List extends Component {
  render() {
    return (
      <ul>
        { this.props.projects.map((project) =>
          <li key={project.id}>
            <Item {...project} onUpdate={this.props.onUpdate} onDelete={this.props.onDelete} />
          </li>
        ) }

        <li><New onSubmit={this.props.onCreate}/></li>
      </ul>
    )
  };
};

export default List;
