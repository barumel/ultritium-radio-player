import React from 'react'
import { SongItem } from '../../components/song/Item';

export class SongList extends React.Component {
  constructor() {
    super();

    const song = {
      artist: 'Samy Deluxe',
      title: 'Weck mich auf',
      duration: '',
      thumb: 'http://rap.de/wp-content/uploads/2014/01/samy-deluxe.jpg'
    }

    // Pass this via props
    this.playlists = [];

    this.state = {
      collapsed: false,
      children: [
        <SongItem key="1" song={song}></SongItem>,
        <SongItem key="2" song={song}></SongItem>
      ]
    }
  }

  /**
   * Toggle navigation
   *
   * @return void
   */
  toggle() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const collapsed = this.state.collapsed ? 'collapse' : '';

    return(
      <div class="panel panel-default">
        <div class="panel-heading">
          <div class="row">
            <div class="col-md-12 col-xs-12" onClick={this.toggle.bind(this)}>
              <h4 class="panel-title">
                {this.props.title}
              </h4>
            </div>
          </div>
        </div>

        <div id="collapse1" class={"panel-collapse " + collapsed}  >
          <div class="panel-body">
            {this.state.children}
          </div>
        </div>
      </div>
    )
  }
}
