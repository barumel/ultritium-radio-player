import React from 'react';
import { Row, Col } from 'react-bootstrap';

export class PlaylistItemContent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { title, description, thumb='http://cypressequities.propertycapsule.com/property/images/No_Image.png', songs=[] } = this.props.playlist;
    //const { title, description, thumb, songs=[] } = this.props.playlist;
    const count = songs.length;

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
            <p>{description}</p>
            <p>Anzahl Titel: {songs.length}</p>
          </div>
        </Col>
      </Row>
    );
  }
}
