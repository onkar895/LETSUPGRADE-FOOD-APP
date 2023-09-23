import { Box,styled } from "@mui/material"


export const OrderContainer = styled(Box)(({theme})=>({
     
    display:'flex',
    flexDirection:'column',
    textAlign:'left',
    border:'1px solid #d4d5d9',
    margin:"2rem 8rem",
    "& >div":{
     padding:"0.5rem 1rem",
     
    }
    
}))
export const Orders = styled(Box)(({theme})=>({
     
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
   "& div":{
    padding:'0.2rem 2rem',
    display:'flex',
    
   }
}))
export const Right = styled(Box)(({theme})=>({
     

    display:'flex',
    flexDirection:'column',
    
}))
export const Left = styled(Box)(({theme})=>({
     alignItems:'center',
    display:'flex',
    flexDirection:'column',
    
}))
export const Bottom = styled(Box)(({theme})=>({
     alignItems:'center',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
    
}))

