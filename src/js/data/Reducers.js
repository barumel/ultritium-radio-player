import { combineReducers } from 'redux';
import user from './reducers/user/User';
import playlist from './reducers/playlist/Playlist';
import auth from './reducers/auth/Auth';

const reducers = {
  user: user.reduce.bind(user),
  playlist: playlist.reduce.bind(playlist),
  auth: auth.reduce.bind(auth)
}

export default combineReducers(reducers);
