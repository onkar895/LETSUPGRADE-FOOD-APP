/* eslint-disable no-unused-vars */
import { Typography, Button, Box, styled } from "@mui/material"
import FoodVillaLogo from '../../assets/FoodVillaLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import { Link, useNavigate } from "react-router-dom";
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useCookies } from "react-cookie";
import { toast } from 'react-toastify'
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import AddIcon from '@mui/icons-material/Add';
import { useGlobalContext } from "../../Context/Context";
import Profile from "./User";


import FastfoodIcon from '@mui/icons-material/Fastfood';


const NavbarContainer = styled(Box)((theme) => ({

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "100%",
    padding: "10px 14px",
    position: 'fixed',
    zIndex: '99',
    background: "black",
    color: 'white',
    boxShadow: '0 0 6px 0 darkgray',

    "& div > a": {
        textDecoration: 'none',
    }

}))


const LogoContainer = styled(Box)((theme) => ({
    marginLeft: '10px',

    "img": {
        width: "6rem",
    }

}))

const SearchContainer = styled(Box)((theme) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    marginRight: '10rem',

    "& > div > input": {
        fontFamily: "Trebuchet MS",
        color: 'grey',
        width: '280px',
        height: '40px',
        border: 'none',
        borderRadius: '5px',
        outline: 'none',
        padding: '0px 7px'
    }

}))


const OfferContainer = styled(Box)((theme) => ({
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "Trebuchet MS",


}))

const SignInBox = styled(Box)((theme) => ({
    display: 'flex',

}))


const SellContainer = styled(Box)((theme) => ({
    display: "flex",

    "& a": {
        display: 'flex',
        flexDirection: 'row',
        textDecoration: 'none',
        color: 'black',
        fontFamily: "Trebuchet MS",
    },


}))

const CartContainer = styled(Box)((theme) => ({

    display: 'flex',
}))


const Logout = styled(Box)((theme) => ({

}))


