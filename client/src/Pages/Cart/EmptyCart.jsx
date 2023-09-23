import { Main, TopHalf,BottomHalf,ButtonContainer } from "./styles"
import EmptyCartImage from '../../assets/EmptyCart.jpg'
import { Box,Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import CartHeader from "./CartHeader"


export const EmptyCart = () => {


    return(
       
        <Main>
          <CartHeader/>
          <TopHalf>
            <Box><img src={EmptyCartImage} alt="Empty Cart" /></Box> 
          <Box><Typography variant='h6'>Your cart is empty</Typography></Box>
          <Box><Typography>You can go to home page to view more restaurants</Typography></Box>
          </TopHalf>
          <BottomHalf>
            <ButtonContainer><Button component={Link} to={'/'} variant='contained' color="primary" sx={{backgroundColor:"orange"}}>SEE RESTAURANTS NEAR YOU</Button></ButtonContainer>
          </BottomHalf>


        </Main>


    )
}

export default EmptyCart