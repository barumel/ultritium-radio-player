import React from 'react'
import Navigation from '../components/navigation/Navigation.js'
import { connect } from 'react-redux';

@connect((store) => {
  console.log(store);
  return store;
})
class Layout extends React.Component {
  constructor() {
    super();
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
