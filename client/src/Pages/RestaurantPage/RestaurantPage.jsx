import { Box,Typography,Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navbar from "../../Components/Navbar/Navbar";
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from "react-redux";
import { GetRestaurant } from "../../Redux/Store";
import {useNavigate, useParams} from 'react-router-dom'
import { ImageContainer,Product,Left,Right,SellerHead,BoxContainer,Top,BoxDropdown } from "../styles";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AddToCart } from "../../Redux/Actions";
import { toast } from "react-toastify";





export const RestaurantPage = () => {
    
    const userId = localStorage.getItem('userId') //this is user Id
    const id= useParams(); //this is restaurant id
    const dispatch= useDispatch();
    const restId= useParams(); 
    const[cartItem,setCartItem]= useState();
    
    const restroId= restId.id

    useEffect(()=>{     
       dispatch(GetRestaurant(id))

    },[id])

    const navigate = useNavigate();
    const data = useSelector((state)=>state.restaurants.Singlerestaurant)

    const [toggle,setToggle] = useState(false)
    

    const AddproductstoCart = async({productId,productName,productQuantity,productPrice,productImage,userId,restroId})=>{

       const response= await AddToCart({productId,productName,productQuantity,productPrice,productImage,userId,restroId})
      
       if(response){
         if(response.data.error){
            toast.error(response.data.error)
         }else if(response.data.success){
            toast.success(response.data.success)
            navigate('/cart')
         }
       }
       else{
            toast.error(response.data.error)
       }
       
    }
    return(
     <>
        <Navbar/>
        <div className="SingleRest">       
                <div className="header">
                      
                      <div><Typography variant="h5">{data.name}</Typography></div>
                      <div className="subheader"style={{display:'flex'}}><span>{data.categories}</span>&nbsp;<span>{data.origin}</span></div>
                      <div><span>{data.landmark}</span></div>
                      <div className="deliver" style={{display:"flex",flexDirection:'row'}}><DeliveryDiningIcon/>&nbsp;&nbsp;<span>Based on distance, an additional delivery fee will apply</span></div>  
               </div>
              
               <div className="Downheader">
                           <div><AccessTimeIcon/>&nbsp;&nbsp;<Typography>42 mins</Typography></div>
                           <div><CurrencyRupeeIcon/>&nbsp;&nbsp;<Typography>400 for two</Typography></div>
                   </div>


                   
                   <div style={{display:'flex',flexDirection:"column"}}>
                    
                       {(!toggle )? 
                       
                               <BoxContainer style={{height:"7rem"}}>Recommended&nbsp;({data?.products?.length})<KeyboardArrowDownIcon sx={{cursor:"pointer"}} onClick={()=>setToggle(true)}/></BoxContainer>:
                               <BoxDropdown>
                                       <Top style={{textAlign:'left'}}>Recommended<KeyboardArrowUpIcon sx={{cursor:"pointer"}} onClick={()=>setToggle(false)}/></Top>
                                    {
                                      
                                         data.products.map((item)=>(
                                             
                                                   <Product key={item._id}>
 
                                                   <Left>
                                                            <div><SellerHead><RadioButtonCheckedIcon sx={{fontSize:'14px',color:'green'}}/>&nbsp;<StarIcon sx={{color:"orange",fontSize:'15px'}}/><Typography fontSize={"small"} color={"orange"}>Bestseller</Typography></SellerHead>
                                                            <div><Typography>{item.name}</Typography></div>
                                                            <div style={{display:"flex",alignItems:"center"}}><CurrencyRupeeIcon sx={{fontSize:"16px"}}/><Typography>{item.price}</Typography></div></div>
                                                            <div><span>{item.description}</span>
                                                            </div>
                                                   </Left>
                                                   <Right>
                                                       <ImageContainer>
                                                           <div className="imageBox"><img src={item.image} alt=" " /></div>
                                                           <Button variant="contained" onClick={()=>AddproductstoCart({productId:item._id,productName:item.name,productQuantity:item.quantity,productPrice:
                                                                    item.price, productImage:item.image,userId,restroId})}>Add</Button>

                                                       </ImageContainer>
                                                   </Right>
                                               
                                              </Product>))
}
   
                            </BoxDropdown>}
                
      
                   </div>
                   <div className="Footer">
                       <div className="Footerhead">
                        <div className="imageContainer"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" alt="This is logo" style={{width:'100%',height:'100%',objectFit:"cover"}}/></div><span>License No. 2345464646</span></div>
                   
                       <div className="Subfooter">
                         <div><Typography>(Outlet:Location)</Typography></div>
                         <div style={{display:"flex", flexDirection:"row"}}><LocationOnIcon/>&nbsp;&nbsp;Location</div>
                        </div>
                   </div>


        </div>
        </>
    )

}

export default RestaurantPage;