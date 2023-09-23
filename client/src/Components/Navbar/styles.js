import styled from "@emotion/styled";
import {Box } from '@mui/material'



export const Nav = styled(Box)((theme)=>({
      
    display:'flex',
    width:"100vw",
    padding:'8px 12px',
   justifyContent:'space-around',
    alignItems:'center',
    position:'static',
    background:"white",
    boxShadow:'3px 3px 6px 3px #888888',
    gap:'20px',
    "& div":{
       display:'flex',
       width:'100%',
       alignItems:'center',

    },
    "& input":{
       width:'100%',
    },
    "& div > a":{
       fontSize:"14px",
       textDecoration:'none',
       padding:'0 1rem',
       // whiteSpace:'nowrap',
       display:'flex',
       flexDirection:'row',
       textDecoration:'none',
       color:'black',
       
       
    },
    '& div > svg':{
       fontSize:'1.5rem',

    },
    '@media screen and (max-width: 768px)': {
       flexDirection: 'column', 
       alignItems: 'left',
     },
     '@media screen and (max-width: 468)': {
       flexDirection: 'column', 
       alignItems: 'left', 
       '& div > a': {
          display:'flex',
          textDecoration:'none',
          color:'black',
          "& input":{width:"100%"}
   },
     },
   
}))




export const LogoContainer = styled(Box)((theme)=>({

    "img" : {
        width:"9rem",
        
    }
    
}))
export const SearchBar = styled(Box)((theme)=>({
        padding:'5px',
        height:'40px',
        border:'1px solid #737373',
        borderRadius:'1.3rem',
        

        "& div":{
              display:'flex',
              textDecoration:'none',
              color:'Black', 
                
        },

       "& div >input":{
              border:"none",
              outline:'none',
              color:'#737373',
              paddingLeft:"5px"
       },
}))
export const Offers = styled(Box)((theme)=>({

}))

export const SignIn = styled(Box)((theme)=>({
       
}))

export const Help = styled(Box)((theme)=>({

}))
export const Cart = styled(Box)((theme)=>({

}))
export const Seller = styled(Box)((theme)=>({
      
}))
export const Logout = styled(Box)((theme)=>({

}))

