import React, { useEffect, useState } from "react";
import Image1 from '../../imagenes/index-carr1.jpg'
import Slider from "react-slick";

export default function Carrousel (){
  const [imageIndex, setImageIndex] = useState(0)

  const images = [
    { url: Image1},
    { url: '2'},
    { url: '3'},
    { url: '4'},
    { url: '5'}
  ]

  /*const NextArrow = ({onClick}) => {
    return(
      <div className="slider next-slider" onClick={onClick}>
        <i class="fas fa-arrow-right"></i>
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return(
      <div className="slider prev-slider" onClick={onClick}>
        <i class="fas fa-arrow-left"></i>
      </div>
    )
  }*/

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll:  1,
      //nextArrow: <NextArrow/>,
      //prevArrow: <PrevArrow/>,
      autoplay: true,
      beforeChange: (current, next) => setImageIndex(next),
    };

    return (
    
        <Slider {...settings}>
          {images.map((img, idx) => {
            return(
              <>
            <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
              <img className="carrousel-image" src={img.url} alt="" />
            </div>
              </>
            )
          })}
        </Slider>
     

    );
}
