import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PlaylistItem } from './Item';

export class PlaylistGroup extends React.Component {
  constructor(props) {
    super(props);

    const playlists = props.playlists || [];

    this.state = {
      children: playlists.map((playlist) => {
        return(
          <Col md={3} sm={3} xs={12}>
            <PlaylistItem
              title={playlist.title}
              count={playlist.count}
              description={playlist.description}
              thumb={playlist.thumb}>
            </PlaylistItem>
          </Col>
        );
      })
    }
  }

  render() {
    const { playlists } = this.props;
    const children = playlists.map((playlist) => {
      return(
        <Col md={3} sm={3} xs={12}>
          <PlaylistItem
            title={playlist.title}
            count={playlist.count}
            description={playlist.description}
            thumb={playlist.thumb}>
          </PlaylistItem>
        </Col>
      );
    });

    return(
      <Row>
        <Col md={12} sm={12} xs={12}>
          <h4 class="text-center">{this.props.title}</h4>
        </Col>
        {children}
      </Row>
    );
  }
}
