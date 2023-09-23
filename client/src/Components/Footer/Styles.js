import styled from "@emotion/styled";
import { Box} from "@mui/material";




export const Grid = styled(Box)(({theme})=>({
    
    display: "flex",
    flexDirection:'column'
    
    
    
}))

export const Container =styled(Box)(({theme})=>({
    display:"grid",
    whiteSpace: "nowrap",
    background:'black',
    textAlign:"center",
    textDecoration:'none',
    color:'black',
    width:'100%',
    padding:'1rem 2rem'

}))

export const BoxContainer= styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    padding:'0.9rem 2rem',
    "&>h5":{
        color:'white',
        padding:'0.7rem 0.1rem',
        fontWeight:'800',
        fontFamily:"Basis Grotesque Pro",
        textAlign:'left'
    },
    "& >a":{
    color:'white',
    textDecoration:'none',
    textAlign:'left',
    padding:'5px 8px'
    },
    "& >a:hover":{
        color:"orange",
        
    },
}))

export const ItemContainer =styled(Box)(({theme})=>({
    display:'flex',
    padding:'1rem 0.5rem 2rem 5rem',
       "&>div":{
            display:'flex',
            flexDirection:'column',           
    }     
}))