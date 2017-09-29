import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export class PlayerHtml extends React.Component {
  constructor() {
    super();
    this.state = {
      audio: false,
      playing: false
    }
  }

  play() {
    const { audio, playing } = this.state;
    if (audio.paused) {
      audio.play();
      this.setState({ playing: true });
    } else {
      audio.pause();
      this.setState({ playing: false });
    }

    console.log(audio);
  }

  componentDidMount() {
    const audio = document.getElementById('player');
    const playing = true;
    this.setState({ audio, playing });
  }

  render() {
    const { playlist } = this.props;
    const { _id, thumb } = playlist;
    const { playing } = this.state;
    const icon = playing ? 'pause' : 'play';
    const src = `http://localhost:8090/api/stream/radio/${playlist._id}`;

    return(
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div class={"video-thumbnail-" + icon} onClick={this.play.bind(this)}>
            <img src={thumb}></img>
            <audio id="player" preload="auto" autoPlay>
              <source src={src} type="audio/mpeg"></source>
            </audio>
          </div>
        </Col>
      </Row>
    );
  }
}
