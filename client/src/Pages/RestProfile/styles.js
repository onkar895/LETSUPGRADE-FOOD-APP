import styled from "@emotion/styled";
import { Box} from "@mui/material";



export const FormBox = styled(Box)(({theme})=>({
   
    display:'flex',
    justifyContent:"center",
    flexDirection:'rows',
    margin:'5rem 2rem 0 2rem',
    maxWidth:"100%"
   


}))
export const BoxInput = styled(Box)(({theme})=>({
    display:'flex',
    flex:1,
     margin:'1rem 1rem 0 1rem',
    

}))
export const Left = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:'column',
    justifyContent:'center',
    // marginLeft:'4rem',
    flex:0.5,
    padding:'2rem 4rem'

}))
export const Right = styled(Box)(({theme})=>({
     padding:"0.5rem 1rem",
     margin:"1rem 0",
    flex:0.5,
    aligntItems:"center",
    display:'flex',
    flex:0.5,
    flexDirection:'column',
    justifyContent:'center',
    padding:'2rem 4rem',

}))