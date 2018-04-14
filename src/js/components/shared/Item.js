import React, { Component } from 'react';
import { default as Edit } from '../shared/Form';

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

  handleUpdate = (newItemName) => {
    this.props.onUpdate(this.props.id, newItemName)
    this.handleCancel()
  }

  handleDelete = () => {
    this.props.onDelete(this.props.id)
  }

  handleToggleCompletion = () => {
    this.props.onCompletionToggle(this.props.id)
  }

  render() {
    const checkboxId = `${this.props.id}`;
    const textDecoration = this.props.isDone ? 'line-through' : 'none';
    const item = <div>
      { !!this.props.onCompletionToggle && <input type='checkbox'
                                                  id={checkboxId}
                                                  defaultChecked={this.props.isDone}
                                                  onChange={this.handleToggleCompletion} /> }
      <label htmlFor={checkboxId}>
        <span style={{textDecoration: textDecoration}}>
          {this.props.name}
        </span>
      </label>
      <button onClick={this.handleEdit}>Edit</button>
      <button onClick={this.handleDelete}>Delete</button>
    </div>

    return (
      <div>
        {
          this.state.isEditable ?
            <Edit name={this.props.name}
                  placeholder={this.props.placeholder}
                  onSubmit={this.handleUpdate}
                  onCancel={this.handleCancel}
                  alwaysShowControls={false}/> :
            item
        }

        { this.props.children }
      </div>
    );
  }
}

export default Item;
