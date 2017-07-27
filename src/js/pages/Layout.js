import React from 'react'
import Navigation from '../components/navigation/Navigation.js'
import { connect } from 'react-redux';
import UserActions from '../data/actions/user/User';

@connect((store) => {
  return store;
})
class Layout extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(UserActions.execute('GET', 1));
  }

  render() {
    return(
      <div class="page">
        <Navigation></Navigation>
        <div class="container-fluid">
              {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
