import React, { Component } from 'react';
import { connect } from 'react-redux'

class GamesListHome extends Component {

  renderList() {
    return this.props.getGames.map((game) => {
      return (
        <li 
        key={game.id}>
        {game.sport}
        </li>
      )
    })
  }

  render() {
    console.log(this.props.getGames, 'getGames console.log')
      return (
        <ul>
          {this.renderList()}
        </ul>
      )
    }
  }

function mapStateToProps(state) {
  return {
    getGames: state.getGames
  }
}

export default connect(mapStateToProps)(GamesListHome)