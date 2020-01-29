import React, { Component } from 'react';
import Auth from './components/Auth/Auth';

import './App.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Auth/>
      </div>
    );
  }
}

export default App;
