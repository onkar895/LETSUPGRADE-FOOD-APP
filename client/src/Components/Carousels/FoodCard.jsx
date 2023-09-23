
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProducts } from "../../Redux/Store";
import {useNavigate} from 'react-router-dom'
import { Typography,Grid,Box, Container} from "@mui/material";
import { Left } from "../../Pages/RestProfile/styles";
import { CardContainer } from "./Styles";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarsIcon from '@mui/icons-material/Stars';



export const FoodCard = () => {
     
  const navigate= useNavigate()
  const data = useSelector(state=> state.restaurants.allrestaurants)
  
  const dispatch = useDispatch();
  useEffect(()=>{
     
    dispatch(GetAllProducts())
    
       
  },[])

  return (

       
    <Container sx={{ py: 8 }} maxWidth="md">
    <Box style={{ display: 'flex', flexDirection: 'row' }}>
      <Grid container spacing={1}>
      <Typography variant="h4" style={{ textAlign: 'left', marginLeft: '4rem' }}>Restaurants with online food delivery in Lucknow</Typography>
        {data?.map((item) => (
          <Grid item key={item._id} xs={12} sm={4} md={4} lg={3}>
            <CardContainer onClick={() => navigate(`/Restaurant/${item._id}`)}>
              <CardMedia component="div" sx={{height:"10rem",
                overflowY: "hidden",
                padding:'5px 8px',
                width: '100%',}}>
                <img src={item.image} alt="This is a product" style={{ height: "100%", width: "100%", objectFit: 'cover', borderRadius:'10px'}} />
              </CardMedia>
              <CardContent sx={{ flexGrow: 1 ,whiteSpace:'nowrap'} }>
                <Typography gutterBottom variant="h6" component="h6" style={{color:"rgba(2, 6, 12, 0.75)",fontWeight:'700',letterSpacing:"-0.3px"}}>
                  {item.name}
                </Typography>
                <Box style={{ alignItems: 'center', display: 'flex' }}>
                  <StarsIcon style={{ color: "green" }} />&nbsp;&nbsp;<Typography>4.1</Typography>
                </Box>
                <Typography>{item.categories}</Typography>
                <Typography>{item.orgin}</Typography>
              </CardContent>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
  
    
    
    )
    };
     
    
export default FoodCard