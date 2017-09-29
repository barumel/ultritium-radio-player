import EventEmitter from 'events';
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './data/Store';
import { RestActions } from './lib/data/rest/RestActions';

import Layout from "./pages/Layout";
import LoginPage from "./pages/Login/Login";
import PlaylistOverview from './pages/playlist/Overview';
import SettingsOverview from './pages/settings/Overview';
import SongOverview from './pages/song/Overview';
import Player from './pages/player/WebPlayer';

import SessionLocalStorage from './lib/session/localStorage';
const session = new SessionLocalStorage();
window.session = session;

class Application extends EventEmitter {
  constructor(session) {
    super();

    this.target = document.getElementById('app');
    this.session = session;

    // Register listeners
    session.on('session.user.changed', (user) => {
      console.log('USER HAS CHANGED', user);
      console.log(user);
      this.render();
    });

    session.on('session.destroyed', () => {
      this.render();
    });
  }

  async start() {
    const { session } = this;
    await session.load();

    this.render();
  }

  render() {
    const {  session } = this;
    const target = document.getElementById('app');

    if (session.isAuthenticated()) {
      return ReactDOM.render(
          <Provider store={store}>
            <Router history={hashHistory}>
              <Route path="/" component={Layout}>
                <IndexRoute component={PlaylistOverview}></IndexRoute>
                <Route path="settings" component={SettingsOverview}></Route>
                <Route path="playlists" component={PlaylistOverview}></Route>
                <Route path="songs" component={SongOverview}></Route>
                <Route path="player" component={Player}></Route>
              </Route>
            </Router>
          </Provider>,
        target);
    } else {
      return ReactDOM.render(
        <Provider store={store}>
          <LoginPage></LoginPage>
        </Provider>,
        target);
    }
  }
}

const application = new Application(session);
application.start();
//ReactDOM.render(<Layout/>, app);
/*
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
*/
