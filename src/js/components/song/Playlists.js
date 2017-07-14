import React from 'react'
import { Button, DropdownButton, Dropdown, MenuItem } from 'react-bootstrap';


export default class PlaylistDropdown extends React.Component {
  constructor(props) {
    super(props);

    const { playlists = [] } = this.props;

    const children = playlists.map((playlist) => <MenuItem key={playlist._id} eventKey={playlist._id} onClick={this.addToPlaylist.bind(this, playlist)}>{playlist.title}</MenuItem>);

    this.state = {
      children: children
    }
  }

  addToPlaylist(item) {
    console.log(item);
  }

  render() {
    return(
      <Dropdown class="playlist-dropdown" pullRight={true}>
        <Dropdown.Toggle noCaret={true}>
          <span class="playlist-dropdown-icon"><i class="fa fa-plus-square"></i></span>

        </Dropdown.Toggle>

        <Dropdown.Menu>
          {this.state.children}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
