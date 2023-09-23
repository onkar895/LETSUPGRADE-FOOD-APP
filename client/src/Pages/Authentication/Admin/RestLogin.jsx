import { Box, Button,TextField,Typography } from "@mui/material"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import { FormContainer,FormInput, ButtonContainer } from "../styles"
import Navbar from "../../../Components/Navbar/Navbar";
import {Link, useNavigate} from 'react-router-dom'
import { useState } from "react";
import { LoginUser } from "../../../Redux/Actions";
import {toast} from 'react-toastify'
import { useGlobalContext } from "../../../Context/Context";
import { useCookies } from "react-cookie";


const initialValue= {
    email:'',
    password:'',
}



export const Restlogin=()=> {
    
    const[cookies,setCookies] = useCookies(['access_token'])
    const[restlogin,setRestlogin] = useState(initialValue)
    const {setPartner} = useGlobalContext();
    
    const navigate = useNavigate()
    const handleChange=(e)=> {
        
        setRestlogin({...restlogin,[e.target.name]:e.target.value})
        }  

    const submitLogin= async()=>{
        const response = await LoginUser(restlogin)
        if(response){
            if(response.data.error){
                toast.error(response.data.error)
            }
            else if(response.data.warning){
                toast.warn(response.data.warning)
            }
            else if(response.data.success){
                toast.success(`${response.data.success} Welcome ${response.data.name}`)
                console.log(response)
                setCookies('access_token',response.data.token)
                localStorage.setItem("UserId",response.data.id)
                localStorage.setItem("username",response.data.name)
                localStorage.setItem("role",response.data.role)
                setRestlogin(restlogin)
                setPartner(response.data.name)
                navigate('/')
            }
           }
           else{
            toast.error('Something went wrong')
           }
        }

    return(

        <>
        <Navbar/>
<FormContainer>
        
        <div style={{marginTop:'7%'}}>
            <Typography variant="h2">Partner Login</Typography>
        <form>
            <FormInput><PersonOutlineIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="email" variant="outlined" name="email" type="email" /></FormInput>
            <FormInput><LockIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="Password" variant="outlined" name="password" type="password" /></FormInput>
        </form>
            <ButtonContainer><Button onClick={submitLogin} variant='contained' size="large" style={{width:"15rem"}}>Login</Button></ButtonContainer>
            <Link style={{textDecoration:'none',color:'#1976d2'}} to={'/RestSignUp'}>Become a Partner?&nbsp;&nbsp;Register Here</Link>
        </div>


     </FormContainer>
    </>


    )

}

export default Restlogin