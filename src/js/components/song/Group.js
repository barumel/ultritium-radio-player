import React from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { SongItem } from './Item';

export class SongGroup extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { songs, hide } = this.props;
    const hidden = hide ? 'hidden' : '';


    const children = songs.map((song) => {
      return(
        <Col md={4} sm={6} xs={12}>
          <SongItem song={song} modal={this.props.modal}></SongItem>
        </Col>
      );
    });

    return(
      <Row class={"" + hidden}>
        <Col md={12} sm={12} xs={12}>
          <h4 class="text-center">{this.props.title}</h4>
        </Col>
        {children}
      </Row>
    );
  }
}
