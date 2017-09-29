import React from 'react';
import { PlayerHtml } from '../../components/player/Html';

class WebPlayer extends React.Component {
  constructor() {
    super();
  }

  render() {
    const playlist = {
        _id: '59cdfde361f92a8cc3f69226',
        thumb: 'http://www.laut.de/Dendemann/dendemann-161797.jpg'
    };

    return(
      <PlayerHtml playlist={playlist}>
      </PlayerHtml>
    );
  }
}

export default WebPlayer;
