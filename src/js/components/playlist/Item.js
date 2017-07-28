import React from 'react';
import { Panel } from 'react-bootstrap';
import { PlaylistItemHeader } from './item/Header';
import { PlaylistItemContent } from './item/Content';
import { PlaylistItemFooter } from './item/Footer';

export class PlaylistItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { playlist } = this.props;

    const footer = (
      <PlaylistItemFooter playlist={playlist}></PlaylistItemFooter>
    );

    const header = (
      <PlaylistItemHeader playlist={playlist}></PlaylistItemHeader>
    );

    return(
      <Panel footer={footer} class="playlist-item">
        <PlaylistItemContent playlist={playlist}></PlaylistItemContent>
      </Panel>
    );
  }
}
