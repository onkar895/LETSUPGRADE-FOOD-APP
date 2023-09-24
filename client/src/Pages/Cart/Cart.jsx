/* eslint-disable no-unused-vars */
import EmptyCart from "./EmptyCart"
import CartItem from './CartItem'
import { useSelector } from "react-redux"


export const Cart = () => {

   const userId = localStorage.getItem('userId')
   const data = useSelector((state) => state.restaurants.cart)

   return (


      <>
         {!userId || data?.cart?.length === 0 ? (<EmptyCart />) :
            (<CartItem />)}
      </>
   )
}

export default Cart