import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import './Styles.css';
import is from 'is_js';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';


class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
       showPassword: false,
       user:{
       email:'',
       password:'',
     },
     validate:{

       email:true,
       password:true,
       isemail:true,
     },
     message:{},
     Login:false
    }
  }
  handleMouseDownPassword = event => {
   event.preventDefault();
 };
  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };


  handleLoginClick=()=>{
    let {user,validate} = this.state;


      if (is.empty(user['email'])){
        validate['email']=false;
      }else {
        if (!is.email(user['email'])) {
          validate['isemail']=false;
        }else {
          validate['isemail']=true;
        }
      }

      if (is.empty(user['password']))
      validate['password']=false;

this.setState({ validate });
  if (!validate['email'] || !validate['isemail'] || !validate['password']) {
    console.log("NOT VALIDATED");
  }else{
     let formData = new FormData();

     formData.append('email',user.email);
     formData.append('password',user.password);
     formData.append('device_token',123456789);

     const data=JSON.stringify(formData);

     axios.post('http://dailywisdoms.com/backend/app/api/auth/login', formData)
     .then((response)=> {
        this.setState({
          message:response.data
        });
        console.log("response   ",response.data, "message   ",this.state.message.status);
        if (this.state.message.status===200) {
          this.props.history.push('/play_screen');
        }
      })
      .catch(function (error) {
        console.log("error   ",error);
      });
  }

}

handleChange = (key, event) => {
  let {user,validate} = this.state;
  user[key] = event.target.value;


  if (!is.empty(user['password']))
      validate['password']=true;
  if (!is.empty(user['email']))
      validate['email']=true;

  this.setState({ user });
}



  render() {
    var Errormessage = ({message}) => (
      <div>
      {!(message==='Password cannot be empty') &&     <div className="Invalidity">{message}</div>}

    {message==='Password cannot be empty' &&     <div className="Invalidity" style={{marginTop:"5rem"}}>{message}</div>}
    </div>
    );

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
          onChange={this.handleChange.bind(this, 'email')}
          style={{marginLeft:"10%",marginRight:"10%",width:"80%",marginTop:"8rem"}}
        />
        {!this.state.validate['email'] &&   <Errormessage message="Email cannot be empty"/>}
        {!this.state.validate['isemail'] &&   <Errormessage message="Please enter proper email address"/>}

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

           {!this.state.validate['password'] &&   <Errormessage message="Password cannot be empty" />}
        <Link to="/forgot_password_screen" style={{textDecoration:"none"}} >
         <div className="ForgotPassword">
            Forgot Password
         </div>
         </Link>
         <div className="RegisterButton" onClick={this.handleLoginClick}>
          Login
         </div>

      {  <div>
          Invalid Credentials! Please try again!
        </div>}
    {  //    <div className="RegisterGreen" style={{textDecoration:"none"}} >
      //      <span style={{color:"#000"}}>Don't Have Account?</span> <span onClick={()=>this.props.screenValue(1)}>Register</span>
      //    </div>
}
 <Link to="/register_screen" style={{textDecoration:"none"}} ><div className="RegisterGreen" style={{textDecoration:"none"}} >
       <span style={{color:"#000"}}>Don't Have Account?</span> <span>Register</span>
      </div></Link>
       </div>
    );
  }
}

export default LoginScreen;
