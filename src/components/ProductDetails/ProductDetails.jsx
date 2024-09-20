import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './ProductDetail.module.css'
import Slider from "react-slick";
export default function ProductDetails() {
    let {id} = useParams();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    const [productDetails,setProductDetails] = useState(null)
   

    function getProductDetails(id){
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        .then((res)=>{
        
            setProductDetails(res.data.data)
           
           
        })
        .catch((error)=>{

        })
    }



    useEffect(() => {
    getProductDetails(id);
    }, []);

  return <>
  <div className='row'>


  <div className=' col-12 col-lg-4'>
  <Slider {...settings}>
   {productDetails?.images.map((src)=>   { return <img className=' w-full' src={src} alt={productDetails?.title} />})}
    </Slider>
  
  </div>

  <div className='col-12 col-lg-8 p-6'>
 <h1 className=' text-lg font-normal text-gray-950'>{productDetails?.title}</h1>
 <p className=' text-gray-600 font-light mt-4'>{productDetails?.description}</p>
 <div className=' flex justify-between items-center'>
          <span>{productDetails?.price} EGP</span>
          <span>{productDetails?.ratingsAverage}<i className="fa-solid fa-star text-yellow-400"></i></span>
         </div>
           <div className=' flex justify-between items-center mt-4'>
           <button className={style.btn}>+ Add</button>
           <i className="fa-solid fa-heart fs-3"></i>
           </div>
         
  </div>
 

  </div>
  
  </>
}