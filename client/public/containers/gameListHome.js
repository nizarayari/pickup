import React, { Component } from 'react';
import { connect } from 'react-redux'

class GamesListHome extends Component {

  renderList() {
    // return this.props.games.map((game) => {
    //   return (
    //     <li 
    //     key={game.id}>
    //     {game.sport}
    //     </li>
    //   )
    // })
  }

  render() {
    console.log(this.props, 'getGames console.log')
      return (
        <div>
          hi
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