import React from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem, Collapse, Well } from 'react-bootstrap';

export class PlaylistItemFooter extends React.Component {
  constructor(props) {
    super(props);

    const tracks = props.tracks || [];

    this.state = {
      collapsed: true,
      title: 'Show Tracks',
      tracks: tracks.map((track) => {
        return (<ListGroupItem><strong>{track.title}</strong></ListGroupItem>);
      })
    }
  }

  toggle() {
    const collapsed = !this.state.collapsed;
    const title = collapsed ? 'Show Tracks': 'Hide Tracks';

    this.setState({collapsed});
    this.setState({title});
  }

  render() {
    const { tracks } = this.state;
    const empty = tracks.length > 0 ? false : true;
    const hidden = tracks.length <= 0 ? 'hidden' : '';

    return(
      <div>
        <Button block onClick={this.toggle.bind(this)}>{this.state.title}</Button>
          <Collapse in={!this.state.collapsed}>
            <div>
              <ListGroup class={"" + hidden}>
                {this.state.tracks}
              </ListGroup>

              <Well>
                <p class="text-center">There are currently no tracks in this playlist!</p>
                <Button bsStyle="success" block>Add Some Tracks!</Button>
              </Well>
            </div>
          </Collapse>
      </div>
    );
  }
}
