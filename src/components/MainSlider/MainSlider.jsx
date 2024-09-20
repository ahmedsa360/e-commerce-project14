import React from 'react'
import bag from '../../assets/bag1.jpg'
import chair from '../../assets/chair.jpg'
import adidas from '../../assets/adidas.jpg'
import maice from '../../assets/maice.jpg'
import Slider from "react-slick";
export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return <>
  <div className='row'>
    <div className='col-lg-6 col-12 mb-5'>
    <Slider {...settings}>
    <img className=' m-auto  h-[600px] ' src={bag} alt="" />
    <img className=' h-[600px]' src={chair} alt="" />
    </Slider>
  
       
    </div>
    <div className='  col-lg-6 col-12'>
    <img src={adidas} alt="" />
    <img src={maice} alt="" />
    </div>
  </div>
  </>
}
