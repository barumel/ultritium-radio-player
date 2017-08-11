import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import NavigationItem from './Item'

/**
 * Navigation class
 */
class Navigation extends React.Component {
  /**
   * Constructor
   *
   * @return void
   */
  constructor() {
    super();

    const toggle = this.toggle.bind(this);

    this.state = {
      collapsed: true,
      children: [
        <NavigationItem key="1" title="Playlists" target="playlists" toggle={toggle}></NavigationItem>,
        <NavigationItem key="2" title="Songs" target="songs" toggle={toggle}></NavigationItem>,
        <NavigationItem key="3" title="Users" target="users" toggle={toggle}></NavigationItem>,
        <NavigationItem key="4" title="Settings" target="settings" toggle={toggle}></NavigationItem>,
        <NavigationItem key="5" title="Logout" toggle={toggle} onClick={this.logout.bind(this)}></NavigationItem>,
      ]
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

  logout() {
    const { session } = window;
    session.destroy();
  }

  /**
   * Render components
   *
   * @return void
   */
  render() {
    const collapsed = this.state.collapsed ? 'collapse' : '';

    return(
      <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
          <div class="container">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" onClick={this.toggle.bind(this)}>
                      <i class="fa fa-bars"></i>
                  </button>
                  <a class="navbar-brand" href="#page-top">Ultiritium Raido Player</a>
              </div>
              <div class={"navbar-collapse " + collapsed} id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                      { this.state.children }
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Navigation;
