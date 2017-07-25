import React from 'react';
import { Row, Col, Button, Modal, FormGroup, ControlLabel, ListGroup, ListGroupItem, Checkbox, ToggleButton } from 'react-bootstrap';
import { filter } from 'lodash';

export class PlaylistModal extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      active: {}
    }
  }

  activate(id) {
    console.log('activate', id);
    const { active } = this.state;
    active[id] = active[id] || false;
    active[id] = !active[id];
    this.setState({active});
  }

  render() {
    const { active } = this.state;
    const disabled = _.filter(active, (value) => value).length == 0 ? true : false;
    console.log(disabled);
    //const disabled = active.filter((value, key) => value ).length;

    return(
      <Modal {...this.props}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Select Playlist</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <ListGroup>
              <ListGroupItem active={active[1]} onClick={this.activate.bind(this, 1)}>
                Dings
              </ListGroupItem>

              <ListGroupItem active={active[2]} onClick={this.activate.bind(this, 2)}>
                Dings
              </ListGroupItem>
            </ListGroup>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Row>
            <FormGroup>
              <Col componentClass={ControlLabel} md={12} sm={12} xs={12}>
                <Button bsStyle="success" bsSize="medium" disabled={disabled} block>Save</Button>
              </Col>

              <Col componentClass={ControlLabel} md={12} sm={12} xs={12}>
                <Button bsStyle="warning" bsSize="medium" block>Cancel</Button>
              </Col>

            </FormGroup>
          </Row>
        </Modal.Footer>
      </Modal>
    );
  }
}
