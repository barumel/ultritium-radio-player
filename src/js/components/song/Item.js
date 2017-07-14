import React from 'react'
import { Button, DropdownButton, Dropdown, MenuItem } from 'react-bootstrap';
import PlaylistDropdown from './Playlists';


export class SongItem extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: false
    }
  }

  render() {
    const { artist, title, duration, thumb } = this.props.song;

    return(
      <div class="panel panel-default info-box">

        <div class="panel-heading info-box-heading">

          <div class="row">

            <div class="col-md-4 col-sm-4 col-xs-5">

              <div class="info-box-thumb">
                <img src={this.props.song.thumb}></img>
              </div>

            </div>

            <div class="col-md-8 col-sm-8 col-xs-7">


              <div class="text-right info-box-content">

                <PlaylistDropdown playlists={this.props.playlists}></PlaylistDropdown>

                <div class="content-big">
                  {artist}

                </div>

                <p>{title}</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    )
  }
}
