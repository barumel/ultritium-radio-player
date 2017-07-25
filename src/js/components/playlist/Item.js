import React from 'react';
import { Panel } from 'react-bootstrap';
import { PlaylistItemContent } from './item/Content';
import { PlaylistItemFooter } from './item/Footer';

export class PlaylistItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const footer = (
      <PlaylistItemFooter></PlaylistItemFooter>
    );

    return(
      <Panel footer={footer} class="playlist-item">
        <PlaylistItemContent
          title={this.props.title}
          description={this.props.description}
          count={this.props.count}
          thumb={this.props.thumb}>
        </PlaylistItemContent>
      </Panel>
    );
  }
}
