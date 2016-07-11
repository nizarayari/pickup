import React, { Component } from 'react'
import $ from 'jquery'

export default class Search extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      sport: '',
      rules: '',
      time: '',
      players: '',
      max_players: '',
      created_players: ''
    }

  }

  createTable() {
    console.log($('#created_by').val())
  }

render() {
  return(
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <table id="addTableID" className="table table-hover">
              <thead>
                <tr>
                  <th>
                    <img height={15} width={15} id="x" onClick={() => $('.container').hide()}src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/multiply-.png" className="img-responsive" alt="Responsive image"/>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input placeholder='Sport' type="text" className="form-control"/></td>
                </tr>
                <tr>
                  <td><input placeholder='Rules' type="text" className="form-control"/></td>
                </tr>
                <tr>
                  <td><input placeholder='Time' type="text" className="form-control"/></td>
                </tr>
                <tr>
                  <td><input placeholder='Players' type="text" className="form-control"/></td>
                </tr>
                <tr>
                  <td><input placeholder='Max Players' type="text" className="form-control"/></td>
                </tr>
                <tr>
                  <td><input id='created_by' placeholder='Created by' type="text" className="form-control"/></td>
                </tr>
              </tbody>
              <button onClick={ this.createTable } className="btn btn-default" type="submit">submit</button>
            </table>
          </div>
        </div> 
      </div>
    )     
  }
}
