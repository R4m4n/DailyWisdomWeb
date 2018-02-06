import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import './Styles.css'

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
       showPassword: false,
    }
  }
  handleMouseDownPassword = event => {
   event.preventDefault();
 };
  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  render() {
    return (
      <div >
        <div className="RegisterLogoDiv"><img src={require('../Images/DailyWisdomLogo.png')} style={{height:"7rem",marginTop:"15%"}}/></div>
          <div style={{marginTop:"1rem"}}>LOGIN</div>


         <TextField
          id="full-width"
          label="Email"
          type="email"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Enter email"
          className="TextFieldClass"
          fullWidth
          margin="normal"
          style={{marginLeft:"10%",marginRight:"10%",width:"80%",marginTop:"8rem"}}
        />


       <TextField
           id="adornment-password"
           type={this.state.showPassword ? 'text' : 'password'}
           value={this.state.password}
           label="Password"
           InputLabelProps={{
             shrink: true,
           }}
           placeholder="Enter password"
           fullWidth
           margin="normal"
           style={{marginLeft:"10%",width:"70%", float:"left"}}
         />
         <IconButton
           onClick={this.handleClickShowPasssword}
           onMouseDown={this.handleMouseDownPassword}
            style={{ float:"right",marginTop:"20px",marginRight:"8%"}}
         >
           {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
         </IconButton>
         <div className="ForgotPassword">
            Forgot Password
         </div>
         <div className="RegisterButton">
          Login
         </div>

         <div className="backToLogin" style={{textDecoration:"none"}}>
           <span style={{color:"#000"}}>Don't Have Account?</span> Register
         </div>
      </div>
    );
  }
}

export default LoginScreen;
