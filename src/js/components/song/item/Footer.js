import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { PlaylistModal } from '../modal/Playlist';

export class SongItemFooter extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false
    }
  }

  add(song) {
    const show = true;
    this.setState({show});
  }

  render() {
    return(
      <Row>
        <PlaylistModal show={this.state.show}></PlaylistModal>
        <Col mg={12} sm={12} xs={12}>
          <Button bsStyle="info" block class="text-right" onClick={this.add.bind(this)}>
            <Col md={2} sm={2} xs={2}>
              <i class="fa fa-plus" style={{fontWeight: 'bold', fontSize: '1.5em'}}></i>
            </Col>

            <Col md={10} sm={10} xs={10}>
              <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>Add To Playlist</span>
            </Col>
          </Button>
        </Col>
      </Row>
    );
  }
}
