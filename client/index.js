import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './public/components/app'

import NavBar from './public/components/navBar'

// class Index extends Component {
//   render() {

//     return(
//       <div>
//         <NavBar />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('app'))
 render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  ), document.getElementById('app'))