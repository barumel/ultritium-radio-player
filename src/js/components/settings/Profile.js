import React from 'react'

export class ProfileSettings extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      locked: true,
      user: {
        username: 'Tubu',
        name: 'Wurst',
        prename: 'Hans',
        email: 'hans.wurst@wursthans.ch',
        age: '12'
      },
      form: {

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

  valid() {
    return false;
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
                Profile
              </h4>
            </div>
            <div class="col-md-2 col-xs-2">
              <span class="pull-right">
                <i class={"fa fa-" + locked} onClick={this.lock.bind(this)}></i>
              </span>
            </div>
          </div>
        </div>

        <div id="collapse1" class={"panel-collapse " + collapsed}  >
          <div class="panel-body">
            <form class="form">

              <div class="form-group">
                <label for="username" class="cols-sm-2 control-label">Username</label>
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1"><i class="fa fa-users"></i></span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control"
                    defaultValue={this.state.user.username}
                    disabled="true"
                    aria-describedby="basic-addon1">
                  </input>
                </div>
              </div>

              <div class="form-group">
                <label for="prename" class="cols-sm-2 control-label">Vorname</label>
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user"></i></span>
                  <input
                    type="text"
                    name="prename"
                    id="prename"
                    class="form-control"
                    value={this.state.user.prename}
                    disabled={this.state.locked}
                    aria-describedby="basic-addon1">
                  </input>
                </div>
              </div>

              <div class="form-group">
                <label for="name" class="cols-sm-2 control-label">Name</label>
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user"></i></span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    value={this.state.user.name}
                    disabled={this.state.locked}
                    aria-describedby="basic-addon1">
                  </input>
                </div>
              </div>

              <div class="form-group">
                <label for="email" class="cols-sm-2 control-label">Email</label>
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1"><i class="fa fa-envelope"></i></span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control"
                    value={this.state.user.email}
                    disabled={this.state.locked}
                    aria-describedby="basic-addon1">
                  </input>
                </div>
              </div>

              <div class="form-group">
                <label for="password" class="cols-sm-2 control-label">Password</label>
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1"><i class="fa fa-key"></i></span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    disabled={this.state.locked}
                    aria-describedby="basic-addon1">
                  </input>
                </div>
              </div>

              <div class="form-group">
                <label for="password-confirm" class="cols-sm-2 control-label">Confirm Password</label>
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1"><i class="fa fa-key"></i></span>
                  <input
                    type="text"
                    name="password-confirm"
                    id="password-confirm"
                    class="form-control"
                    disabled={this.state.locked}
                    aria-describedby="basic-addon1">
                  </input>
                </div>
              </div>

              <div class={"form-group " + hidden}>
                <div class="btn-group btn-block">
                  <button class="btn btn-success btn-block" disabled={this.valid.bind(this)}>Save</button>
                </div>

                <div class="btn-group btn-block">
                  <button class="btn btn-warning btn-block">Cancel</button>
                </div>

              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}
