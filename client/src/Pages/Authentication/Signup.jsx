import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from '../../Components/Navbar/Navbar';
import { FormContainer,FormInput, ButtonContainer } from "./styles";
import { Box, Button,TextField,Typography } from "@mui/material"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { addusers } from '../../Redux/Actions';
import { toast } from 'react-toastify';

     
     const defaultValue={
         name:"",
         email:"",
         password:""
       }

     

export const Signup = () => {

    const navigate = useNavigate();

    const[user,setUser]= useState(defaultValue)
    
      const handleChange=(e)=> {
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)

      }

     const SubmitLogin =async()=>{
        const response= await addusers(user);
        if(response){
          if(response.data.error){
            toast.error(response.data.error)
          }
          else if(response.data.warning){
            toast.warn(response.data.warning)
          }
          else if(response.data.success){
            toast.success(response.data.success)
            navigate('/Login')
          }
        }
        else{
          toast.info('something went wrong')
        }
        
         
         
         

      }

    return(
        <>
        <Navbar/>
<FormContainer>
        
        <div style={{marginTop:'6%'}}>
          <Typography variant='h2'>Register</Typography>
        <form>
            <FormInput><AccountCircleIcon/><TextField onChange={handleChange} style={{width:"50%"}} label="name" variant="outlined" name="name" type="text" /></FormInput>
            <FormInput><PersonOutlineIcon/><TextField onChange={handleChange} style={{width:"50%"}} label="email" variant="outlined" name="email" type="email" /></FormInput>
            <FormInput><LockIcon/><TextField onChange={handleChange} style={{width:"50%"}} label="Password" variant="outlined" name="password" type="password" /></FormInput>
        </form>
            <ButtonContainer><Button onClick={SubmitLogin}variant='contained' size="large" style={{width:"15rem"}}>Sign Up</Button></ButtonContainer>
            <Link  style={{textDecoration:'none',color:'#1976d2'}} to={'/Login'}>Already a member?&nbsp;Login</Link>
        </div>

     </FormContainer>
    </>
    )



}


export default Signup