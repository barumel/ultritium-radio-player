import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './data/Store';
import { RestActions } from './lib/data/rest/RestActions';
import PlaylistActions from './data/actions/playlist/Playlist';

console.log(PlaylistActions);

const actions = new RestActions('PLAYLIST', 'ugh/blahh');
store.dispatch(PlaylistActions.execute('GET', 1));
store.dispatch(PlaylistActions.execute('FIND', {title: { like: 'shit'}}));
store.dispatch(PlaylistActions.execute('ALL'));
store.dispatch(PlaylistActions.execute('RECENT'));
store.dispatch(PlaylistActions.execute('POPULAR'));

import Layout from "./pages/Layout";
import PlaylistOverview from './pages/playlist/Overview';
import SettingsOverview from './pages/settings/Overview';
import SongOverview from './pages/song/Overview';


const app = document.getElementById('app');
//ReactDOM.render(<Layout/>, app);
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={PlaylistOverview}></IndexRoute>
        <Route path="settings" component={SettingsOverview}></Route>
        <Route path="playlists" component={PlaylistOverview}></Route>
        <Route path="songs" component={SongOverview}></Route>
      </Route>
    </Router>
  </Provider>,
app);
