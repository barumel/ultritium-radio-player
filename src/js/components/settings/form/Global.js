import React from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';

export class SettingsFormGlobal extends React.Component {
  constructor() {
    super();
  }

  render() {
    const hidden = this.props.locked ? 'hidden' : '';

    return(
      <Form horizontal>

        <FormGroup>
          <Col componentClass={ControlLabel} class={"btn-group btn-block " + hidden} sm={2}>
            <Button bsStyle="success" bsSize="medium" block>Save</Button>
          </Col>

          <Col componentClass={ControlLabel} class={"btn-group btn-block " + hidden} sm={2}>
            <Button bsStyle="warning" bsSize="medium" block>Cancel</Button>
          </Col>

        </FormGroup>

      </Form>
    );
  }
}
