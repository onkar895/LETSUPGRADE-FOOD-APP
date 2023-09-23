import React, { useEffect } from "react"
import { useGlobalContext } from "../../Context/Context"
import { RightSide } from "./styles"
import { useState } from "react"
import { Box, Typography } from "@mui/material"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export const Total = ({data})=> {
    const {total,setTotal} = useGlobalContext()
    const[price, setPrice] = useState(0)
    const[discount,setDiscount] = useState(0)
    
    useEffect(()=>{
        totalamount()
    },[data,total])


    const totalamount = () => {
        let price = 0;
        let discount= 0;
       
        data?.cart?.map((item)=> {
            
            return (
                  discount +=(item?.productPrice *25)/100,
                   price += item?.productPrice
                   
                   
                  
                   )
                      
        })
        setPrice(price)
        setDiscount(discount)
        setTotal(price - discount +29)
        
       }
     
    

    return(
             
           <RightSide>
           <Box><Typography variant="h5">Bill</Typography></Box>
           <Box><Typography>Product Price:&nbsp;&nbsp;</Typography><div><CurrencyRupeeIcon/>{price}</div></Box>
           <Box style={{color:'red'}}><Typography >Discount:&nbsp;&nbsp;</Typography><div><CurrencyRupeeIcon/>{discount}</div></Box>
           <Box><Typography>Delivery Charges:&nbsp;&nbsp;</Typography><div><CurrencyRupeeIcon/>{29}</div></Box>
           <hr />
           <Box><Typography>Amount to Pay:&nbsp;&nbsp;</Typography><div><CurrencyRupeeIcon/>{total}</div></Box>
       
          </RightSide>
                
    )

}

export default Total