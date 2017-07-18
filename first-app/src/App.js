import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter.js';
import Parent from './Components/Parent.js';

class App extends Component {
    render() {
        return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
            <Parent />
            </p>
        </div>
      );
    }
}

export default App;
