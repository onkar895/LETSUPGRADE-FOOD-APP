import { Box,styled } from "@mui/material"


export const FormContainer = styled(Box)((theme)=> ({

        alignItems:'center',
        justifyContent:"center",
        display:"flex",
        paddingBottom:'3rem',
        
        "& div> div":{
           
            display:'flex'
        }
        

}))
export const FormInput =styled(Box)((theme)=>({

         display:'flex',
         alignItems:'center',
         justifyContent:'center',
         padding:'6px 25px',
         width:'100vw',
         gap:"10px",
         "& >input":{

            height:'1rem'

         }

}))
export const ButtonContainer = styled(Box)((theme)=>({
         justifyContent:'center',
         padding:'9px 25px',
         width:'100vw'
         
         
}))