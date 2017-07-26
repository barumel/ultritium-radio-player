import React from 'react'
import { Row, Col} from 'react-bootstrap';
import { SongGroup } from '../../components/song/Group'
import { SongSearch } from '../../components/song/Search';
import { PlaylistModal } from '../../components/song/modal/Playlist';

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
      }],
      playlists: [{
        _id: '1',
        title: 'Samy Deluxe',
        description: 'Greatest Hits'
      }, {
        _id: 2,
        title: 'Power Rangers',
        description: 'Greatest Hits'
      }],
      modal: {
        active: false,
        song: false,
        open: this.openPlaylistSelect.bind(this),
        close: this.closePlaylistSelect.bind(this),
        dismiss: this.dismissPlaylistSelect.bind(this)
      }
    }
  }

  openPlaylistSelect(song) {
    const { modal } = this.state;
    modal.active = true;
    modal.song = song;

    this.setState({modal});
  }

  closePlaylistSelect(result) {
    const { modal } = this.state;
    modal.active = false;
    modal.song = false;

    this.setState({modal});

    console.log(result);
  }

  dismissPlaylistSelect(result) {
    const { modal } = this.state;
    modal.active = false;
    modal.song = false;

    this.setState({modal});
  }

  render() {
    const { modal, playlists } = this.state;

    return(
      <Row>

        <h3 class="text-center">Songs</h3>
        <p class="text-center">Find songs and add them to your favorite playlists</p>

        <PlaylistModal show={this.state.modal.active} modal={modal} playlists={playlists}></PlaylistModal>

        <SongSearch modal={modal}></SongSearch>
        <SongGroup title="Recently Added" songs={this.state.songs} modal={modal}></SongGroup>
        <SongGroup title="Most Popular" songs={this.state.songs} modal={modal}></SongGroup>

      </Row>
    );
  }
}
