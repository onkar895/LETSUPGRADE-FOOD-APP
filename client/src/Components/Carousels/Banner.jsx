import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BannerData } from "../../assets/data";
import { CarouselContainer } from "./Styles";

export const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    
    <CarouselContainer>

     <Typography variant="h5" style={{textAlign:"left",margin:"1rem 0 0 1.5rem",fontWeight:'700'}}>Best offers for you</Typography>   
    <Carousel
      swipeable={true}
      autoPlaySpeed={1000}
      infinite={true}

      draggable={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      keyBoardControl={true}
      customTransition="transform 0.5s ease-out"
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="carouselItem"
    >
      {
        BannerData.map((item)=>(
            <Box key={item.id} className="Items">
               <img style={{width:"100%", height:"100%",objectFit:'cover'}} src={item.Url} alt="" />
            </Box>
        ))
      }
    </Carousel>
    </CarouselContainer>


);
};

export default Banner;
