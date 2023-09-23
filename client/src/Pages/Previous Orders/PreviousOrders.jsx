import CartHeader from "../Cart/CartHeader"
import { Box,Typography } from "@mui/material"
import { OrderContainer, Right,Orders, Bottom,Left } from "./style"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react";
import { getOrder } from "../../Redux/Store"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export const PreviousOrder = () =>{
    const userId = localStorage.getItem('userId')
    const dispatch= useDispatch();
     
    useEffect(()=>{      
        
        const fetchOrder=async()=>{ 
                dispatch(getOrder(userId));
        };
        fetchOrder()

    },[userId, dispatch]) 
    
    const data = useSelector((state)=>state.restaurants.order)
    
    

    return(
        <div>
        
          <CartHeader/>
          
          <Box style={{marginTop:"5rem"}}><Typography variant='h4'>Previous Orders</Typography>
          {data?.order?.map((item)=>(
            
            <OrderContainer key={item.orderId}>
                 
            <Orders>
                <Left>
                    <Box style={{width:'15rem',height:'8rem',overflowY:'hidden'}}><img src={item.image} style={{borderRadius:'9px',height:'100%',width:"100%",objectFit:'cover'}} /></Box>
                </Left>
            <Right>
               <Box><Typography>restaurant:</Typography>&nbsp;&nbsp;{item.restname}</Box>
               <Box><Typography>place:</Typography>&nbsp;&nbsp;{item.landmark}</Box>
               <Box><Typography>order:</Typography>&nbsp;&nbsp;{item.orderId}</Box>    
            </Right>
        </Orders>
        <hr />
        <Bottom>
        <Box><Typography>{item.dish}</Typography></Box> 
        <Box style={{display:'flex', flexDirection:"row",alignItems:'center'}}><Typography>Total Paid:</Typography>&nbsp;<CurrencyRupeeIcon fontSize="11px"/>&nbsp;{item.amount}</Box>
        </Bottom>
        </OrderContainer>
            
          ))
            
         
          }
           </Box>

        </div>

    )
}

export default PreviousOrder