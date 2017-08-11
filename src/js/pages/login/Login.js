import React from 'react'
import isEmpty from 'lodash';
import { Grid, Row, Col, Form, FormGroup, InputGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import AuthActions from '../../data/actions/auth/Auth';

@connect((store) => {
  return store;
})
export default class LoginPage extends React.Component  {
  constructor() {
    super();

    this.state = {
      data: {
        username: '',
        password: ''
      },
      failed: false
    };
  }

  async login() {
    console.log(this.state);
    await this.props.dispatch(AuthActions.execute('POST', this.state.data));
    const { auth } = this.props;
    const result = auth.post;

    let failed = true;
    if (_.isEmpty(result)) {
      return this.setState({failed});
    }

    failed = false;
    const { session } = window;
    this.setState({failed});
    session.setUser(result);

    return this.state
  }

  setValue(event) {
   const { id, value } = event.target;
   const data = this.state.data;
   data[id] = value;
   this.setState({data});
  }

  render() {
    const { data } = this.state;
    const hidden = this.state.failed ? '' : 'hidden';

    return(
      <Grid bsClass="container-fluid">
        <Row>
          <h3 class="text-center">Login</h3>

          <Col lg={3} md={2} sm={1} xs={0}></Col>

          <Col>
            <Form horizontal>
              <FormGroup>
                <Col sm={12}>
                  <InputGroup>
                    <InputGroup.Addon><i class="fa fa-user"></i></InputGroup.Addon>
                    <FormControl
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      value={data.username}
                      onChange={this.setValue.bind(this)}/>
                  </InputGroup>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={12}>
                  <InputGroup>
                    <InputGroup.Addon><i class="fa fa-key"></i></InputGroup.Addon>
                    <FormControl
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={data.password}
                      onChange={this.setValue.bind(this)}/>
                  </InputGroup>
                </Col>
              </FormGroup>


              <FormGroup>
                <Col componentClass={ControlLabel} lg={12} sm={12} xs={12}>
                  <Button bsStyle="success" bsSize="large" onClick={this.login.bind(this)} block>Login</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>

          <Col lg={3} sm={1} xs={0}></Col>
        </Row>

        <Row class={"" + hidden}>
          <Col lg={12} md={12} sm={12} xs={12}>
            <p class="text-center error">Login Failed!</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
