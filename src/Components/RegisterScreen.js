import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import './Styles.css';
import axios from 'axios';


class RegisterScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{
      username:'',
      email:'',
      password:'',
    },
       showPassword: false,
       message:{},
    }
  }
  handleMouseDownPassword = event => {
   event.preventDefault();
 };
  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleRegisterClick=()=>{

    let {user} = this.state;

     let formData = new FormData();

     formData.append('email',user.email);
     formData.append('password',user.password);
     formData.append('username',user.username);
     formData.append('device_type',1);
     formData.append('device_token',123456);

     const data=JSON.stringify(formData);

     axios.post('http://dailywisdoms.com/backend/app/api/register', formData)
     .then((response)=> {
        this.setState({
          message:response.data
        });
        console.log("response   ",response.data);
      })
      .catch(function (error) {
        console.log("error   ",error);
      });
  }

  handleChange = (key, event) => {
    let {user} = this.state;
    user[key] = event.target.value;

    this.setState({ user });
  }


  render() {
    return (
      <div >
        <div className="RegisterLogoDiv"><img src={require('../Images/DailyWisdomLogo.png')} style={{height:"7rem",marginTop:"15%"}}/></div>
          <div style={{marginTop:"1rem"}}>REGISTER</div>

          <TextField
           id="full-width"
           label="User Name"
           InputLabelProps={{
             shrink: true,
           }}
           placeholder="Enter username"
           className="TextFieldClass"
           fullWidth
           margin="normal"
           onChange={this.handleChange.bind(this, 'username')}
           style={{marginLeft:"10%",marginRight:"10%",width:"80%"}}
         />
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
          onChange={this.handleChange.bind(this, 'email')}
          style={{marginLeft:"10%",marginRight:"10%",width:"80%"}}
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
           onChange={this.handleChange.bind(this, 'password')}
           style={{marginLeft:"10%",width:"70%", float:"left"}}
         />
         <IconButton
           onClick={this.handleClickShowPasssword}
           onMouseDown={this.handleMouseDownPassword}
            style={{ float:"right",marginTop:"20px",marginRight:"8%"}}
         >
           {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
         </IconButton>

         <div className="RegisterButton" onClick={this.handleRegisterClick}>
          Register
         </div>

         <div className="backToLogin" onClick={()=>this.props.screenValue(2)}>
           Back to Login
         </div>
      </div>
    );
  }
}

export default RegisterScreen;
