import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import useProducts from '../../Hooks/useProducts'

export default function Products() {
  let {data , isError , error , isLoading , isFetching} = useProducts()

if(isError){
  return <h3> {error} </h3>
 }

return <> 
<div className='row'>
  {data?.data.data.map((product)=>{
     return <div  key={product.id} className='py-4 col-lg-2 col-md-4 col-6'>
      <div className='product py-4 '>
        <Link to={`/productdetails/${product.id}`}>
        
        <img className='w-full' src={product.imageCover}  />
        <span className=' block font-light text-green-600 '>{product.category.name}</span>
       <h3 className=' text-lg font-normal text-gray-800 mb-4 '>{product.title.split(' ').slice(0,2).join(' ')}</h3>
       <div className=' flex justify-between items-center'>
        <span>{product.price} EGP</span>
        <span>{product.ratingsAverage}<i className="fa-solid fa-star text-yellow-400"></i></span>
       </div>

       <button className='btnn'>add to cart</button>
       </Link>
      </div>
  </div>
  }   )}
  
</div>
</>

  
}
