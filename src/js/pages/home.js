import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filter } from 'lodash';

import { default as Project } from './../components/shared/Item';
import { default as NewProject } from './../components/shared/Form';

import { default as Task } from './../components/shared/Item';
import { default as NewTask } from './../components/shared/Form';

import { addProject, deleteProject, updateProject } from './../../js/actions/projects';
import { addTask, deleteTask, updateTask, toggleTaskCompletion } from './../../js/actions/tasks';

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

  handleCreateTask = (projectId) => {
    return (newTaskName) => {
      this.props.dispatch(addTask(newTaskName, projectId))
    };
  }

  handleUpdateTask = (id, newTaskName) => {
    this.props.dispatch(updateTask(id, newTaskName))
  }

  handleDeleteTask = (id) => {
    this.props.dispatch(deleteTask(id))
  }

  handleToggleTaskCompletion = (id) => {
    this.props.dispatch(toggleTaskCompletion(id))
  }

  render() {
    const taskFormPlaceholder = 'Enter Tasks Name...';
    const projectFormPlaceholder = 'Enter Project Name...';
    const listOfProjects = this.props.projects.map((project) => {
      return <li key={project.id}>
        <Project {...project}
                 placeholder={projectFormPlaceholder}
                 onUpdate={this.handleUpdateProject}
                 onDelete={this.handleDeleteProject}>
          <ul>
            { project.tasks.map((task) =>
              <li key={task.id}>
                <Task {...task}
                      placeholder={taskFormPlaceholder}
                      onUpdate={this.handleUpdateTask}
                      onDelete={this.handleDeleteTask}
                      onCompletionToggle={this.handleToggleTaskCompletion}/>
              </li>
            ) }

            <li>
              <NewTask onSubmit={this.handleCreateTask(project.id)}
                       placeholder={taskFormPlaceholder}
                       alwaysShowControls={true}/>
            </li>
          </ul>
        </Project>
      </li>
    });

    return (
      <div>
        <ul>
          { listOfProjects }
          <li>
            <NewProject onSubmit={this.handleCreateProject}
                        placeholder={projectFormPlaceholder}
                        alwaysShowControls={true}/>
          </li>
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state, ownProps) {
  const newState = {};
  newState.projects = state.projects.map((project) => {
    const tasks = filter(state.tasks, (task) =>
      project.taskIds.indexOf(task.id) >= 0
    );
    return {...project, tasks: tasks};
  });
  return newState;
}

export default connect(mapStateToProps)(Home);
