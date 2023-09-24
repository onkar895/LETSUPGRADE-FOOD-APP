import { Main, TopHalf, BottomHalf, ButtonContainer } from "./styles"
import EmptyCartImage from '../../assets/EmptyCart.png'
import { Box, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import CartHeader from "./CartHeader"


export const EmptyCart = () => {

  return (

    <Main>
      <CartHeader />
      <TopHalf>
        <Box><img src={EmptyCartImage} alt="Empty Cart" style={{ width: '45vw' }} /></Box>
        <Box><Typography variant='h6' sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Your Cart is Empty</Typography></Box>
      </TopHalf>
      <BottomHalf>
        <ButtonContainer><Button component={Link} to={'/'} variant='contained' color="error" sx={{ backgroundColor: "red" }}><Typography sx={{ textTransform: 'capitalize', fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Explore Restaurants</Typography></Button></ButtonContainer>
      </BottomHalf>


    </Main>


  )
}

export default EmptyCart