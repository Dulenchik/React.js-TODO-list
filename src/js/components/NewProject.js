import React, { Component } from 'react';
let input;
class NewProject extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave(input.value);
    this.handleCancel(e);
  };

  handleCancel(e) {
    e.preventDefault();
    input.value = '';
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Enter Project Name...'
          ref={node => { input = node }}
        />

        <button onClick={this.handleSubmit}>Save</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  };
};

export default NewProject;
