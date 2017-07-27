import React from 'react';
import { Grid, Row, Col, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { PlaylistCreate } from './form/Create';
import { PlaylistGroup } from './Group';

export class PlaylistSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      term: ''
    };
  }

  setTerm(event) {
    const term = event.target.value;
    this.setState({term});
  }

  search() {
    console.log(this.state);
    return this.props.onSearch(this.state.term);
  }

  create(data) {

  }

  render() {
    const { term } = this.state;
    const { result } = this.props;
    const hideCreate = term.length > 0 && result.length == 0 ? '' : 'hidden';
    const hideResult = result.length == 0 ? 'hidden' : '';

    return(
      <Row>
        <h4 class="text-center">Search Playlists</h4>
        <Col md={12} sm={12} xs={12}>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                name="title"
                id="title"
                defaultValue={this.state.term}
                placeholder="Search"
                onChange={this.setTerm.bind(this)}/>
            <InputGroup.Addon onClick={this.search.bind(this)}><i class="fa fa-search"></i></InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>

        <Col md={12} sm={12} xs={12} class={"" + hideResult}>
          <PlaylistGroup title="Result" playlists={this.props.result}></PlaylistGroup>
        </Col>

        <Col md={12} sm={12} xs={12} class={"" + hideCreate}>
          <p class="text-center">Nothing found!</p>
        </Col>
      </Row>
    );
  }
}
