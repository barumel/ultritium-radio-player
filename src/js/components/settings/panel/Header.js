import React from 'react';

export class SettingsPanelHeader extends React.Component {
  constructor() {
    super();
  }

  render() {
    const locked = this.props.locked ? 'lock' : 'unlock';

    return(
      <div class="row">
        <div class="col-md-10 col-xs-10" onClick={this.props.toggle}>
          <h4 class="panel-title">
            {this.props.title}
          </h4>
        </div>
        <div class="col-md-2 col-xs-2">
          <span class="pull-right">
            <i class={"fa fa-" + locked } onClick={this.props.lock}></i>
          </span>
        </div>
      </div>
    );
  }
}
