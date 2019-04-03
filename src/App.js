import React, { Component } from 'react';
import Inventory from './Components/Inventory';
import Home from './Components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        This is App
        <Inventory />
        <Home />
      </div>
    );
  }
}

export default App;
