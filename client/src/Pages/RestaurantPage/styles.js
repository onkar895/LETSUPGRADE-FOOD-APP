import { Box,styled } from "@mui/material";

export const Left = styled(Box)(({theme})=>({


}))

export const Right = styled(Box)(({theme})=>({

    "& div":{
        display:'flex',
        flexDirection:'row',
        padding:'0.5rem',
        "& > p":{
            color: "#696b79",
        }
    },
}))
export const Bottom = styled(Box)(({theme})=>({

    padding:'1rem 2rem',
    "& div":{
        textAlign:'left',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        "& >p":{
            color:'#3d4152',
            fontWeight:'600',

        }

    }
}))
export const OrderContainer = styled(Box)(({theme})=>({
     display:'flex',
     alignItems:'center',
     gap:'7rem',
     margin:"0.2rem 0.2rem 1rem 0.2rem",
     border:'none',
     borderBottom:'1px dashed #d3d3d3'
    
}))
