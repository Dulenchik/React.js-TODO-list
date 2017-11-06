import React, { Component } from 'react';

let input;

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = { isEdit: true };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(input.value);
    this.handleCancel(e);
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.props.onCancel();
  }

  handleChange = (e) => {
    this.setState({ isEdit: !!input.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          defaultValue={this.props.name}
          placeholder='Enter Project Name...'
          ref={node => { input = node }}
        />

        { this.state.isEdit && <button type='submit'>Save</button> }
        { this.state.isEdit && <button onClick={this.handleCancel}>Cancel</button> }
      </form>
    );
  };
};

export default Edit;
