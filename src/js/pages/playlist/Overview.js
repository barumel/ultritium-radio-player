import React from 'react'
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { PlaylistGroup } from '../../components/playlist/Group';
import { PlaylistItem } from '../../components/playlist/Item';
import { PlaylistSearch } from '../../components/playlist/Search';
import { connect } from 'react-redux';
import PlaylistActions from '../../data/actions/playlist/Playlist';

@connect((store) => {
  console.log(store.playlist);
  return store.playlist;
})
class PlaylistOverview extends React.Component {
  constructor() {
    super();
    this.state= {}
  }

  componentWillMount() {
    this.props.dispatch(PlaylistActions.execute('RECENT'));
    this.props.dispatch(PlaylistActions.execute('POPULAR'));
  }

  search(term) {
    this.props.dispatch(PlaylistActions.execute('FIND', {term: term}));
  }

  render() {
    const { recent, popular, find } = this.props;

    return(
      <Row>
        <h3 class="text-center">Playlists</h3>
        <p class="text-center">Find and create playlists</p>
        <Tabs defaultActiveKey={1} id="plalist-tabs" bsStyle="tabs" class="nav-justified">
          <Tab eventKey={1} title="Home">
            <PlaylistGroup title="Recently Added" playlists={recent}></PlaylistGroup>
            <PlaylistGroup title="Most Popular" playlists={popular}></PlaylistGroup>
          </Tab>
          <Tab eventKey={2} title="Genres">aasdfasdfs</Tab>
          <Tab eventKey={3} title="Favorites">wetewrtfghfgh</Tab>
          <Tab eventKey={4} title="Search">
            <PlaylistSearch result={find} onSearch={this.search.bind(this)}></PlaylistSearch>
          </Tab>
        </Tabs>
      </Row>
    );
  }
}

export default PlaylistOverview;
