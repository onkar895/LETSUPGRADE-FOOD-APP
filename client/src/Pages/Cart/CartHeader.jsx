/* eslint-disable no-unused-vars */
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Right, Left, Navbar, LogoContainer } from "./styles";
import { Box, Button, Typography } from '@mui/material';
import FoodVillaLogo from '../../assets/FoodVillaLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context/Context';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';

export const CartHeader = () => {

    const { partner, setPartner } = useGlobalContext()
    const { account, setAccount } = useGlobalContext()
    const navigate = useNavigate();
    const [removeCookies] = useCookies('access_token')
    const handleLogout = () => {
        toast.success('Logged Out successfully')
        window.localStorage.clear("name")
        window.localStorage.clear('userId')
        removeCookies("access_token")
        navigate('/')
        setAccount(false)
        setPartner(false)
    }

    return (

        account ? (<Navbar>
            <Left>
                <LogoContainer component={Link} to={'/'}><img src={FoodVillaLogo} alt="Logo" /></LogoContainer>
                <Box><Typography variant='h6' sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Secure Checkout</Typography></Box>
            </Left>
            <Right>
                <Box><HelpOutlineOutlinedIcon />&nbsp;&nbsp;<Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Help</Typography></Box>
                <Box><PersonOutlinedIcon />&nbsp;&nbsp;<Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Profile</Typography></Box>
                <Button onClick={handleLogout}><PowerSettingsNewRoundedIcon />&nbsp;&nbsp;</Button>
            </Right>
        </Navbar>) :
            (<Navbar>
                <Left>
                    <LogoContainer component={Link} to={'/'}><img src={FoodVillaLogo} alt="Logo" /></LogoContainer>
                    <Box><Typography variant='h6' sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Login to access cart</Typography></Box>
                </Left>
                <Right>
                    <Box><CatchingPokemonIcon />&nbsp;&nbsp;<Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Help</Typography></Box>
                    <Box component={Link} to={'/login'}><PermIdentityRoundedIcon />&nbsp;&nbsp;<Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>Sign In</Typography></Box>
                </Right>
            </Navbar>)

    )
}


export default CartHeader;