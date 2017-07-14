import React from 'react'
import { SongList } from '../../components/song/List';

export class SongSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      term: '',
      result: []
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
   * Set the search term
   *
   * @return void
   */
  setTerm(event) {
    const { value } = event.target;
    this.setState({term: value});
  }

  search() {
    console.log(this.state);
    console.log(this);
    this.setState({result: ['Ugh']});
  }

  render() {
    const collapsed = this.state.collapsed ? 'collapse' : '';
    const { data } = this.state;
    const hidden = this.state.result.length == 0 ? 'hidden' : '';
    //const disabled = data.title == '' || !data.title ? true: false;

    return(
      <div>
        <div class="btn-group btn-block" style={{paddingBottom: '10px'}}>
          <button class="btn btn-default btn-block" onClick={this.toggle.bind(this)}>Search</button>
        </div>

        <div>
          <div class={"form " + collapsed} style={{paddingBottom: '30px'}}>

            <div class="form-group">
              <div class="input-group">
                <input
                  type="text"
                  name="term"
                  id="term"
                  class="form-control"
                  placeholder="Suche"
                  onChange={this.setTerm.bind(this)}
                  aria-describedby="basic-addon1">
                </input>
                <span class="input-group-addon" id="basic-addon1">
                  <i class="fa fa-search" onClick={this.search.bind(this)}></i>
                </span>
              </div>
            </div>

          </div>
        </div>

        <div class={hidden}>
          <SongList title="Search results" class={hidden}></SongList>
        </div>
      </div>
    );
  }
}
