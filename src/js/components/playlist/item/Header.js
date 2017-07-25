import React from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem, Collapse, Well } from 'react-bootstrap';
import { Link } from 'react-router';

export class PlaylistItemHeader extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Row>
        <Col md={4} sm={4} xs={4} class="text-center">
          <Button bsStyle="success" block><i class="fa fa-play"></i></Button>
        </Col>

        <Col md={4} sm={4} xs={4} class="text-center">
          <Button bsStyle="success" block><i class="fa fa-star"></i></Button>
        </Col>

        <Col md={4} sm={4} xs={4} class="text-center">
          <Button bsStyle="success" block><i class="fa fa-cog"></i></Button>
        </Col>
      </Row>
    );
  }
}
