import React from 'react'

export class PlaylistCreate extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      data: {}
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
   * Set the value for the given target
   *
   * @return void
   */
  setValue(event) {
    const { id, value } = event.target;
    const data = this.state.data;
    data[id] = value;

    this.setState({data});
  }

  create() {
    console.log(this.state)
    this.setState({data: {}, collapsed: true});
  }

  /**
   * Reset data
   *
   * @return void
   */
  reset() {
    this.setState({data: {}, collapsed: true});
  }

  render() {
    const collapsed = this.state.collapsed ? 'collapse' : '';
    const { data } = this.state;
    const disabled = data.title == '' || !data.title ? true: false;

    return(
      <div>
        <div class="btn-group btn-block" style={{paddingBottom: '30px'}}>
          <button class="btn btn-default btn-block" onClick={this.toggle.bind(this)}>Add new Playlist</button>
        </div>

        <div>
          <div class={"form " + collapsed} style={{paddingBottom: '30px'}}>
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon" id="basic-addon1"><i class="fa fa-pencil-square"></i></span>
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="form-control"
                  placeholder="Title"
                  value={data.title}
                  onChange={this.setValue.bind(this)}
                  aria-describedby="basic-addon1">
                </input>
              </div>
            </div>

            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon" id="basic-addon1"><i class="fa fa-pencil-square"></i></span>
                <input
                  type="text"
                  name="description"
                  id="description"
                  class="form-control"
                  placeholder="Description"
                  value={data.description}
                  onChange={this.setValue.bind(this)}
                  aria-describedby="basic-addon1">
                </input>
              </div>
            </div>

            <div class="btn-group btn-block">
              <button class="btn btn-success btn-block" disabled={disabled} onClick={this.create.bind(this)}>Create</button>
            </div>

            <div class="btn-group btn-block">
              <button class="btn btn-warning btn-block" onClick={this.reset.bind(this)}>Cancel</button>
            </div>

          </div>
          </div>
      </div>
    );
  }
}
