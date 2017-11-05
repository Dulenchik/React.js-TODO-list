import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectsList from './../../js/components/ProjectsList';
import NewProject from './../../js/components/NewProject';

import { addProject, deleteProject, updateProject } from './../../js/actions/projects';

class Home extends Component {
  handleSaveProject = (newProjectName) => {
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
        <ProjectsList
          projects={this.props.projects}
          onDelete={this.handleDeleteProject}
          onUpdate={this.handleUpdateProject}
        />
        <NewProject onSave={this.handleSaveProject}/>
      </div>
    );
  };
};

function mapStateToProps(state) {
  const { projects } = state;

  return { projects };
}

export default connect(mapStateToProps)(Home);
