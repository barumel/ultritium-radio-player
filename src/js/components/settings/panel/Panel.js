import React from 'react';

export class SettingsPanel extends React.Component {
  constructor() {
    super();
  }

  /**
   * Toggle navigation
   *
   * @return void
   */
  toggle() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  /**
   * Lock input fields
   *
   * @return void
   */
  lock() {
    const locked = !this.state.locked;
    this.setState({locked});

    if (this.state.collapsed) this.setState({collapsed: false});
  }
}
