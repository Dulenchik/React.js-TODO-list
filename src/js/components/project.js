import React, { Component } from 'react';
import { Collapse, ListGroup, ListGroupItem, Glyphicon, Row, Col, FormControl, Button } from 'react-bootstrap';
import Task from './task';

class Project extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    const tasks = [
      { id: 1, name: 'Setup Rails' },
      { id: 2, name: 'Setup React' },
      { id: 3, name: 'Enjoy!' }
    ]

    let glyph = null;
    if (this.state.open) {
      glyph = <Glyphicon glyph="triangle-bottom" />;
    } else {
      glyph = <Glyphicon glyph="triangle-right" />;
    }

    return (
      <div>
        <ListGroup>
          <ListGroupItem onClick={() => this.setState({ open: !this.state.open })}>
            <Row>
              <Col xs={9}>
                {glyph}
                {this.props.name}
              </Col>

              <Col xs={3}>
                <Glyphicon glyph="pencil" />
                <Glyphicon glyph="trash" />
              </Col>
            </Row>
          </ListGroupItem>

          <Collapse in={this.state.open}>
            <ListGroup>
              {tasks.map((task) =>
                <Task key={task.id} id={task.id} name={task.name} />
              )}

              <ListGroupItem>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter Task Name ..."
                />
              </ListGroupItem>

              <ListGroupItem>
                <Button bsStyle="success">Add task</Button>
                <Button bsStyle="link">Cancel</Button>
              </ListGroupItem>
            </ListGroup>
          </Collapse>
        </ListGroup>
      </div>
    );
  }
}

export default Project;
