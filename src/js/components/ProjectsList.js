import React, { Component } from 'react';

class ProjectsList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.projects.map((project) =>
            <li key={project.id}>
              <span>{project.name}</span>

              <button>Edit</button>
              <button onClick={() => this.props.onDelete(project.id)}>Delete</button>
            </li>
          )
        }
      </ul>
    )
  };
};

export default ProjectsList;
