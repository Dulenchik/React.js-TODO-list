import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectsList from './../../js/components/ProjectsList';
import NewProject from './../../js/components/NewProject';

import { addProject } from './../../js/actions/projects';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSaveProject = this.handleSaveProject.bind(this);
  };

  handleSaveProject(newProjectName) {
    this.props.dispatch(addProject(newProjectName))
  };

  render() {
    return (
      <div>
        <ProjectsList projects={this.props.projects} />
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
