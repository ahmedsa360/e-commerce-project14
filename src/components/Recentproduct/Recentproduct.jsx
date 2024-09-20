import React, { useContext } from 'react'
import style from "./Recentproduct.module.css"
import axios from "axios"
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { CartContext } from '../../../../context/CartContext';
import toast from 'react-hot-toast';

export default function Recentproduct() {

  let {addProductToCart} = useContext(CartContext);
 async  function addProduct(productId){
    let response = await addProductToCart(productId)
    if(response.data.status == 'success'){
      toast.success(response.data.message,{
        duration: 1000,
      })
    }else{
      toast.error(response.data.message,{
        duration:1000
      })
    }
    
    console.log(response)
  }
      
     function getRecent(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
     }
   
 let {data , isError , error , isLoading , isFetching} =  useQuery({
    queryKey:['recentProducts'],
    queryFn:getRecent,
    // staleTime: 5000
    retry: 6,
    retryDelay:2000,
    refetchInterval:3000,
    select: (data)=> data.data.data
  })
  
    // const [resentProduct, setResentProduct] = useState([]);

    // function getRecentProduct(){

        
    //     axios.get("https://ecommerce.routemisr.com/api/v1/products")
    //     .then(({data})=>{
    //          setResentProduct(data.data)
             
    //     })
    //     .catch((error)=>{

    //     })
    // }
    

    // useEffect(() => {
    // getRecentProduct()
    // }, [])
  
   if(isError){
    return <h3> {error} </h3>
   }

  return <>
  <div className='row'>
    {data?.map((product)=>{
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

         
         </Link>
         <button onClick={()=>addProduct(product.id)} className='btnn'>add to cart</button>
        </div>
    </div>
    }   )}
    
  </div>
  
  </>
}
