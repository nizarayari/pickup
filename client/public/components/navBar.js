import React, { Component } from 'react';
import $ from 'jquery';
import path from 'path';
import { Link } from 'react-router';


class NavBar extends Component {
  constructor(props) {
    super(props)
}
  
  nav() {
    return(
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper red">
            <div className="brand-logo">PickUp</div>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/SearchHome">MAP</Link></li>
              <li><Link to="/Add">ADD</Link></li>
              <li><Link to="/">SEARCH BAR</Link></li>
            </ul>
          </div>
        </nav>
      </div>       
    )  
  }

  render() {
    return(
    <div>
      <div>
          { this.nav() }
      </div>
        { this.props.children }
    </div>  
    )
  }
}

export default NavBar