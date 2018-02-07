import React, { Component } from 'react';
import Slider from 'react-slick';



class PlayScreen extends Component {
  render() {
    var settings = {
  centerPadding: '60px',
    centerMode: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     adaptiveHeight:false,
   };
    return (
      <div>
        <Slider {...settings}>
         <div className="slickItems"><h3>1</h3></div>
         <div className="slickItems"><h3>2</h3></div>
         <div className="slickItems"><h3>3</h3></div>
         <div className="slickItems"><h3>4</h3></div>
         <div className="slickItems"><h3>5</h3></div>
         <div className="slickItems"><h3>6</h3></div>
       </Slider>
      </div>
    );
  }
}

export default PlayScreen;
