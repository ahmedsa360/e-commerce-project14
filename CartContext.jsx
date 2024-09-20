import { createContext, useContext } from "react";
import axios from "axios"


export let CartContext = createContext();

export default function CartContextProvider(props){

    let headers = {
        token : localStorage.getItem('userToken')
    }
    
    function getLoggedUserCart(){
     return    axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {
            headers
        }).then(   (response)=> response   )
        .catch(  (error)=> error  )
    }

    function addProductToCart(productId){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            productId: productId
        } , {
            headers
        }).then(   (response)=> response   )
        .catch(  (error)=> error  )
    }

   return <CartContext.Provider value={ {getLoggedUserCart , addProductToCart} }>
   {props.children}
   </CartContext.Provider>
}