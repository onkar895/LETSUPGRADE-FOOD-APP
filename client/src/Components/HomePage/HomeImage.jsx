/* eslint-disable no-unused-vars */
import React from 'react'
import FoodImage from '../../assets/FoodImage.png'
import { Box, styled, Typography } from '@mui/material'

const MainContainer = styled(Box)`
display : flex;
align-items : center;
justify-content:  space-between;
font-family: "Trebuchet MS";
margin-top: 6.3rem;
background-image: linear-gradient(to top, rgba(238, 194, 174, 0) 0%, rgba(230, 99, 103, 0.2) 100%);

& > div {
  & img {
    width : 40vw;
  }
}
`

const InfoContainer = styled(Box)`
margin-left : 7rem;

& > h1 {
  font-size : 50px;

  & span {
     color : rgb(211,47,47);
  }
}

& > div > p {
  font-size : 20px;
  font-family: "Trebuchet MS";
}
`

const OrderBox = styled(Box)`
  font-size : 20px;
  color : rgb(211,47,47);
  margin-top : 10px;
`

const HomeImage = () => {
  return (
    <MainContainer>
      <InfoContainer>
        <h1>We Deliver Delicious  <br /> & Healthy  <span>Food</span></h1>
        <div>
          <Typography>Our job is to filling your hunger with delicious food</Typography>
          <Typography>and with fast and free delivery.</Typography>
        </div>
        <OrderBox>
          <h3>Order Online to get <span>40% OFF...</span></h3>
        </OrderBox>
      </InfoContainer>
      <div>
        <img src={FoodImage} alt="FoodImage" />
      </div>
    </MainContainer>
  )
}

export default HomeImage
