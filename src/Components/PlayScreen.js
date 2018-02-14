import React, { Component } from 'react';
import Slider from 'react-slick';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Sound from 'react-sound';
import axios from 'axios';

class PlayScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      listData:[],
      message:{},
      index:0,
    }
  }

  nextClick=(e)=>{
this.setState({index:e})
console.log(e);
}


goToHistory=()=>{
  this.props.history.push('/history');
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

  render() {
    var settings = {
  centerPadding: '0rem',
    centerMode: true,
     speed: 500,
     infinite:false,
     slidesToShow: 3,
     focusOnSelect:true,
     slidesToScroll: 1,
     adaptiveHeight:false,
     afterChange: this.nextClick,
   };
    return (
      <div>
        <div style={{height:"3rem"}}>
          <i class="material-icons" style={{width:"2rem", float:"left", color:"#99a3b5", marginTop:"10px", cursor:"pointer"}} onClick={this.goToHistory}>format_list_bulleted</i>
          <Typography style={{color:"#99a3b5",width:"80%",float:"left",marginLeft:"5%",fontSize:"1.5rem", marginTop:"10px"}}>
             Daily Wisdom
           </Typography>

          <img src={require("../Images/settings.png")} style={{width:"2rem", float:"right", cursor:"pointer"}} />
        </div>
        <Slider {...settings}>

         { this.state.message.response && ( this.state.message.response.map((item,key)=>
             <div className="slickItems" ><h3>{item.title}</h3>

              </div>
           )
         )
         }
       </Slider>
      {this.state.message.response && <Sound
          url={this.state.message.response[this.state.index].audio_path}
          playStatus={Sound.status.PLAYING}
        />}

      </div>
    );
  }
}

export default PlayScreen;
