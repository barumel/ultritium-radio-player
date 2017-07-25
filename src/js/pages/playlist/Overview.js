import React from 'react'
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { PlaylistGroup } from '../../components/playlist/Group';
import { PlaylistItem } from '../../components/playlist/Item';
import { PlaylistCreate } from '../../components/playlist/Create';
import { PlaylistSearch } from '../../components/playlist/Search';

class PlaylistOverview extends React.Component {
  constructor() {
    super();
    this.state= {
      playlists: [{
        title: "Super Oesch's",
        description: "Super Oesch's greatest hits",
        thumb: 'https://www.enjoystmoritz.ch/wp-content/uploads/2017/03/Pressefoto6.jpg',
        count: 25
      }, {
        title: 'Samy Deluxe',
        description: "Samy's greatest hits",
        thumb: 'http://rap.de/wp-content/uploads/2014/01/samy-deluxe.jpg',
        count: 250
      }, {
        title: 'Power Rangers',
        description: "Power Rangers Squad",
        thumb: 'https://vignette4.wikia.nocookie.net/powerrangers/images/8/81/Cover-powerrangersmovie.jpg/revision/latest/scale-to-width-down/660?cb=20161201090346',
        count: 50000
      }]
    }
  }

  render() {
    return(
      <Row>
        <Tabs defaultActiveKey={1} id="plalist-tabs" bsStyle="pills">
          <Tab eventKey={1} title="Home">
            <PlaylistGroup title="Recently Added" playlists={this.state.playlists}></PlaylistGroup>
            <PlaylistGroup title="Most Popular" playlists={this.state.playlists}></PlaylistGroup>

          </Tab>
          <Tab eventKey={2} title="Genres">aasdfasdfs</Tab>
          <Tab eventKey={3} title="Categories">wetewrtfghfgh</Tab>
          <Tab eventKey={4} title="Search">
            <PlaylistSearch></PlaylistSearch>
          </Tab>
        </Tabs>
      </Row>
    );
  }
}

export default PlaylistOverview;
