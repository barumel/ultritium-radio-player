import React from 'react'
import { Row, Col, Button, FormGroup, FormControl, ControlLabel, InputGroup, Collapse } from 'react-bootstrap';
import { SongGroup } from './Group';

export class SongSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      term: '',
      result: []
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
   * Set the search term
   *
   * @return void
   */
  setTerm(event) {
    const { value } = event.target;
    this.setState({term: value});
  }

  search() {
    const { term } = this.state;

    let result = [{
      title: 'Weck mich auf',
      artist: 'Samy Deluxe'
    }, {
      title: 'Super Power Rangers',
      artist: 'Power Rangers'
    }];

    if (term.length == 0 || term.length > 4) result = [];

    this.setState({result});
  }

  render() {
    const collapsed = this.state.collapsed ? 'collapse' : '';
    const { result } = this.state;
    const { modal } = this.props;
    const hidden = this.state.result.length == 0 ? 'hidden' : '';

    return(
      <div>
        <Row>
          <Col mg={12} sm={12} xs={12}>
            <Button bsStyle="success" bsSize="large" onClick={this.toggle.bind(this)} block>Search</Button>
          </Col>

          <Col mg={12} sm={12} xs={12}>
            <Collapse in={!collapsed}>
              <FormGroup>
                <Col sm={12}>
                  <InputGroup>
                    <FormControl
                      type="text"
                      name="term"
                      id="term"
                      value={this.state.term}
                      placeholder="Search"
                      onChange={this.setTerm.bind(this)}/>
                  <InputGroup.Addon onClick={this.search.bind(this)}><i class="fa fa-search"></i></InputGroup.Addon>
                  </InputGroup>
                </Col>
              </FormGroup>
            </Collapse>
          </Col>
        </Row>

        <SongGroup title="Result" songs={result} modal={modal}></SongGroup>
      </div>
    );
  }
}
