import React, { Component } from 'react';
import { connect } from 'react-redux'

class GamesListHome extends Component {

  renderList() {
    return this.props.getGames.map((game) => {
      return (
        <div className="card card-panel hoverable" key={game.id}>
          <div className="card-title">
            <h3>Game: {game.sport}</h3>
          </div>
            <h3 class="left-align">Players Needed: {game.needed_players}</h3>
            <h4 className="center-align">Time: {game.time}</h4>
            <h4 className="center-align">Location: {game.location}</h4>
            <p className="card-text">Rules: {game.rules}</p>
          <div className="card-action">
            <a href="#">Join game</a> <p class="left-align">Host: {game.created_by}</p>
          </div>
        </div>
      )
    })
  }

  render() {
      return (
        <div>
            {this.renderList()}
        </div>
      )
    }
  }

function mapStateToProps(state) {
  return {
    getGames: state.getGames
  }
}

export default connect(mapStateToProps)(GamesListHome)