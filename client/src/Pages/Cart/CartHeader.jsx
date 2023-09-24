/* eslint-disable no-unused-vars */
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Right, Left, Navbar, LogoContainer } from "./styles";
import { Box, Button, Typography } from '@mui/material';
import FoodVillaLogo from '../../assets/FoodVillaLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
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
            <Left sx={{ marginLeft: '3rem' }}>
                <LogoContainer component={Link} to={'/'}><img src={FoodVillaLogo} alt="Logo" /></LogoContainer>
            </Left>
            <Right sx={{ marginRight: '3rem' }}>
                <Box onClick={() => navigate('/')}><HomeOutlinedIcon sx={{ color: 'white' }} />&nbsp;&nbsp;<Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', color: 'white' }}>Home</Typography></Box>
                <Box><PersonOutlinedIcon sx={{ color: 'white' }} />&nbsp;&nbsp;<Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', color: 'white' }}>Profile</Typography></Box>
            </Right>
        </Navbar>) :
            (<Navbar>
                <Left sx={{ marginLeft: '3rem' }}>
                    <LogoContainer component={Link} to={'/'}><img src={FoodVillaLogo} alt="Logo" /></LogoContainer>
                </Left>
                <Right sx={{ marginRight: '3rem', }}>
                    <Box sx={{ marginBottom: '8px' }}><HomeOutlinedIcon sx={{ color: 'white' }} />&nbsp;&nbsp;<Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', color: 'white' }}>Home</Typography></Box>
                    <Box component={Link} to={'/login'}><PermIdentityRoundedIcon sx={{ color: 'white' }} />&nbsp;&nbsp;<Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', color: 'white' }}>Sign In</Typography></Box>
                </Right>
            </Navbar>)

    )
}


export default CartHeader;