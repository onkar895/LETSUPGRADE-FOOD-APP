import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRestOrder } from "../../Redux/Store";
import { Left,Right, Bottom,OrderContainer } from "./styles";
import { Box,Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import { useGlobalContext } from "../../Context/Context";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export const RestaurantOrder=()=>{
    const dispatch= useDispatch();
    const restId= localStorage.getItem('UserId')

    useEffect(()=>{
        const fetchpastOrder= async()=>{
          dispatch(getRestOrder(restId))
        };fetchpastOrder();
    },[])
    const data = useSelector((state)=> state.restaurants.restOrder)

    return(
        <div>       
            <Navbar/>
            <Box style={{padding:'1rem'}}><Typography variant="h3">Orders</Typography></Box>
                  {
                    data?.order?.map((item)=>(
                        <div key={item.orderId} style={{display:'flex',flexDirection:'column',justifyContent:'space-around',margin:'2rem 2rem',border:'1px dotted rgb(240, 240, 246)',boxShadow:'5px 6px 4px 3px #F3F1EE',borderRadius:'6px',padding:"0.2rem"}}>
                            <OrderContainer style={{display:'flex',flexDirection:'row'}}>
                            <Left>
                               <Box style={{width:"10rem",border:"none"}}><img src={item.image} alt="product" style={{height:'100%',width:"100%",objectFit:'cover',borderRadius:"6px"}} /></Box>
                            </Left>
                            <Right>
                               <Box><Typography>OrderId:</Typography>&nbsp;&nbsp;<p>{item.orderId}</p></Box>
                               <Box><Typography>Product Name:</Typography>&nbsp;&nbsp;<p>{item.dish}</p></Box>
                               <Box><Typography>Quantity:</Typography>&nbsp;&nbsp;<p>{item.quantity}</p></Box>
                            </Right>
                            </OrderContainer>
                           
                            <Bottom>
                            <Box><Typography>Total Paid:</Typography>&nbsp;<CurrencyRupeeIcon fontSize="11px"/>&nbsp;<Typography>{item.amount}</Typography></Box>
                            </Bottom>
                  </div>
                    ))
                  }
        </div>

    )
}

export default RestaurantOrder