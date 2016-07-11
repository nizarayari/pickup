import React, { Component } from 'react'
import NavBar from './navBar'
import GamesList from  '../containers/gamesList'
import { Link } from 'react-router'

export default class App extends Component {

// show() {
  
// }

  render() {
    return (
      <div>
        <h1>Anything like hello world, i dont care, please god change</h1>
        <ul>
          <li><Link to="/Search">Search</Link></li>
          <li id="addButton" ><Link to="/Add">Add</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}