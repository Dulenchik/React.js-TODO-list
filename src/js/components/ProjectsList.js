import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import ExpandableList from "./ExpandableList"
import TasksList from "./TasksList"
import Project from "./Project"
import { default as NewProject } from "./../components/Form"

import {
  addProject,
  deleteProject,
  updateProject,
  fetchProjects
} from "./../actions/projects"

class ProjectsList extends React.Component {
  componentDidMount = () => this.props.fetchProjects()

  render() {
    const projectFormPlaceholder = "Enter Project Name..."
    const { projects } = this.props
    const { onCreate, onUpdate, onDelete, showCommentsFor } = this.props

    return (
      <div>
        {projects.map(project => (
          <ExpandableList
            key={project.id}
            titleElement={Project}
            titleElementProps={{
              ...project,
              onUpdate: onUpdate,
              onDelete: onDelete
            }}
            contentElement={TasksList}
            contentElementProps={{
              projectId: project.id,
              showCommentsFor: showCommentsFor
            }}
          />
        ))}

        <NewProject
          onSubmit={onCreate}
          placeholder={projectFormPlaceholder}
          alwaysShowControls={false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  projects: state.projects
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreate: newName => dispatch(addProject(newName)),
  onUpdate: (id, newName) => dispatch(updateProject(id, newName)),
  onDelete: id => dispatch(deleteProject(id)),
  fetchProjects: () => dispatch(fetchProjects())
})

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
  onCreate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList)
