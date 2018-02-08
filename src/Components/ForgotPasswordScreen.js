import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';
import is from 'is_js';
import './Styles.css';
import axios from 'axios';
import TextField from 'material-ui/TextField';


class ForgotPasswordScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{
      email:'',
    },
    validate:{
      email:true,
      isemail:true,
    },
       message:{},

    }
  }

changeScreenValue=(value)=>{
  this.setState({
    screen:value
  })
}


handleChange = (key, event) => {
  let {user,validate} = this.state;
  user[key] = event.target.value;
  if (!is.empty(user['email']))
      validate['email']=true;
  this.setState({ user });
}

handleResetClick=()=>{
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


this.setState({ validate });
if (!validate['email'] || !validate['isemail']) {
  console.log("NOT VALIDATED");
}else{
   let formData = new FormData();

   formData.append('email',user.email);

   const data=JSON.stringify(formData);

   axios.post('http://dailywisdoms.com/backend/app/api/password/reset', formData)
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
}

  render() {
    return (
      <div className="ForgotPasswordScreen">

            <div className="forgotPasswordBanner">
              Forgot Your Password?
            </div>
            <div className="forgotPasswordDes">
              Enter your email below to recieve youe new password.
            </div>
            <TextField
             id="full-width"

             type="email"
             InputLabelProps={{
               shrink: true,
             }}
             placeholder="Email/Username"
             className="ForgotPasswordTextField"
             fullWidth
             margin="normal"
             onChange={this.handleChange.bind(this, 'email')}
             style={{marginLeft:"10%",marginRight:"10%",width:"80%",marginTop:"15%"}}
           />
             {!this.state.validate['email'] &&   <div className="Invalidity">Email cannot be empty</div>}
             {!this.state.validate['isemail'] &&   <div className="Invalidity">Please enter proper email address</div>}
             <div className="ResetButton" onClick={this.handleResetClick}>
              Reset
             </div>
             <Link to="/"> <div className="backToLogin" >
                   Back to Login
                 </div></Link>
      </div>
    );
  }
}

export default ForgotPasswordScreen;
