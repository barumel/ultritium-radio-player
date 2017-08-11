import React from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem, Collapse, Well } from 'react-bootstrap';
import { Link } from 'react-router';

export class PlaylistItemFooter extends React.Component {
  constructor(props) {
    super(props);

    const tracks = props.tracks || [];

    this.state = {
      collapsed: true,
      title: 'Show Tracks'
    }
  }

  toggle() {
    const collapsed = !this.state.collapsed;
    const title = collapsed ? 'Show Tracks': 'Hide Tracks';

    this.setState({collapsed});
    this.setState({title});
  }

  render() {
    const { songs=[] } = this.props.playlist;
    const { addFavorite, isFavorite } = this.props;
    const children = songs.map((song) => {
      return <ListGroupItem><strong>{song.title} - {song.artist}</strong></ListGroupItem>
    });
console.log(this.props);
    const playable = children.length > 0;
    const hideTracks = children.length <= 0 ? 'hidden' : '';
    const hideEmpty = children.length > 0 ? 'hidden' : '';

    return(
      <Row>

        <Col md={4} sm={4} xs={4} class="text-center">
          <Button bsStyle="info" disabled={!playable} block><i class="fa fa-play"></i></Button>
        </Col>

        <Col md={4} sm={4} xs={4} class="text-center">
          <Button bsStyle="info" block disabled={isFavorite} ><i class="fa fa-star" onClick={addFavorite}></i></Button>
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
              <ListGroup class={"" + hideTracks}>
                {children}
              </ListGroup>

              <Well class={"" + hideEmpty}>
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
  }
}

/**
  Spacer:
 <Col md={12} sm={12} xs={12} style={{height: '30px'}}></Col>
 */
