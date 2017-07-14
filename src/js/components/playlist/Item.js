import React from 'react'

export class PlaylistItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div class="panel panel-default info-box">

        <div class="panel-heading info-box-heading">
          <div class="row">

            <div class="col-md-4 col-sm-4 col-xs-5">

              <div class="info-box-thumb">
                <img src={this.props.thumb}></img>
              </div>

            </div>
            <div class="col-md-8 col-sm-8 col-xs-7">

              <div class="text-right info-box-content">
                <div class="content-big">{this.props.title}</div>
                <p>{this.props.description}</p>
                <p>Anzahl Titel: {this.props.count}</p>
              </div>

            </div>

          </div>

        </div>

        <div class="panel-footer">Titel anzeigen</div>

      </div>
    );
  }
}
