import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const Main=styled(Box)((theme)=>({
    display:'flex',
    flexDirection:"column",
    justifyContent:"space-between"}))

export const ImageContainer= styled(Box)(({theme})=>({
    width:'100%',
    padding:'2rem 4rem',
    position:'relative',
    
  
    "&>div>img":{
        width:'100%',
        height:'100%',
        objectFit:'cover',
        borderRadius:'9px'
    }


}))
export const Product= styled(Box)(({theme})=>({
          
       display:'flex',
       justifyContent:'space-between',
       width:'100%',
       border:'none',
       borderBottom:'1px solid #d3d3d3',
       
       }
    
))
export const Left= styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    textAlign:'left',
    width:"60%",
    padding:"0.5rem 1rem",
    "& >div>span":{
        font:"12px",
        color:"#93959f",
    },
    '& >div':{
       padding:'1rem 1rem' 
    }
  

}))
export const Right= styled(Box)(({theme})=>({
    padding:'0.5rem 1rem',
    width:"40%",
   
}))
export const SellerHead= styled(Box)(({theme})=>({
display:'flex',
alignItems:'center',
"& p":{
    color:'orange',
    fontSize:"12px"
}

}))

export const BoxContainer =styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-between'
}))
export const BoxDropdown =styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:'column',
    justifyContent:'space-between'
}))
export const Top =styled(Box)(({theme})=>({
   display:"flex",
   flexDirection:"row",
   justifyContent:'space-between'
}))