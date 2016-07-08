import React, { Component } from 'react';


class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      something: 'hi'
    }
  }

  nav() {
    return(
      <ul className="nav nav-tabs">
        <li role="presentation" className="active"><a href="#">
          <img height={45} width={45} alt="Brand" src="https://sopreso.com/images/poll-2.png" className="img-responsive" alt="Responsive image"/>
          </a>
        </li>
          <li role="presentation"><a href="#">Add</a></li>
          <li role="presentation"><a href="#">Pending</a></li>
          <li role="presentation"><a href="#">Voted</a></li>
      </ul>
      
    )
    
  }

  render() {
    let navRender = this.nav()

    return(
      <div>
          <h2>{ navRender }</h2>    
      </div>
    )
  }

}


export default NavBar