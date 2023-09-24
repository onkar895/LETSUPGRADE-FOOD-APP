/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProducts } from "../../Redux/Store";
import { useNavigate } from 'react-router-dom'
import { Typography, Box, styled } from "@mui/material";
import StarsIcon from '@mui/icons-material/Stars';

const FoodContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '80%',
  margin: '1rem 2.5rem',
  cursor: 'pointer',
  textAlign: 'left',
  padding: '10px',
  boxShadow: '0 0 6px 0 grey',
  borderRadius: '10px',

  ":hover": {
    filter: 'dropShadow(3px 3px 3px black)',
    cursor: 'pointer',
    transform: 'scale(0.92)',
    transition: '0.6s',
  },

  '& > div > img': {
    borderRadius: '10px',
    width: '100%',
    height: '9rem',
    objectFit: 'cover',
    filter: 'dropShadow(3px 3px 3px black)'
  },

  '& span': {
    fontFamily: "Trebuchet MS",
    color: 'black',
    fontSize: '16px',
    alignItems: 'center'

  },

}))


export const FoodCard = () => {

  const data = useSelector(state => state.restaurants.allrestaurants)

  const navigate = useNavigate()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProducts())
  }, [])

  return (
    <>
      <Typography variant="h4" style={{ textAlign: 'left', marginLeft: '4rem', fontFamily: "Trebuchet MS", fontWeight: 'bold', marginTop: '2rem' }}>Top Restaurants with online food delivery</Typography>
      <div className="FoodContainer">

        {
          data.map((item) => (
            <FoodContainer key={item._id} className="ItemsContainer"
              onClick={() => navigate(`/Restaurant/${item._id}`)}>
              <div>
                <img src={item.image} alt="rest" />
              </div>
              <Typography fontSize={"18px"} fontWeight={550} color={"#02060CBF"}>{item.name}</Typography>
              <Box style={{ alignItems: 'center', display: 'flex' }}>
                <StarsIcon style={{ color: "green" }} />&nbsp;&nbsp;
                <Typography sx={{ fontFamily: "Trebuchet MS", }}>4.4</Typography>
              </Box>
              <span>{item.categories}</span>
              <span>{item.origin}</span>
            </FoodContainer>
          ))
        }

      </div>
    </>
  )
};


export default FoodCard