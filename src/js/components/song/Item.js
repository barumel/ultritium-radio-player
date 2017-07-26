import React from 'react'
import { Panel, Button, DropdownButton, Dropdown, MenuItem } from 'react-bootstrap';
import { SongItemContent } from './item/Content';
import { SongItemFooter } from './item/Footer';


export class SongItem extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: false
    }
  }

  render() {
    const { artist, title, duration, thumb } = this.props.song;

    const footer = (
      <SongItemFooter song={this.props.song} modal={this.props.modal}></SongItemFooter>
    );

    return(
      <Panel footer={footer}>
        <SongItemContent song={this.props.song}></SongItemContent>
      </Panel>
    );
  }
}
