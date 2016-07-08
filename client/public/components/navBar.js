import React, { Component } from 'react';
import $ from 'jquery';


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
          <img height={35} width={35} alt="Brand" src="https://sopreso.com/images/poll-2.png" className="img-responsive" alt="Responsive image"/>
          </a>
        </li>
          <li onClick={this.showTable} role="presentation"><a href="#">Add</a></li>
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
            <th>#</th>
            <th>Poll Name</th>
            <th>Voting Duration</th>
            <th>Poll Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
          </tr>
        </tbody>
      </table>
    )
  }

  // showTable() {
  //   // $('#addTableID').show()
  //   // console.log('clicked')
  //   return 
  // }

  render() {
    let style = {
      '#addTableID': show
    }
    let navRender = this.nav()
    let addTableRender = this.addTable()
    // let showTableRender = this.showTable()

    return(
      <div>
          <div>{ navRender }</div>
          <div>
          { addTableRender },
          { style }
          </div>

      </div>
    )
  }

}


export default NavBar