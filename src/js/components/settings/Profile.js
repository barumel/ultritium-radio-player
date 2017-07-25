import React from 'react';
import { Panel } from 'react-bootstrap';
import { SettingsPanel } from './panel/Panel';
import { SettingsPanelHeader } from './panel/Header';
import { SettingsFormProfile } from './form/Profile';

export class ProfileSettings extends SettingsPanel {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      locked: true,
      title: 'Profile Settings'
    };
  }

  render() {
    const header = (<SettingsPanelHeader
        title={this.state.title}
        locked={this.state.locked}
        lock={this.lock.bind(this)}
        toggle={this.toggle.bind(this)}>
      </SettingsPanelHeader>
    );

    return(
      <Panel header={header} collapsible={true} expanded={!this.state.collapsed}>
        <SettingsFormProfile locked={this.state.locked}></SettingsFormProfile>
      </Panel>
    );
  }
}
