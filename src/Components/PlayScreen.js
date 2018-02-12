import React, { Component } from 'react';
import Slider from 'react-slick';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';

class PlayScreen extends Component {
  nextClick=(e)=>{

console.log(e);
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
          <i class="material-icons" style={{width:"2rem", float:"left", color:"#99a3b5", marginTop:"10px", cursor:"pointer"}}>format_list_bulleted</i>
          <Typography style={{color:"#99a3b5",width:"80%",float:"left",marginLeft:"5%",fontSize:"1.5rem", marginTop:"10px"}}>
             Daily Wisdom
           </Typography>

          <img src={require("../Images/settings.png")} style={{width:"2rem", float:"right", cursor:"pointer"}} />
        </div>
        <Slider {...settings}>
         <div className="slickItems" ><h3>1</h3></div>
         <div className="slickItems" ><h3>2</h3></div>
         <div className="slickItems" ><h3>3</h3></div>
         <div className="slickItems" ><h3>4</h3></div>
         <div className="slickItems" ><h3>5</h3></div>
         <div className="slickItems" ><h3>6</h3></div>
       </Slider>
      </div>
    );
  }
}

export default PlayScreen;
