import React, { Component } from 'react';

let input;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { isEdit: !props.alwaysShowControls };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(input.value);
    this.handleCancel(e);
  };

  handleCancel = (e) => {
    e.preventDefault();
    input.value = '';
    if (this.props.onCancel) { this.props.onCancel() };
    this.handleChange(e)
  }

  handleChange = (e) => {
    if (this.props.alwaysShowControls) { this.setState({ isEdit: !!input.value }) };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder={this.props.placeholder}
          ref={node => { input = node }}
          defaultValue={this.props.name}
          onChange={this.handleChange}
        />

        { this.state.isEdit && <button type='submit'>Save</button> }
        { this.state.isEdit && <button onClick={this.handleCancel}>Cancel</button> }
      </form>
    );
  };
};

export default Form;
