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

  render() {
    const item = <div>
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
