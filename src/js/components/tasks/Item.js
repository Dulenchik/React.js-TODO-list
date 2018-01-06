import React, { Component } from 'react';
import Edit from './forms/Edit';

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

  handleUpdate = (newTaskName) => {
    this.props.onUpdateTask(this.props.id, newTaskName)
    this.handleCancel()
  }

  handleDelete = () => {
    this.props.onDeleteTask(this.props.id)
  }

  render() {
    const taskItem = <div>
      <span>{this.props.name}</span>

      <button onClick={this.handleEdit}>Edit</button>
      <button onClick={this.handleDelete}>Delete</button>
    </div>

    return (
      <div>
        {
          this.state.isEditable ?
            <Edit name={this.props.name} onSubmit={this.handleUpdate} onCancel={this.handleCancel}/> :
            taskItem
        }
      </div>
    );
  }
}

export default Item;
