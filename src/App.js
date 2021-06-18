import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title='Github Finder' />
        <div className="container">
          <Users />
        </div>
      </div>
    )
  }
}


export default App;
