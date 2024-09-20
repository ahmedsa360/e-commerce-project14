import React from 'react'
import useProducts from '../../Hooks/useProducts'

export default function Categoris() {
  useProducts();
  let {data , isError , error , isLoading , isFetching}= useProducts()
 
  return (
    <div>
      <h1>categories</h1>
    </div>
  )
}
