import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ren from './renderList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ren />
      </div>
    );
  }
}

export default App;
