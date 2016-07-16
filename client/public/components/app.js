import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchHome from '../containers/searchHome';

export default class App extends Component {

  render() {
    return (
      <div >
        <h1 className="center-align">PickUp</h1>
        <div className="valign-wrapper">
          <ul className="valign center-block">
            <li className="btn red waves-effect waves-light btn"><Link to="/Search" className="linkFont">Search</Link></li>
            <li className="btn red waves-effect waves-light btn"><Link to="/Add" className="linkFont">Add</Link></li>
            <li className="btn red waves-effect waves-light btn"><Link to="/SearchHome" className="linkFont">Home</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}