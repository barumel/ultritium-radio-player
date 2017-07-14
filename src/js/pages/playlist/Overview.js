import React from 'react'
import { PlaylistItem } from '../../components/playlist/Item';
import { PlaylistCreate } from '../../components/playlist/Create';

class PlaylistOverview extends React.Component {
  constructor() {
    super();
    this.state= {
      children: [
        <div class="col-md-3 col-sm-3 col-xs-12"><PlaylistItem title="Samy Deluxe" count="52" description="Samy's greatest hits" thumb="http://rap.de/wp-content/uploads/2014/01/samy-deluxe.jpg"></PlaylistItem></div>,
        <div class="col-md-3 col-sm-3 col-xs-12"><PlaylistItem title="Mega Awesom" count="79" description="Super Oesch's" thumb="https://www.enjoystmoritz.ch/wp-content/uploads/2017/03/Pressefoto6.jpg"></PlaylistItem></div>,
        <div class="col-md-3 col-sm-3 col-xs-12"><PlaylistItem title="Power Rangers" count="14" description="Power Rangers Squad" thumb="https://vignette4.wikia.nocookie.net/powerrangers/images/8/81/Cover-powerrangersmovie.jpg/revision/latest/scale-to-width-down/660?cb=20161201090346"></PlaylistItem></div>
      ]
    }
  }

  render() {
    return(
      <div class="row">
        <h4>Available Streams</h4>
        <p>List of all available streams</p>
        <PlaylistCreate></PlaylistCreate>
        { this.state.children }
      </div>
    );
  }
}

export default PlaylistOverview;
