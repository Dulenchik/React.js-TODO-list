import React, { Component } from 'react';

class ProjectsList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.projects.map((project) =>
            <li key={project.id}>{project.name}</li>
          )
        }
      </ul>
    )
  };
};

export default ProjectsList;
