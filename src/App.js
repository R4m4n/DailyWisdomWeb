import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterScreen from './Components/RegisterScreen';
import LoginScreen from './Components/LoginScreen';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mainContainer">
            <LoginScreen />
          </div>
      </div>
    );
  }
}

export default App;
