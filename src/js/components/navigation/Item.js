import React from 'react'
import { Link } from 'react-router';

export default class NavigationItem extends React.Component {
  constructor() {
    super();
  }

  toggle() {
    const { toggle, onClick=() => {}} = this.props;

    onClick();
    toggle();
  }

  render() {
    const { toggle } = this.props;

    return(
      <li>
        <Link to={this.props.target} onClick={this.toggle.bind(this)}>{this.props.title}</Link>
      </li>
    );
  }
}
