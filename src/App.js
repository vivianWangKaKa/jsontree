import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JsonTree from './jsonTree.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Json Tree Demo</h1>
        </header>
        <div className='PageBody'>
        <JsonTree/>
        <div>test</div>
        </div>
      </div>
    );
  }
}

export default App;
