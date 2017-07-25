import React from 'react';
import { Grid, Row, Col, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { PlaylistCreate } from './form/Create';
import { PlaylistGroup } from './Group';

export class PlaylistSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      term: '',
      result: []
    };
  }

  filter(event) {
    const { value } = event.target;

    //console.log(value);

    let result = [{
      title: 'Found one',
      description: 'Yup',
      thumb: 'https://i.ytimg.com/vi/v9oxyswY8fs/maxresdefault.jpg',
      count: 7
    }];

    if (value.length > 4) result = [];
    if (value.length == 0) result = [];
    this.setState({term: value});
    this.setState({result});
  }

  render() {
    const { term, result } = this.state;
    const hideCreate = term.length > 0 && result.length == 0 ? '' : 'hidden';
    const hideResult = result.length == 0 ? 'hidden' : '';

    return(
      <Row>
        <h4 class="text-center">Search Playlists</h4>
        <Col md={12} sm={12} xs={12}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon><i class="fa fa-search"></i></InputGroup.Addon>
              <FormControl
                type="text"
                name="title"
                id="title"
                defaultValue={this.state.term}
                placeholder="Search"
                onChange={this.filter.bind(this)}/>
            </InputGroup>
          </FormGroup>
        </Col>

        <Col md={12} sm={12} xs={12} class={"" + hideResult}>
          <PlaylistGroup title="Result" playlists={this.state.result}></PlaylistGroup>
        </Col>

        <Col md={12} sm={12} xs={12} class={"" + hideCreate}>
          <p class="text-center">Nothing found!</p>
        </Col>

        <Col md={12} sm={12} xs={12} class={"" + hideCreate}>
          <PlaylistCreate></PlaylistCreate>
        </Col>
      </Row>
    );
  }
}
