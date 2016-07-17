import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';
import { submitPlayer } from '../actions/index';
import moment from 'moment';

class SearchHome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newPlayerName: ''
    }

  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  };

  playerEntryInputChange(event) {
    this.setState({
      newPlayerName: event.target.value
    })
  };

  showNameEntry(event) {
    console.log(event.target)
    this.setState({
      newPlayerName: ''
    })

    $('.newPlayerEntry').hide()
    $(event.target).siblings('.newPlayerEntry').show()
  };

  submitNewPlayerEntry(event) {
    let uniqueId = Number($(event.target).parents('.valign-wrapper').attr('data-id'));
    for(let i = 0; i < this.props.searchGames.length; i ++) {
      if(uniqueId === this.props.searchGames[i].id) {
        let fromStringToArray = JSON.parse(this.props.searchGames[i].joinedPlayers);
        fromStringToArray.push(this.state.newPlayerName);
        
        let addedJoinedPlayer = JSON.stringify(fromStringToArray)
        
        this.props.searchGames[i].joinedPlayers = addedJoinedPlayer;
        
        this.props.searchGames[i].playersNeeded --;
        this.props.submitPlayer(this.props.searchGames[i]);
      }
    }
    this.setState({
      newPlayerName: ''
    })
    event.preventDefault()
  }

  displayJoinedPlayer(joinedPlayers) {
  let joinedPlayersArray = JSON.parse(joinedPlayers);
    return joinedPlayersArray.map((player) => {
      return (
        <li>
          {player}
        </li>
      )
    })
  }

  renderAction(playersNeeded) {
    if(playersNeeded <= 0) {
      return;
    } else {
      return(
        <div className="card-action">
          <button className="btn red waves-effect waves-light" onClick={this.showNameEntry.bind(this)} type="submit" name="action"> <i className="material-icons right">send</i>Join
            </button>
            <form className="newPlayerEntry" onSubmit={this.submitNewPlayerEntry.bind(this)}>
              <input onChange={this.playerEntryInputChange.bind(this)} value={this.state.newPlayerName} type='text' placeholder='Enter Your Name'></input>
            </form>
        </div>
      )
    }
  }

  searchedGameCards() {
    return this.props.searchGames.map((game) => {
      return(
        <div className="valign-wrapper" data-id={game.id}>
          <div className="valign center-block">

                <div className="card card-panel hoverable">
                  <div className="card-title">
                    <h3>Game: {game.sport}</h3>
                  </div>
                    <h3 className="left-align">Players Needed: {game.playersNeeded}</h3>
                    <h4 className="center-align">Time: {moment(game.time).format('MMMM Do YYYY, h:mm a')}</h4>
                    <h4 className="center-align">Location: {game.location}</h4>
                    <p className="card-text">Rules: {game.rules}</p>
                    {this.renderAction(game.playersNeeded)}
                    <p className="left-align">Host: {game.created_by}</p>
                    <ul>
                      Joined Players: {this.displayJoinedPlayer(game.joinedPlayers)}
                    </ul>
                </div>

          </div>                    
        </div>
      )
    })
  }

   gameMarkers() {
    return this.props.searchGames.map((game) => {
      return(
        <Marker
          lat={game.lat}
          lng={game.lng}
          label={'g'}
          draggable={false}
          onDragEnd={this.onDragEnd} />
      )
    })
  }

 

  render() {
    return (
      <div>

      <div id="gamesView">
        {this.searchedGameCards()}
      </div>
    
        <div id='map'>
          <Gmaps
            width={'100%'}
            height={'100%'}
            lat={this.props.determinedLocation.lat || 34.024212}
            lng={this.props.determinedLocation.lng || -118.496475}
            zoom={12}
            loadingMessage={'Be happy'}
            params={{v: '3.exp', key: 'AIzaSyAlCGs74Skpymw9LLAjkMg-8jQ1gIue9n8'}}
            onMapCreated={this.onMapCreated}>
            <Marker
              lat={this.props.determinedLocation.lat}
              lng={this.props.determinedLocation.lng}
              label={'x'}
              draggable={false}
              onDragEnd={this.onDragEnd} />
            { this.gameMarkers() }
          </Gmaps>
        </div>


      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    searchGames: state.searchGames,
    determinedLocation: state.determinedLocation
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ submitPlayer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHome)



   //          <InfoWindow
   //            lat={coords.lat}
   //            lng={coords.lng}
   //            onCloseClick={this.onCloseClick} />
   //          <Circle
   //            lat={coords.lat}
   //            lng={coords.lng}
   //            radius={500}
   //            onClick={this.onClick} />

