import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterScreen from './Components/RegisterScreen';
import LoginScreen from './Components/LoginScreen';
import PlayScreen from './Components/PlayScreen';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      screen:1,
    }
  }

changeScreenValue=(value)=>{
  this.setState({
    screen:value
  })
}

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          {this.state.screen===1 &&  <RegisterScreen screenValue={this.changeScreenValue}/>}
          {this.state.screen===2 &&  <LoginScreen screenValue={this.changeScreenValue}/>}
          </div>
      </div>
    );
  }
}

export default App;
