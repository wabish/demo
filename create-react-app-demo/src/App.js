import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aleter from "./componets/aleter";

class App extends Component {
   doSomething(evt){
     alert("asdfasdf");
   }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Aleter isOn={true} />
        </p>
      </div>
    );
  }
}

export default App;
