import React from 'react'
import { groupBy } from 'lodash';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { PlaylistGroup } from '../../components/playlist/Group';
import { PlaylistItem } from '../../components/playlist/Item';
import { PlaylistCreate } from '../../components/playlist/form/Create';
import { PlaylistSearch } from '../../components/playlist/Search';
import { connect } from 'react-redux';
import PlaylistActions from '../../data/actions/playlist/Playlist';
import UserActions from '../../data/actions/user/User';

@connect((store) => {
  return {
    playlist: store.playlist,
    user: store.user
  }
})
class PlaylistOverview extends React.Component {
  constructor() {
    super();
    this.state= {}
  }

  componentWillMount() {
    const { session } = window;
    const { _id } = session.getUser();

    this.props.dispatch(PlaylistActions.execute('RECENT'));
    this.props.dispatch(PlaylistActions.execute('POPULAR'));
    this.props.dispatch(PlaylistActions.execute('ALL'));
    this.props.dispatch(UserActions.execute('GET', _id));
  }

  search(term) {
    const query = {
      type: 'search',
      value: term
    }

    this.props.dispatch(PlaylistActions.execute('FIND', query));
  }

  create(data) {
    this.props.dispatch(PlaylistActions.execute('POST', data))
      .then((result) => {
        this.props.dispatch(PlaylistActions.execute('RECENT'));
        return result;
      });
  }

  render() {
    const { recent, popular, find, all } = this.props.playlist;
    const { session } = window;
    const { favorites } = session.getUser();

    // Group by genre
    const grouped = _.groupBy(all, 'genre');
    const genres = _.map(grouped, (items, genre) => {
      return <PlaylistGroup title={genre} playlists={items}></PlaylistGroup>;
    });

    return(
      <Row>
        <h3 class="text-center">Playlists</h3>
        <p class="text-center">Find and create playlists</p>
        <Tabs defaultActiveKey={1} id="plalist-tabs" bsStyle="tabs" class="nav-justified">
          <Tab eventKey={1} title="Home">
            <PlaylistGroup title="Recently Added" playlists={recent}></PlaylistGroup>
            <PlaylistGroup title="Most Popular" playlists={popular}></PlaylistGroup>
          </Tab>
          <Tab eventKey={2} title="Genres">{genres}</Tab>
          <Tab eventKey={3} title="Favorites">
            <PlaylistGroup title="Favorites" playlists={favorites}></PlaylistGroup>
          </Tab>
          <Tab eventKey={4} title="Search">
            <PlaylistSearch result={find} onSearch={this.search.bind(this)} onCreate={this.create.bind(this)}></PlaylistSearch>
            <PlaylistCreate onCreate={this.create.bind(this)}></PlaylistCreate>
          </Tab>
        </Tabs>
      </Row>
    );
  }
}

export default PlaylistOverview;
