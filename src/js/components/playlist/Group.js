import React from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { PlaylistItem } from './Item';
import UserActions from '../../data/actions/user/User';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    user: store.user
  }
})
export class PlaylistGroup extends React.Component {
  constructor(props) {
    super(props);

    const playlists = props.playlists || [];

    this.state = {};
  }

  async addFavorite(playlist) {
    const user = this.props.user.get;

    if (_.filter(user.favorites, {_id: playlist._id}).length > 0) return;

    user.favorites.push(playlist);

    await this.props.dispatch(UserActions.execute('PUT', user));
    await this.props.dispatch(UserActions.execute('GET', user._id));
  }

  render() {
    const { playlists, user } = this.props;
    const children = playlists.map((playlist) => {
      const isFav = _.filter(user.get.favorites, { _id: playlist._id }).length > 0;

      return(
        <Col md={4} sm={6} xs={12}>
          <PlaylistItem
            playlist={playlist}
            isFavorite={isFav}
            addFavorite={this.addFavorite.bind(this, playlist)}>
          </PlaylistItem>
        </Col>
      );
    });

    return(
      <Row>
        <Col md={12} sm={12} xs={12}>
          <h4 class="text-center">{this.props.title}</h4>
        </Col>
        {children}
      </Row>
    );
  }
}
