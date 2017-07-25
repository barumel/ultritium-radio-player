import React from 'react';
import { Row, Col } from 'react-bootstrap';

export class PlaylistItemContent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Row class="playlist-item">
        <Col md={4} sm={4} xs={5}>
          <div class="playlist-item-thumb">
            <img src={this.props.thumb}></img>
          </div>
        </Col>

        <Col md={8} sm={8} xs={7}>
          <div class="text-right">
            <div class="content-big">{this.props.title}</div>
            <p>{this.props.description}</p>
            <p>Anzahl Titel: {this.props.count}</p>
          </div>
        </Col>
      </Row>
    );
  }
}
