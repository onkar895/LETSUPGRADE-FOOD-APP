/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navbar from "../../Components/Header/Navbar";
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from "react-redux";
import { GetRestaurant } from "../../Redux/Store";
import { useNavigate, useParams } from 'react-router-dom'
import { ImageContainer, Product, Left, Right, SellerHead, BoxContainer, Top, BoxDropdown } from "../styles";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AddToCart } from "../../Redux/Actions";
import { toast } from "react-toastify";


export const RestaurantPage = () => {

   const userId = localStorage.getItem('userId') //this is user Id
   const id = useParams(); //this is restaurant id
   const dispatch = useDispatch();
   const restId = useParams();

   const restroId = restId.id

   useEffect(() => {
      dispatch(GetRestaurant(id))

   }, [id])

   const navigate = useNavigate();
   const data = useSelector((state) => state.restaurants.Singlerestaurant)

   const [toggle, setToggle] = useState(true)


   const AddproductstoCart = async ({ productId, productName, productQuantity, productPrice, productImage, userId, restroId }) => {

      const response = await AddToCart({ productId, productName, productQuantity, productPrice, productImage, userId, restroId })

      if (response) {
         if (response.data.error) {
            toast.error(response.data.error)
         } else if (response.data.success) {
            toast.success(response.data.success)
            navigate('/cart')
         }
      }
      else {
         toast.error(response.data.error)
      }

   }
   return (
      <>
         <Navbar />
         <div className="SingleRest">
            <div className="header">

               <div><Typography variant="h5" sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>{data.name}</Typography></div>

               <div className="subheader" style={{ display: 'flex' }}><span><Typography sx={{ color: 'black', fontFamily: "Trebuchet MS", }}>{data.origin}</Typography><Typography sx={{ color: 'black', fontFamily: "Trebuchet MS", fontSize: '14px' }}>{data.categories}</Typography></span>&nbsp;
               </div>
               <div><span style={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>{data.landmark}</span></div>
            </div>

            <div className="Downheader">
               <div><AccessTimeIcon />&nbsp;&nbsp;<Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>38 mins</Typography></div>
               <div><CurrencyRupeeIcon />&nbsp;&nbsp;<Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>250 for two</Typography></div>
            </div>



            <div style={{ display: 'flex', flexDirection: "column" }}>

               {(!toggle) ?

                  <BoxContainer style={{ height: "7rem", fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Recommended&nbsp;({data?.products?.length})<KeyboardArrowDownIcon sx={{ cursor: "pointer" }} onClick={() => setToggle(true)} /></BoxContainer> :
                  <BoxDropdown>
                     <Top style={{ textAlign: 'left', fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Recommended<KeyboardArrowUpIcon sx={{ cursor: "pointer" }} onClick={() => setToggle(false)} /></Top>
                     {

                        data.products?.map((item) => (

                           <Product key={item._id} sx={{ display: 'flex', alignItems: 'center' }}>

                              <Left>
                                 <div><SellerHead><RadioButtonCheckedIcon sx={{ fontSize: '14px', color: 'green' }} />&nbsp;<StarIcon sx={{ color: "orange", fontSize: '15px' }} /><Typography fontSize={"small"} color={"orange"}>Bestseller</Typography></SellerHead>
                                    <div><Typography>{item.name}</Typography></div>
                                    <div style={{ display: "flex", alignItems: "center" }}><CurrencyRupeeIcon sx={{ fontSize: "16px" }} /><Typography>{item.price}</Typography></div></div>
                                 <div><span>{item.description}</span>
                                 </div>
                              </Left>
                              <Right>
                                 <ImageContainer>
                                    <div className="imageBox"><img src={item.image} alt=" " /></div>
                                    <Button variant="contained" color="warning" sx={{ margin: '10px 30px 0 0', width: '10vw' }} onClick={() => AddproductstoCart({
                                       productId: item._id, productName: item.name, productQuantity: item.quantity, productPrice:
                                          item.price, productImage: item.image, userId, restroId
                                    })}>Add</Button>

                                 </ImageContainer>
                              </Right>

                           </Product>))
                     }

                  </BoxDropdown>}


            </div>
         </div>
      </>
   )

}

export default RestaurantPage;