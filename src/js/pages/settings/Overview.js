import React from 'react'

import { GlobalSettings } from '../../components/settings/Global';
import { ProfileSettings } from '../../components/settings/Profile';

export default class SettingsOverview extends React.Component {
  constructor() {
    super();

    this.state = {
      children: [
        <GlobalSettings key="1"></GlobalSettings>,
        <ProfileSettings key="2"></ProfileSettings>
      ]
    }
  }

  render() {
    return(
      <div class="row">
        <h3>Settings</h3>
        <p>Configure personal Settings</p>
        <div class="panel-group" id="accordion">
          {this.state.children}
        </div>
      </div>
    );
  }
}
