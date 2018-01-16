import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, SVGIcon } from 'react-md';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Application</h1>
        </header>
        {/*<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
       <div className="buttons__group">            
            <Button>Employees</Button>
            <Button>Departments</Button>
      </div>    
      </div>   
    );
  }
}

export default App;
