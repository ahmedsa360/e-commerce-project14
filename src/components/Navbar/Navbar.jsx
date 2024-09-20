import React, { useContext } from 'react'
import style from "./Navbar.module.css"
import { NavLink,  useNavigate } from 'react-router-dom'
import { UserContext } from '../../../../context/UserContext'

export default function Navbar() {
  let navigate = useNavigate()
  let {userToken, setUserToken} = useContext(UserContext)
  function logout(){
    localStorage.removeItem("userToken")
    setUserToken(null)
    navigate("/login")
  }
  return <>
  <nav className={`${style.bgnav} p-3`}>


      <div className=' container flex justify-between  align-items-center flex-col lg:flex-row '>

      


    <div>
      <NavLink className={` fs-3 cursor-pointer no-underline text-black` } to=""><i className={`fa-solid fa-cart-shopping ${style.colorcart}`}></i>frech cart</NavLink>
    </div>

    <div className=' mt-3 flex justify-between align-items-center gap-3'>
     {userToken != null? <>
      <NavLink className="cursor-pointer no-underline text-black" to="">Home</NavLink>
        <NavLink className="cursor-pointer no-underline text-black " to="cart">Cart</NavLink>
        <NavLink className="cursor-pointer no-underline text-black " to="wish list">Wish list</NavLink>
        <NavLink className="cursor-pointer no-underline text-black " to="products">Products</NavLink>
        <NavLink className="cursor-pointer no-underline text-black " to="categoris">Categoris</NavLink>
        <NavLink to="brands" className="cursor-pointer no-underline text-black" >Brands</NavLink>
     </>:null}
      
     
    </div>


    <div className=' md:mt-5'>
      {userToken != null ? <>
        <NavLink to="cart"><i className={`fa-solid fa-cart-shopping fs-5 cursor-pointer no-underline ${style.colornavlink} ${style.hovercart}`}></i></NavLink>
      <span onClick={logout} className={`fs-5  cursor-pointer no-underline ms-3 ${style.colornavlink}`} >log out</span>
      </>: <>
      <NavLink className={`fs-5 ms-2  cursor-pointer no-underline ${style.colornavlink}`} to="register">register</NavLink>
      <NavLink className={`fs-5 ms-2  cursor-pointer no-underline ${style.colornavlink}`} to="login">log in</NavLink>

      </>}
     
      
    </div>

    </div>



  </nav>




  </>
    
  
}
