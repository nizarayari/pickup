import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchGames } from '../actions/index';
import $ from 'jquery';

class Search extends Component { 

  constructor(props) {
    super(props)

    this.state = {
      dropDownSport: "",
      locationInput: ""
    }
  }

  componentDidUpdate() {
    if(this.props.possibleLocations.length > 1) {
      $('.modal').show();
    }
  }

  listOfPossibleLocations() {
    console.log('inside listOfPossibleLocations')
    return this.props.possibleLocations.map((location) =>{
       return(
        <div className="listOfPossibleLocations center-align" onClick={ this.onLocationSubmit.bind(this, location.formatted_address) }>{ location.formatted_address }</div>
      )
    })
  }

  sportsSelect(event) {
    this.setState({
      dropDownSport: event.target.value
    })
  } 

  onLocationSubmit(args) {  
  let fixedLocation;
    if(typeof arguments[0] === 'string') {
      fixedLocation = arguments[0];
      arguments[1].preventDefault();
    } else {
      console.log(arguments, 'args')
      arguments[0].preventDefault()
      fixedLocation = this.state.locationInput;
      this.setState({
        locationInput: ''
      })
    }
    this.props.searchGames( { sport: this.state.dropDownSport, location: fixedLocation } )
  }

  onLocationEnter(event) {
    console.log(this.state)
    this.setState({
      locationInput: event.target.value
    })
  }

render() {
    return (
      <div>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4 className="center-align">Confirm Location</h4>
            <div>{ this.listOfPossibleLocations() }</div>
          </div>
        </div>

        <form onSubmit={this.onLocationSubmit.bind(this)}>
          <input value={this.state.locationInput} onChange={this.onLocationEnter.bind(this)} type='text' placeholder='Search'/>
          <select className='browser-default' onChange={this.sportsSelect.bind(this)}>
            <option value="default">Select Sport</option>
            <option value="baseball">Baseball</option>
            <option value="basketball">Basketball</option>
            <option value="football">Football</option>
            <option value="soccer">Soccer</option>
            <option value="tennis">Tennis</option>
          </select>
        </form>             
      </div>
    )
  }  
}

function mapStateToProps(state) {
  return {
    possibleLocations: state.possibleLocations
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ searchGames }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

