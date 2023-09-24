import { Typography } from "@mui/material";
import { Grid } from "@mui/material"
import { Link } from "react-router-dom";
import { Container, BoxContainer } from "./Styles";
import { ContactUs, About, Help, Company } from "../../assets/data";



export const Footer = () => {

    return (
        <Container>
            <Grid container rowSpacing={5}>
                <Grid item lg={3} xs={12} md={4} sm={6}>

                    <BoxContainer>
                        <Typography variant="h6">COMPANY</Typography>
                        {

                            Company.map((link) => (
                                <Link key={link.id}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </BoxContainer>
                </Grid>

                <Grid item lg={3} xs={12} md={4} sm={6}>
                    <BoxContainer>
                        <Typography variant="h6">ABOUT US</Typography>
                        {
                            About.map((link) => (
                                <Link key={link.id}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </BoxContainer>
                </Grid>

                <Grid item lg={3} xs={12} md={4} sm={6}>
                    <BoxContainer>
                        <Typography variant="h6">CONTACT US</Typography>
                        {
                            ContactUs.map((link) => (
                                <Link key={link.id}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </BoxContainer>
                </Grid>

                <Grid item lg={3} xs={12} md={4} sm={6}>
                    <BoxContainer>
                        <Typography variant="h6">HELP</Typography>
                        {
                            Help.map((link) => (
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