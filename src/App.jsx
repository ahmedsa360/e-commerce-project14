import React from 'react'
import {createBrowserRouter,  RouterProvider } from "react-router-dom"
import Layout from './components/Layout/Layout'
import Brands from './components/Brands/Brands'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { UserContextProvider } from '../../context/UserContext'
import Productedroute from './components/Productedroute/Productedroute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Products from './components/Products/Products'
import Categoris from './components/Categoris/Categoris'
import CartContextProvider from '../../context/CartContext'
import Cart from './components/Cart/Cart'
import toast, {Toaster} from 'react-hot-toast'


ReactQueryDevtools
let Query = new QueryClient();


export default function App() {
  let x = createBrowserRouter([
     {path: "" , element: <Layout/>,children:[
     {index:true , element:<Productedroute><Home/></Productedroute>},
     {path: "brands" , element:<Productedroute><Brands/></Productedroute>},
     {path:"cart" , element:<Productedroute><Cart/></Productedroute>},
     {path:"products" , element:<Productedroute><Products/></Productedroute>},
     {path:"categoris" , element:<Productedroute><Categoris/></Productedroute>},
     {path: "productdetails/:id/" , element:<Productedroute><ProductDetails/></Productedroute>},
     {path:"register" , element:<Register/>},
     {path:"login" , element:<Login/>},
     
     
    ]}
  ])

  return <>
  <QueryClientProvider client={Query}>
  <UserContextProvider>
    <CartContextProvider>
    <RouterProvider router={x}></RouterProvider>
  <ReactQueryDevtools/>
  <Toaster/>
  </CartContextProvider>
  </UserContextProvider>
  </QueryClientProvider>
  </>
}