export const Navbar = () => {

    const navigate = useNavigate()
    const [cookies, setCookies, removeCookies] = useCookies(["access_token"]);

    const handleLogout = () => {
        toast.success('Logged Out successfully')
        window.localStorage.clear("name")
        window.localStorage.clear('userId')
        removeCookies("access_token")
        navigate('/')
        setAccount(false)
        setPartner(false)
    }

    const { account, setAccount } = useGlobalContext();
    const { partner, setPartner } = useGlobalContext();

    return (

        <NavbarContainer>
            <LogoContainer>
                <Link to={'/'}><img src={FoodVillaLogo} alt="FoodVilla" /></Link>
            </LogoContainer>

            <SearchContainer>
                {

                    account ?
                        <Box>
                            <Link style={{ display: 'flex', alignItems: 'center' }}>
                                <input type="text" placeholder="Search the Food" style={{
                                    fontFamily: "Trebuchet MS", color: 'grey', width: '280px', height: '40px', border: 'none', borderRadius: '5px', outline: 'none', padding: '0px 7px',
                                }} />&nbsp;&nbsp;
                                <SearchIcon sx={{ cursor: 'pointer', color: 'white', }} />
                            </Link>
                        </Box>
                        :
                        (
                            partner ?
                                <Link to={'/ShowAll'} style={{ display: 'flex' }}>
                                    <HomeMaxIcon sx={{ cursor: 'pointer', color: 'white', }} />&nbsp;&nbsp;
                                    <Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', color: 'white', ":hover": { color: 'orange' } }}>Show All</Typography>
                                </Link>
                                :
                                <Box sx={{ display: 'flex', alignItems: 'center', padding: '0 10px', ":hover": { cursor: 'pointer', color: 'orange' } }}>
                                    <input type="text" placeholder="Search the Food" />&nbsp;&nbsp;
                                    <SearchIcon />
                                </Box>
                        )
                }
            </SearchContainer>

            <div>
                <Link to={'/'} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <HomeOutlinedIcon sx={{ color: 'white', ":hover": { color: 'orange' } }} />
                    <Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', color: 'white', ":hover": { color: 'orange' } }}>Home</Typography>
                </Link>
            </div>

            <SellContainer>
                {
                    account
                        ?
                        <Link to={'/PreviousOrder'}>
                            <FoodBankOutlinedIcon sx={{ color: 'white', ":hover": { color: 'orange' }, }} />&nbsp;&nbsp;
                            <Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', ":hover": { color: 'orange' }, color: 'white', }}>Orders</Typography>
                        </Link>
                        : (!partner || account)
                            ?
                            <Link to={"/RestSignup"}>
                                <RestaurantOutlinedIcon sx={{ color: 'white', ":hover": { color: 'orange' }, }} />&nbsp;&nbsp;
                                <Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', ":hover": { color: 'orange' }, color: 'white' }}>Restaurant</Typography>
                            </Link>
                            :
                            <Link to={'/PreviousOrder'} style={{ display: 'none' }}>
                                <FastfoodIcon />&nbsp;&nbsp;
                                <Typography>Orders</Typography>
                            </Link>
                }
            </SellContainer>

            <OfferContainer>
                {partner ?
                    <Link to={'/RestProfile'} style={{ display: "flex", alignItems: 'center', textDecoration: 'none', color: 'white', fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>
                        <AddIcon />&nbsp;&nbsp;
                        Add Dishes
                    </Link>
                    :
                    <Link style={{ display: 'flex', textDecoration: 'none', color: 'white', }}>
                        <InfoOutlinedIcon sx={{ ":hover": { color: 'orange' } }} />
                        &nbsp;&nbsp;
                        <Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', ":hover": { color: 'orange' } }}>
                            About
                        </Typography>
                    </Link>
                }
            </OfferContainer>

            <CartContainer>
                {
                    account ?
                        <Link style={{ display: 'flex', textDecoration: 'none', color: 'white' }} to={'/Cart'}>
                            <ShoppingBasketOutlinedIcon sx={{ ":hover": { color: 'orange' } }} />&nbsp;&nbsp;
                            <Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', ":hover": { color: 'orange' } }}>
                                Cart
                            </Typography>
                        </Link>
                        :
                        (partner ?
                            <Link style={{ display: 'flex', textDecoration: 'none', color: 'white' }} to={'/RestaurantOrder'}>
                                <FoodBankOutlinedIcon sx={{ ":hover": { color: 'orange' } }} />&nbsp;&nbsp;
                                <Typography sx={{ fontFamily: "Trebuchet MS", ":hover": { color: 'orange' } }}>Orders</Typography>
                            </Link>
                            :
                            <Link style={{ display: 'flex', textDecoration: 'none', color: 'white' }} to={'/Cart'}>
                                <ShoppingBasketOutlinedIcon sx={{ ":hover": { color: 'orange' } }} />&nbsp;&nbsp;
                                <Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', ":hover": { color: 'orange' } }}>Cart</Typography>
                            </Link>
                        )
                }
            </CartContainer>

            <SignInBox>
                {
                    (account) ?
                        <Profile account={account} setAccount={setAccount} />
                        :
                        partner ?
                            (<Profile partner={partner} setPartner={setPartner} />)
                            :
                            <Link style={{ display: 'flex', textDecoration: 'none', color: 'white' }} to={'/Login'}>
                                <AccountCircleOutlinedIcon sx={{ ":hover": { color: 'orange' } }} />&nbsp;&nbsp;
                                <Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', ":hover": { color: 'orange' } }}>Sign in</Typography>
                            </Link>
                }
            </SignInBox>


            <Logout>
                {
                    (account || partner) ?
                        <Button variant="outlined" color="error" size="small" onClick={handleLogout} to={'/'} sx={{ ":hover": { color: 'white', background: 'red', } }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ textTransform: "capitalize", fontWeight: 'bold', fontFamily: "Trebuchet MS", }}>LogOut</Typography>
                                {<PowerSettingsNewIcon />}
                            </div>
                        </Button>
                        :
                        <Button variant="outlined" color="error" size="small" sx={{ display: 'none' }}>
                            <div>
                                <Typography>LogOut</Typography>
                                {<PowerSettingsNewIcon />}
                            </div>
                        </Button>}
            </Logout>
        </NavbarContainer>

    )
}
export default Navbar