import React from 'react'
import { PlaylistItem } from '../../components/playlist/Item';
import { SongGroup } from '../../components/song/Group'
import { SongSearch } from '../../components/song/Search';

export default class SongOverview extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [{
        title: 'Weck mich auf',
        artist: 'Samy Deluxe',
        thumb: 'http://rap.de/wp-content/uploads/2014/01/samy-deluxe.jpg'
      }, {
        title: 'Weck mich auf',
        artist: 'Samy Deluxe',
        thumb: 'http://rap.de/wp-content/uploads/2014/01/samy-deluxe.jpg'
      }]
    }
  }

  render() {
    return(
      <div class="row">
        <h3 class="text-center">Songs</h3>
        <p class="text-center">Find songs and add them to your favorite playlists</p>
        <SongSearch></SongSearch>
        <SongGroup title="Recently Added" songs={this.state.songs}></SongGroup>
        <SongGroup title="Most Popular" songs={this.state.songs}></SongGroup>
      </div>
    )
  }
}
