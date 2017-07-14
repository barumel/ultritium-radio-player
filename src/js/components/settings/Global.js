import React from 'react'

export class GlobalSettings extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      locked: true,
      valid: false,
      app: {
        name: 'Wurst',
        prename: 'Hans',
        email: 'hans.wurst@wursthans.ch',
        age: '12'
      }
    }
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

  render() {
    const collapsed = this.state.collapsed ? 'collapse' : '';
    const locked = this.state.locked ? 'lock' : 'unlock';
    const hidden = this.state.locked ? 'hidden' : '';

    return(
      <div class="panel panel-default">
        <div class="panel-heading">
          <div class="row">
            <div class="col-md-10 col-xs-10" onClick={this.toggle.bind(this)}>
              <h4 class="panel-title">
                Global
              </h4>
            </div>
            <div class="col-md-2 col-xs-2">
              <span class="pull-right">
                <i class={"fa fa-" + locked } onClick={this.lock.bind(this)}></i>
              </span>
            </div>
          </div>
        </div>

        <div id="collapse1" class={"panel-collapse " + collapsed}  >
          <div class="panel-body">
          Bisi
            <div class={"form-group " + hidden}>
              <div class="btn-group btn-block">
                <button class="btn btn-success btn-block" disabled={this.state.valid}>Save</button>
              </div>

              <div class="btn-group btn-block">
                <button class="btn btn-warning btn-block">Cancel</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}
