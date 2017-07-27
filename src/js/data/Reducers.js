import { combineReducers } from 'redux';
import user from './reducers/user/User';
import playlist from './reducers/playlist/Playlist';

const reducers = {
  user: user.reduce.bind(user),
  playlist: playlist.reduce.bind(playlist)
}

export default combineReducers(reducers);
