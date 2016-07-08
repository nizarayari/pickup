import React, { Component } from 'react';
import $ from 'jquery';
import path from 'path';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      something: 'hi'
    }
  }

  componentDidMount() {
    $('#addTableID').hide()
  }

  nav() {
    return(
      <ul className="nav nav-tabs">
        <li role="presentation" className="active"><a href="#">
          <img height={35} width={35} alt="Brand" src="https://sopreso.com/images/poll-2.png" className="img-responsive" alt="Responsive image"/>
          </a>
        </li>
          <li onClick={() => $('#addTableID').show()} role="presentation"><a href="#">Add</a></li>
          <li role="presentation"><a href="#">Pending</a></li>
          <li role="presentation"><a href="#">Voted</a></li>
      </ul>     
    )  
  }

  addTable() {
    return(
      <table id="addTableID" className="table table-hover">
        <thead>
          <tr>
            <th><img src="./assets/letter-x"/></th>
            <th>Add a new poll</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Poll Name</th>
            <td><input type="text" className="form-control"/></td>
          </tr>
          <tr>
            <th scope="row">Voting Duration</th>
            <td><input type="text" className="form-control"/></td>
          </tr>
          <tr>
            <th scope="row">Poll Description</th>
            <td><input type="text" className="form-control"/></td>
          </tr>
        </tbody>
      </table>
    )
  }

//   render() {

//   const styleHide = {
//       visibility: 'hidden'
//   }
//   let navRender = this.nav()
//   let addTableRender = this.addTable()

//     return(
//       <div>
//           <div>{ navRender }</div>
//           <div style={styleHide}>{ addTableRender }</div>
//       </div>
//     )
//   }
// }

  render() {

  const styleHide = {
      visibility: 'hidden'
  }
  let navRender = this.nav()
  let addTableRender = this.addTable()

    return(
      <div>
          <div>{ navRender }</div>
          <div>{ addTableRender }</div>
      </div>
    )
  }
}


export default NavBar