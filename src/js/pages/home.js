import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter } from 'lodash';

import { default as Project } from './../components/projects/Item';
import { default as NewProject } from './../components/projects/forms/New';

import { default as Task } from './../components/tasks/Item';
import { default as NewTask } from './../components/tasks/forms/New';

import { addProject, deleteProject, updateProject } from './../../js/actions/projects';
import { addTask, deleteTask, updateTask } from './../../js/actions/tasks';

class Home extends Component {
  handleCreateProject = (newProjectName) => {
    this.props.dispatch(addProject(newProjectName))
  }

  handleUpdateProject = (id, newProjectName) => {
    this.props.dispatch(updateProject(id, newProjectName))
  }

  handleDeleteProject = (id) => {
    this.props.dispatch(deleteProject(id))
  }

  handleCreateTask = (newTaskName, projectId) => {
    this.props.dispatch(addTask(newTaskName, projectId))
  }

  handleUpdateTask = (id, newTaskName) => {
    this.props.dispatch(updateTask(id, newTaskName))
  }

  handleDeleteTask = (id) => {
    this.props.dispatch(deleteTask(id))
  }

  render() {
    return (
      <div>
        <ul>
        { this.props.projects.map(function (project) {
          let tasks = filter(this.props.tasks, (task) =>
            project.taskIds.indexOf(task.id) >= 0
          );

          return <li key={project.id}>
            <Project {...project}
                     onUpdate={this.handleUpdateProject}
                     onDelete={this.handleDeleteProject}>
              <ul>
                { tasks.map((task) =>
                  <li key={task.id}>
                    <Task {...task}
                          onUpdateTask={this.handleUpdateTask}
                          onDeleteTask={this.handleDeleteTask}/>
                  </li>
                ) }

                <li><NewTask projectId={project.id} onSubmit={this.handleCreateTask}/></li>
              </ul>
            </Project>
          </li>
        }.bind(this)) }

        <li><NewProject onSubmit={this.handleCreateProject}/></li>
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state, ownProps) {
  return state;
}

export default connect(mapStateToProps)(Home);
