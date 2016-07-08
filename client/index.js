import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './public/components/navBar'

class Index extends Component {
  render() {

    return(
      <div>
        <NavBar />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'))