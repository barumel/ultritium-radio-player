import React from 'react'
import { Button, DropdownButton, Dropdown, MenuItem } from 'react-bootstrap';


export default class PlaylistDropdown extends React.Component {
  constructor(props) {
    super(props);

    const { playlists = [] } = this.props;

    const children = playlists.map((playlist) => <MenuItem eventKey={playlist._id}>Action</MenuItem>);

    this.state = {
      children: []
    }
  }

  render() {
    return(
      <Dropdown class="playlist-dropdown" pullRight={true}>
        <Dropdown.Toggle noCaret={true}>
          <span class="playlist-dropdown-icon"><i class="fa fa-plus-square"></i></span>

        </Dropdown.Toggle>

        <Dropdown.Menu>

        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
