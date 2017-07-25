import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, InputGroup, Col, Button } from 'react-bootstrap';

export class SettingsFormProfile extends React.Component {
  constructor() {
    super();
  }

  render() {
    const hidden = this.props.locked ? 'hidden' : '';

    return(
      <Form horizontal>
        { /* Username */ }
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-users"></i></InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="Username"
                disabled={this.props.locked}/>
            </InputGroup>
          </Col>
        </FormGroup>

        { /* First name */ }
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            First name
          </Col>
          <Col sm={10}>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-user"></i></InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="First name"
                disabled={this.props.locked}/>
            </InputGroup>
          </Col>
        </FormGroup>

        { /* Name */ }
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-user"></i></InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="Name"
                disabled={this.props.locked}/>
            </InputGroup>
          </Col>
        </FormGroup>

        { /* Name */ }
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-envelope"></i></InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="Email"
                disabled={this.props.locked}/>
            </InputGroup>
          </Col>
        </FormGroup>

        { /* Password */ }
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-key"></i></InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="Email"
                disabled={this.props.locked}/>
            </InputGroup>
          </Col>
        </FormGroup>

        { /* Password confirm */ }
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Confirm Password
          </Col>
          <Col sm={10}>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-key"></i></InputGroup.Addon>
              <FormControl
                type="text"
                placeholder="Confirm Email"
                disabled={this.props.locked}/>
            </InputGroup>
          </Col>
        </FormGroup>

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
