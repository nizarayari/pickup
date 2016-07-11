import React, { Component } from 'react'
import $ from 'jquery'
import moment from 'moment'

export default class Search extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      sport: '',
      rules: '',
      time: '',
      players: '',
      needed_players: '',
      created_by: ''
    }

  }

  onInputChange(input, event) {
    const myObj = {
    }

    myObj[input] = event.target.value
    this.setState(myObj)
    console.log(this.state)
  }

  validate() {
    console.log('fire again')
    let wasThereAnError = 0

    let sport = this.state.sport.toLowerCase(),
        rules = this.state.rules.toLowerCase(),
        time = this.state.time,
        needed_players = this.state.needed_players,
        created_by = this.state.created_by.toLowerCase();

    let listOfSports = ['football', 'baseball', 'basketball', 'tennis']

    $("input").removeClass("fieldError");
    $("#errorMessage").hide();

    if (listOfSports.indexOf(sport) === -1) {
      wasThereAnError ++;
      $('#sport').addClass('fieldError')
    }
    if (new Date(time) <= new Date()) {
      console.log('made it in')
      wasThereAnError ++;
      $('#time').addClass('fieldError')
    }
    if (needed_players <= 0) {
      wasThereAnError ++;
      $('#needed_players').addClass('fieldError')
    }
    const re = /[^a-zA-Z0-9\s]/;
    if (re.test(created_by) || created_by.length === 0) {
      wasThereAnError ++;   
      $('#created_by').addClass('fieldError')
    }
    if (wasThereAnError > 0) {
      console.log(wasThereAnError)
      $('#errorMessage').show()
    }
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
                    <p id="errorMessage" style={{color: 'red'}}>Please fix incorect input fields</p>
                  </th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td><input id="sport" className="resetError" onChange={ this.onInputChange.bind(this, 'sport') } value={ this.state.sport } placeholder='Sport' type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input id="rules" className="resetError" onChange={ this.onInputChange.bind(this, 'rules') } value={ this.state.rules } placeholder='Rules' type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input id="time" className="resetError" onChange={ this.onInputChange.bind(this, 'time') } value={ this.state.time }placeholder='Time' type="datetime-local" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input id="needed_players" className="resetError" onChange={ this.onInputChange.bind(this, 'needed_players') } value={ this.state.needed_players } placeholder='Needed Players' type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input id="created_by" className="resetError" onChange={ this.onInputChange.bind(this, 'created_by') } value={ this.state.created_by } placeholder='Created by' type="text" className="form-control"/></td>
                  </tr>
                </tbody>
            
              <button onClick={ this.validate.bind(this) } className="btn btn-default" type="submit">submit</button>
            </table>
          </div>
        </div> 
      </div>
    )     
  }
}
