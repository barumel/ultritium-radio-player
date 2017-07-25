import React from 'react';
import { Panel } from 'react-bootstrap';
import { SettingsPanel } from './panel/Panel';
import { SettingsPanelHeader } from './panel/Header';
import { SettingsFormGlobal } from './form/Global';

export class GlobalSettings extends SettingsPanel {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      locked: true,
      title: 'Global Settings'
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
          <SettingsFormGlobal locked={this.state.locked}></SettingsFormGlobal>
        </Panel>
    );
  }
}
