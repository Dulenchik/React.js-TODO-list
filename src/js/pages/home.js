import React, { Component } from 'react';
import { connect } from 'react-redux';
import { groupBy, each, sortBy } from 'lodash';

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
  const { projects, tasks } = state;

  let groupedTasks = groupBy(tasks, 'projectId')
  each(projects, (project) =>
    project.tasks = sortBy(groupedTasks[project.id] || [], 'position')
  )

  return { projects };
}

export default connect(mapStateToProps)(Home);
