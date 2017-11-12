import React, { Component } from 'react';
import Edit from './forms/Edit';
import List from '../tasks/List';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditable: false };
  }

  handleEdit = (e) => {
    e.preventDefault()
    this.setState({ isEditable: true })
  }

  handleCancel = () => {
    this.setState({ isEditable: false })
  }

  handleUpdate = (newProjectName) => {
    this.props.onUpdate(this.props.id, newProjectName)
    this.handleCancel()
  }

  handleDelete = () => {
    this.props.onDelete(this.props.id)
  }

  render() {
    const projectItem = <div>
      <span>
        {this.props.name}
      </span>
      <button onClick={this.handleEdit}>Edit</button>
      <button onClick={this.handleDelete}>Delete</button>
    </div>

    return (
      <div>
        {
          this.state.isEditable ?
            <Edit name={this.props.name} onSubmit={this.handleUpdate} onCancel={this.handleCancel}/> :
            projectItem
        }

        <List tasks={this.props.tasks}/>
      </div>
    );
  }
}

export default Item;
