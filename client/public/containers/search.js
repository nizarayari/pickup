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

  sportsSelect(event) {
    this.setState({
      dropDownSport: event.target.value
    })
  } 

  onLocationSubmit(event) {  
    event.preventDefault()
    let temp = this.state.locationInput;
    this.setState({
      locationInput: ''
    })
    this.props.searchGames( { sport: this.state.dropDownSport, location: this.state.locationInput } )
  }

  onLocationEnter(event) {
    console.log(this.state)
    this.setState({
      locationInput: event.target.value
    })
  }

render() {
    return (
      <div id='hi'>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({ searchGames }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search)

