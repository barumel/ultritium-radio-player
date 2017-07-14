import React from 'react'
import { Link } from 'react-router';

export default class NavigationItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { toggle } = this.props;

    return(
      <li>
        <Link to={this.props.target} onClick={toggle}>{this.props.title}</Link>
      </li>
    );
  }
}
