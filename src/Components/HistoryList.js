import React, { Component } from 'react';
import Slider from 'react-slick';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import axios from 'axios';




class HistoryList extends Component {
constructor(props){
  super(props)
  this.state={
    listData:[],
    message:{}
  }
}
componentWillMount(){
  let formData = new FormData();


  formData.append('access_token','29c2c3328c097fb8e5bbf4b8da16b059');
  axios.post('http://dailywisdoms.com/backend/app/api/notification/history', formData)
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

  goToHome=()=>{
    this.props.history.push('/play_screen');
  }

render(){
    return (
      <div>
        <div style={{height:"3rem"}}>
            <img src={require("../Images/header_back_icon.png")} style={{height:"1.5rem", float:"left", cursor:"pointer",  marginTop:"15px",marginLeft:"0.5rem"}} onClick={this.goToHome} />
            <Typography style={{color:"#99a3b5",width:"80%",float:"left",marginLeft:"5%",fontSize:"1.5rem", marginTop:"10px"}}>
               Manage History
             </Typography>

          <img src={require("../Images/settings.png")} style={{width:"2rem", float:"right", cursor:"pointer"}} />
        </div>
        {!this.state.message===undefined &&(
          (this.message.status===200) && this.state.message.response.map((item,key)=>
            <div key={key}>
              <img src={require("../Images/recording_icon.png")} style={{height:"1.5rem", float:"left",marginLeft:"0.5rem"}}/>
            </div>
          )
        )
        }
      </div>
    );
  }
}

export default HistoryList;
