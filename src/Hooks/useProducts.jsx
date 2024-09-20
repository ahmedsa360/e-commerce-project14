import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useProducts() {
    function getRecent(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
       }
     
    let responseOpject  =  useQuery({
      queryKey:['recentProducts'],
      queryFn:getRecent,
      staleTime:80000,
      gcTime:3000,
      // retry: 6,
      // retryDelay:2000,
    // refetchInterval: 1000,
    // refetchIntervalInBackground:true,
    // refetchOnWindowFocus:false
    
    })
    

  return responseOpject
  
  
}
