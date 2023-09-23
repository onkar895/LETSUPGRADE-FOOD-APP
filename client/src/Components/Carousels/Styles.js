import { Box, styled } from "@mui/material";

export const CarouselContainer = styled(Box)((theme) => ({}));

export const CardContainer = styled(Box)(({ theme }) => ({
       
       height: "100%",
       width: "100%",
       display: "flex",
       flexDirection: "column",
       textAlign: "left",
       cursor: "pointer",
     
       "&:hover": {
         transform: "scale(0.9)",
         transition: "all 0.05s ease 0s",
         overflow: "hidden",
       },
       "& div p": {
         color: "#93959f",
         fontSize: "1rem",
         alignItems: "center",
       },
}));
