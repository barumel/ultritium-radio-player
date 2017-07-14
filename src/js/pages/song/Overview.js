import React from 'react'
import { PlaylistItem } from '../../components/playlist/Item';
import { SongList } from '../../components/song/List';
import { SongSearch } from '../../components/song/Search';

export default class SongOverview extends React.Component {
  constructor() {
    super();

    this.state = {
      children: [
        <SongList key="1" title="Recently added"></SongList>,
        <SongList key="2" title="Most Popular"></SongList>
      ]
    }
  }

  render() {
    return(
      <div class="row">
        <h3>Songs</h3>
        <p>Find songs and add them to your favorite playlists</p>
        <SongSearch></SongSearch>
        <div class="panel-group" id="accordion">
          {this.state.children}
        </div>
      </div>
    )
  }
}
