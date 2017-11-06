import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from './../components/projects/List';

import { addProject, deleteProject, updateProject } from './../../js/actions/projects';

class Home extends Component {
  handleCreateProject = (newProjectName) => {
    this.props.dispatch(addProject(newProjectName))
  };

  handleDeleteProject = (id) => {
    this.props.dispatch(deleteProject(id))
  }

  handleUpdateProject = (id, newProjectName) => {
    this.props.dispatch(updateProject(id, newProjectName))
  }

  render() {
    return (
      <div>
        <List
          projects={this.props.projects}
          onDelete={this.handleDeleteProject}
          onUpdate={this.handleUpdateProject}

          onCreate={this.handleCreateProject}
        />
      </div>
    );
  };
};

function mapStateToProps(state) {
  const { projects } = state;

  return { projects };
}

export default connect(mapStateToProps)(Home);
