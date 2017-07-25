import React from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem, Collapse, Well } from 'react-bootstrap';
import { Link } from 'react-router';

export class PlaylistItemFooter extends React.Component {
  constructor(props) {
    super(props);

    const tracks = props.tracks || [];

    this.state = {
      collapsed: true,
      title: 'Show Tracks',
      children: tracks.map((track) => {
        return (<ListGroupItem><strong>{track.title}</strong></ListGroupItem>);
      })
    }
  }

  toggle() {
    const collapsed = !this.state.collapsed;
    const title = collapsed ? 'Show Tracks': 'Hide Tracks';

    this.setState({collapsed});
    this.setState({title});
  }

  render() {
    const { children } = this.state;
    const playable = children.length > 0;
    const hidden = children.length <= 0 ? 'hidden' : '';

    return(
      <Row>

        <Col md={4} sm={4} xs={4} class="text-center">
          <Button bsStyle="info" disabled={!playable} block><i class="fa fa-play"></i></Button>
        </Col>

        <Col md={4} sm={4} xs={4} class="text-center">
          <Button bsStyle="info" block><i class="fa fa-star"></i></Button>
        </Col>

        <Col md={4} sm={4} xs={4} class="text-center">
          <Button bsStyle="info" block><i class="fa fa-cog"></i></Button>
        </Col>

        <Col md={12} sm={12} xs={12} style={{height: '20px'}}></Col>

        <Col md={12} sm={12} xs={12}>
          <Button block onClick={this.toggle.bind(this)}>{this.state.title}</Button>
        </Col>

        <Col md={12} sm={12} xs={12}>
          <Collapse in={!this.state.collapsed}>
            <div>
              <ListGroup class={"" + hidden}>
                {this.state.children}
              </ListGroup>

              <Well>
                <p class="text-center">There are currently no tracks in this playlist!</p>
                <Button bsStyle="success" block>
                  <Link to="songs">Add Some Tracks!</Link>
                </Button>
              </Well>
            </div>
          </Collapse>
        </Col>

      </Row>
    );

    return(
      <div>
      <Row>
        <Col md={4} sm={4} xs={4} class="text-center">
          <span><i class="fa fa-play"></i></span>
        </Col>

        <Col md={4} sm={4} xs={4} class="text-center">
          <span><i class="fa fa-star"></i></span>
        </Col>

        <Col md={4} sm={4} xs={4} class="text-center">
          <span><i class="fa fa-cog"></i></span>
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12} xs={12}>
          <Button block onClick={this.toggle.bind(this)}>{this.state.title}</Button>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Collapse in={!this.state.collapsed}>
            <div>
              <ListGroup class={"" + hidden}>
                {this.state.children}
              </ListGroup>

              <Well>
                <p class="text-center">There are currently no tracks in this playlist!</p>
                <Button bsStyle="success" block>
                  <Link to="songs">Add Some Tracks!</Link>
                </Button>
              </Well>
            </div>
          </Collapse>
          </Col>
        </Row>
      </div>
    );
  }
}

/**
  Spacer:
 <Col md={12} sm={12} xs={12} style={{height: '30px'}}></Col>
 */
