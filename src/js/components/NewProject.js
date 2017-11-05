import React, { Component } from 'react';
let input;
class NewProject extends Component {
  constructor(props) {
    super(props);

    this.state = { isEdit: false };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSave(input.value);
    this.handleCancel(e);
  };

  handleCancel = (e) => {
    e.preventDefault();
    input.value = '';
    this.handleChange(e)
  }

  handleChange = (e) => {
    this.setState({ isEdit: !!input.value });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Enter Project Name...'
          ref={node => { input = node }}
          onChange={this.handleChange}
        />

        { this.state.isEdit && <button onClick={this.handleSubmit}>Save</button> }
        { this.state.isEdit && <button onClick={this.handleCancel}>Cancel</button> }
      </div>
    );
  };
};

export default NewProject;
