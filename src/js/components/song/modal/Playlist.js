import React from 'react';
import { Row, Col, Button, Modal, FormGroup, ControlLabel, ListGroup, ListGroupItem, Checkbox, ToggleButton } from 'react-bootstrap';
import { filter } from 'lodash';

export class PlaylistModal extends React.Component {
  constructor() {
    super();

    this.state = {
      active: []
    }
  }

  activate(playlist) {
    const { active } = this.state;
    if (active.includes(playlist)) {
      _.pull(active, playlist);
    } else {
      active.push(playlist);
    }

    this.setState({active});
  }

  isActive(playlist) {
    const { active } = this.state;
    return active.includes(playlist)
  }

  close() {
    const { modal } = this.props;
    let { active } = this.state;

    const result = {
      song: modal.song,
      playlists: active
    }

    active = [];
    this.setState({active});

    modal.close(result);
  }

  dismiss() {
    const { modal } = this.props;

    const active = [];
    this.setState({active});

    modal.dismiss();
  }

  render() {
    const { active } = this.state;
    const { playlists } = this.props;
    const disabled = _.filter(active, (value) => value).length == 0 ? true : false;
    const children = playlists.map((playlist) => {
      return(
        <ListGroupItem onClick={this.activate.bind(this, playlist)}>
          <strong>{playlist.title}</strong>
          <p>{playlist.description}</p>
          <i class={"fa fa-check pull-right " + (this.isActive(playlist) ? '' : 'hidden')}></i>
        </ListGroupItem>
      );
    });

    return(
      <Modal {...this.props}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Select Playlist</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <ListGroup>
              {children}
            </ListGroup>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Row>
            <FormGroup>
              <Col componentClass={ControlLabel} md={12} sm={12} xs={12}>
                <Button bsStyle="success" bsSize="medium" disabled={disabled} onClick={this.close.bind(this)} block>Save</Button>
              </Col>

              <Col componentClass={ControlLabel} md={12} sm={12} xs={12}>
                <Button bsStyle="warning" bsSize="medium" onClick={this.dismiss.bind(this)} block>Cancel</Button>
              </Col>

            </FormGroup>
          </Row>
        </Modal.Footer>
      </Modal>
    );
  }
}
