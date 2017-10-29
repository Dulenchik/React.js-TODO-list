import React, { Component } from 'react';
import { ListGroupItem, Glyphicon, Row, Col } from 'react-bootstrap';

class Task extends Component {
  render() {
    return (
      <ListGroupItem>
        <Row>
          <Col xs={9}>
            <Glyphicon glyph="arrow-up" />
            <Glyphicon glyph="arrow-down" />

            <Glyphicon glyph="unchecked" />
            <Glyphicon glyph="check" />

            {this.props.name}
          </Col>

          <Col xs={3}>
            <Glyphicon glyph="comment" />
            <Glyphicon glyph="time" />
            <Glyphicon glyph="pencil" />
            <Glyphicon glyph="trash" />
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}

export default Task;
