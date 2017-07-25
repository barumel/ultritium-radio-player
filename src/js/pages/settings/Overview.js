import React from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';

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
      <Row>
        <h3 class="text-center">Settings</h3>
        <p class="text-center">Adjust personal settings</p>
        <SettingsAccordion></SettingsAccordion>
      </Row>
    );
  }
}
