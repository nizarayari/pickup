import React, { Component } from 'react';
import NavBar from './navBar';
import { Link } from 'react-router';
import SearchHome from '../containers/searchHome';

export default class App extends Component {

  render() {
    return (
      <div >
        <h1>Anything like hello world, i dont care, please god change</h1>
        <div className="valign-wrapper">
          <ul className="valign center-block">
            <li className="waves-effect waves-light btn"><Link to="/Search" className="linkFont">Search</Link></li>
            <li className="waves-effect waves-light btn"><Link to="/Add" className="linkFont">Add</Link></li>
            <li className="waves-effect waves-light btn"><Link to="/SearchHome" className="linkFont">Home</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}