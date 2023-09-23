import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import PersonIcon from '@mui/icons-material/Person';
import { Right,Left,Navigationpanel,LogoContainer } from "./styles";
import { Box, Button, Typography } from '@mui/material';
import Logo from '../../../src/assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context/Context';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';

export const CartHeader = () => {

    const{partner,setPartner} = useGlobalContext()
    const{account,setAccount} = useGlobalContext()   
    const navigate = useNavigate();
    const[cookies,setCookies,removeCookies]= useCookies('access_token')
    const handleLogout = ()=> {
        toast.success('Logged Out successfully')
        window.localStorage.clear("name")
        window.localStorage.clear('userId')
        removeCookies("access_token")
        navigate('/')
        setAccount(false)
        setPartner(false)
        
  }
    
    


    return(


        account?(<Navigationpanel>
           <Left> 
                  <LogoContainer component={Link} to={'/'}><img src={Logo} alt="Logo" /></LogoContainer>
                  <Box><Typography variant='h6'>Secure Checkout</Typography></Box>
            </Left>
            <Right>
                   <Box><CatchingPokemonIcon/>&nbsp;&nbsp;<Typography>Help</Typography></Box>
                   <Box><PersonIcon/>&nbsp;&nbsp;<Typography>Profile</Typography></Box>
                   <Button onClick={handleLogout}><PowerSettingsNewRoundedIcon/>&nbsp;&nbsp;</Button>
            </Right>
        </Navigationpanel>) :
        (<Navigationpanel>
        <Left> 
               <LogoContainer component={Link} to={'/'}><img src={Logo} alt="Logo" /></LogoContainer>
               <Box><Typography variant='h6'>Login to access cart</Typography></Box>
         </Left>
         <Right>
                <Box><CatchingPokemonIcon/>&nbsp;&nbsp;<Typography>Help</Typography></Box>
                <Box component={Link} to={'/login'}><PermIdentityRoundedIcon/>&nbsp;&nbsp;<Typography>Sign In</Typography></Box>
                
         </Right>
     </Navigationpanel>)
        
    )
}


export default CartHeader;