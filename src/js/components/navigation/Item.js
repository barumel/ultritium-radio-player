import React from 'react'
import { Link } from 'react-router';

export default class NavigationItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <li>
        <Link to={this.props.target}>{this.props.title}</Link>
      </li>
    );
  }
}
