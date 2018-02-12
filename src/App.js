import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterScreen from './Components/RegisterScreen';
import LoginScreen from './Components/LoginScreen';
import PlayScreen from './Components/PlayScreen';
import ForgotPasswordScreen from './Components/ForgotPasswordScreen';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



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
        {  // {this.state.screen===1 &&  <RegisterScreen screenValue={this.changeScreenValue}/>}
          // {this.state.screen===2 &&  <LoginScreen screenValue={this.changeScreenValue}/>}
        }
{  //         <Router>
  //   <div>
  //
  //     <Route exact path="/" component={LoginScreen}/>
  //     <Route path="/register_screen" component={RegisterScreen}/>
  // <Route path="/forgot_password_screen" component={ForgotPasswordScreen}/>
  //   </div>
  // </Router>
}
<PlayScreen/>
          </div>
      </div>
    );
  }
}

export default App;
