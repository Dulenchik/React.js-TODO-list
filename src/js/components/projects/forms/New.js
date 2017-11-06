import React, { Component } from 'react';

let input;

class New extends Component {
  constructor(props) {
    super(props);

    this.state = { isEdit: false };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(input.value);
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
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Enter Project Name...'
          ref={node => { input = node }}
          onChange={this.handleChange}
        />

        { this.state.isEdit && <button type='submit'>Save</button> }
        { this.state.isEdit && <button onClick={this.handleCancel}>Cancel</button> }
      </form>
    );
  };
};

export default New;
