import { Box,styled } from "@mui/system";

export const ProductContainer = styled(Box)(({theme})=>({
    
    display:'flex',
    width:'100%',
    flexDirection:"row",
    border:"none",
    borderBottom:'1px solid rgb(240, 240, 245)',
    
    
    }))

    export const BoxInput = styled(Box)(({theme})=>({
        display:'flex',
        flex:1,
         margin:'1rem 1rem 0 1rem',
        
    
    }))
export const BoxContainer = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    flexDirection:"column",
    justifyContent:"space-between",
    textAlign:'left',
     padding:'1rem 2rem',
    verticalAlign:'center',
    
    "& div":{
             padding:'0.5rem 2rem',
             gap:'10px',
             alignItems:'center',   
                
    },

}))
export const ImageContainer = styled(Box)(({theme})=>({
    textAlign:'center',
    padding:'1rem 1rem',
   
    "& img":{
        width:'100%',
        height:'100%',
        objectFit:'cover',
    }

    
}))
export const ButtonContainer = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:'column',
    justifyContent:"space-between",
      "& button":{
        // width:'100%'
        margin:'5px',
      }
    
}))