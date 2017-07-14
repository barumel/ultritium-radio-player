console.log('Hoi');

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from "./pages/Layout";
import PlaylistOverview from './pages/playlist/Overview';
import SettingsOverview from './pages/settings/Overview';
import SongOverview from './pages/song/Overview';

const app = document.getElementById('app');
//ReactDOM.render(<Layout/>, app);
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={PlaylistOverview}></IndexRoute>
      <Route path="settings" component={SettingsOverview}></Route>
      <Route path="playlists" component={PlaylistOverview}></Route>
      <Route path="songs" component={SongOverview}></Route>
    </Route>
  </Router>,
app);
