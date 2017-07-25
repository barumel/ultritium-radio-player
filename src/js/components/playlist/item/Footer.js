import React from 'react';
import { Row, Col, Button, ListGroup, ListGroupItem, Collapse, Well } from 'react-bootstrap';
import { Link } from 'react-router';

export class PlaylistItemFooter extends React.Component {
  constructor(props) {
    super(props);

    const tracks = props.tracks || [];

    this.state = {
      collapsed: true,
      title: 'Show Tracks',
      children: tracks.map((track) => {
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
    const { children } = this.state;
    const hidden = children.length <= 0 ? 'hidden' : '';

    return(
      <div>
        <Button block onClick={this.toggle.bind(this)}>{this.state.title}</Button>
          <Collapse in={!this.state.collapsed}>
            <div>
              <ListGroup class={"" + hidden}>
                {this.state.children}
              </ListGroup>

              <Well>
                <p class="text-center">There are currently no tracks in this playlist!</p>
                <Button bsStyle="success" block>
                  <Link to="songs">Add Some Tracks!</Link>
                </Button>
              </Well>
            </div>
          </Collapse>
      </div>
    );
  }
}
