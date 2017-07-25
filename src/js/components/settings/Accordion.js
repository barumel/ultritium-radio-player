import React from 'react';
import { PanelGroup } from 'react-bootstrap';
import { GlobalSettings } from './Global';
import { ProfileSettings } from './Profile';

export class SettingsAccordion extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <PanelGroup>
        <GlobalSettings key="1"></GlobalSettings>
        <ProfileSettings key="2"></ProfileSettings>
      </PanelGroup>
    );
  }
}
