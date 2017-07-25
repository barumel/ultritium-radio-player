import React from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { PlaylistItem } from './Item';

export class PlaylistGroup extends React.Component {
  constructor(props) {
    super(props);

    const playlists = props.playlists || [];

    this.state = {};
  }

  render() {
    const { playlists } = this.props;
    const children = playlists.map((playlist) => {
      return(
        <Col md={4} sm={6} xs={12}>
          <PlaylistItem
            title={playlist.title}
            count={playlist.count}
            description={playlist.description}
            thumb={playlist.thumb}>
          </PlaylistItem>
        </Col>
      );
    });

    return(
      <Row>
        <Col md={12} sm={12} xs={12}>
          <h4 class="text-center">{this.props.title}</h4>
        </Col>
        <Modal show={false} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        {children}
      </Row>
    );
  }
}
