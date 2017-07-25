import React from 'react';
import { Row, Col } from 'react-bootstrap';

export class SongItemContent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { artist, title, duration, thumb } = this.props.song;

    return(
      <Row class="playlist-item">
        <Col md={4} sm={4} xs={5}>
          <div class="playlist-item-thumb">
            <img src={thumb}></img>
          </div>
        </Col>

        <Col md={8} sm={8} xs={7}>
          <div class="text-right">
            <div class="content-big">{title}</div>
            <p>{artist}</p>
          </div>
        </Col>
      </Row>
    );
  }
}
