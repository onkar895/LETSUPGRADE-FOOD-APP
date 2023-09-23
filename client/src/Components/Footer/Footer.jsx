import {Typography,Box } from "@mui/material";
import {Grid} from "@mui/material"
import { Link } from "react-router-dom";
import {Container,BoxContainer } from "./Styles";
import { ForRestaurants, About,Learn,Social } from "../../assets/data";



export const Footer = () =>{



     return(
        <Container>
            <Grid container rowSpacing={4}> 
            <Grid item lg={3} xs={12} md={4} sm={6}>
                                      
                                      <BoxContainer>
                                      <Typography variant="h5">ABOUT US</Typography>
                                        {
                                        
                                        About.map((link)=>(
                                            <Link key={link.id}>
                                                {link.name}
                                            </Link>
                                        ))
                                    }
                                      </BoxContainer>
                                       
                                    
                  </Grid>
                  
                  <Grid item lg={3} xs={12} md={4} sm={6}>
                                        <BoxContainer>
                                            <Typography variant="h5">FOR RESTAURANTS</Typography>
                                    {
                                         ForRestaurants.map((link)=>(
                                            <Link key={link.id}>
                                                {link.name}
                                            </Link>
                                         ))
                                    }
                                    </BoxContainer>
                </Grid>
                
                <Grid item lg={3} xs={12} md={4} sm={6}>
                                        <BoxContainer>
                                            <Typography variant="h5">LEARN MORE</Typography>
                                    {
                                        Learn.map((link)=>(
                                            <Link key={link.id}>{link.name}</Link>
                                        ))
                                    }
                                    </BoxContainer>
                </Grid>
                

                <Grid item lg={3} xs={12} md={4} sm={6}>
                                     <BoxContainer>
                                      <Typography variant="h5">SOCIAL</Typography>
                                      {
                                          Social.map((link)=>(
                                          <Link key={link.id}>{link.name}</Link>
                                          ))
                                      }
                                     </BoxContainer>
                </Grid>
                  
            </Grid>
        </Container>

     )
}

export default Footer;