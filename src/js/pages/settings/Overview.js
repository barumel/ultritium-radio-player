import React from 'react'

import { GlobalSettings } from '../../components/settings/Global';
import { ProfileSettings } from '../../components/settings/Profile';
import { SettingsAccordion } from '../../components/settings/Accordion';

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
      <div>
        <SettingsAccordion></SettingsAccordion>
      </div>
    );
  }
}
