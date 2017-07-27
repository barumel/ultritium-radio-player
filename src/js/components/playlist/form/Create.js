import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, InputGroup, Col, Button, Collapse } from 'react-bootstrap';

export class PlaylistCreate extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      data: {}
    }
  }

  /**
   * Toggle navigation
   *
   * @return void
   */
  toggle() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  /**
   * Set the value for the given target
   *
   * @return void
   */
  setValue(event) {
    console.log('TSCHEINSCH', event.target);
    const { id, value } = event.target;
    const data = this.state.data;
    data[id] = value;
    this.setState({data});
  }

  create() {
    const { data } = this.state;
    this.props.onCreate(data);
    this.reset();
  }

  /**
   * Reset data
   *
   * @return void
   */
  reset() {
    this.setState({data: {}, collapsed: true});
  }

  render() {
    const { data } = this.state;
    const disabled = data.title == '' || !data.title ? true: false;

    return(
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} lg={12} sm={12} xs={12}>
            <Button bsStyle="info" bsSize="large" onClick={this.toggle.bind(this)} block>Add new Playlist</Button>
          </Col>
        </FormGroup>

        <Collapse in={!this.state.collapsed}>
          <div>
            <FormGroup>
              <Col sm={12}>
                <InputGroup>
                  <InputGroup.Addon><i class="fa fa-pencil-square"></i></InputGroup.Addon>
                  <FormControl
                    type="text"
                    name="title"
                    id="title"
                    value={data.title}
                    placeholder="Title"
                    onChange={this.setValue.bind(this)}/>
                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={12}>
                <InputGroup>
                  <InputGroup.Addon><i class="fa fa-pencil-square"></i></InputGroup.Addon>
                  <FormControl
                    type="text"
                    name="description"
                    id="description"
                    value={data.description}
                    placeholder="Description"
                    onChange={this.setValue.bind(this)}/>
                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={12}>
                <InputGroup>
                  <InputGroup.Addon><i class="fa fa-music"></i></InputGroup.Addon>
                  <FormControl
                    componentClass="select"
                    id="genre"
                    name="genre"
                    value={data.genre}
                    placeholder="Genre"
                    onChange={this.setValue.bind(this)}>
                      <option value="select">Genre</option>
                      <option value="hiphop">Hip Hop</option>
                      <option value="rap">Rap</option>
                      <option value="rock">Rock</option>
                      <option value="pop">Pop</option>
                      <option value="electro">Electro</option>
                      <option value="mixed">Mixed</option>
                  </FormControl>
                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} class={"btn-group btn-block "} sm={2}>
                <Button bsStyle="success" bsSize="medium" disabled={disabled} onClick={this.create.bind(this)} block>Save</Button>
              </Col>

              <Col componentClass={ControlLabel} class={"btn-group btn-block "} sm={2}>
                <Button bsStyle="warning" bsSize="medium" block onClick={this.reset.bind(this)}>Cancel</Button>
              </Col>

            </FormGroup>
          </div>
        </Collapse>
      </Form>
    );
  }
}
