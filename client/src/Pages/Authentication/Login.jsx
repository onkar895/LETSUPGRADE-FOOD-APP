import { Box, Button,TextField,Typography } from "@mui/material"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import { FormContainer,FormInput, ButtonContainer } from "./styles";
import Navbar from "../../Components/Navbar/Navbar";
import {Link, useNavigate} from 'react-router-dom'
import { useState } from "react";
import { getUser } from "../../Redux/Actions";
import { toast } from "react-toastify";
import {useCookies} from 'react-cookie'
import { useGlobalContext } from "../../Context/Context";



      const initialValue ={ 
        
          email:"",
          password:'',
      
      }
      
      
    export const Login = ()=> {
    
    const [cookies,setCookies] = useCookies(["access_token"]);
    const[login, setLogin] = useState(initialValue)
    const {setAccount}= useGlobalContext();
   

    const navigate= useNavigate();
    const handleChange=(e)=>{
        
        setLogin({...login,[e.target.name]:e.target.value})
        console.log(login)
    }


    const SubmitLogin =async() =>{
        
         
        const response = await getUser(login)
          if (response) {
            if(response.data.error){
                toast.error(response.data.error)
            }
            else if(response.data.warning){
                toast.warn(response.data.warning)
            }
            else if(response.data.success){
                toast.success(`${response.data.success},Welcome:${response.data.name}`)
                setCookies("access_token",response.data.token)
                localStorage.setItem("userId",response.data.userId)
                localStorage.setItem("role",response.data.role)
                localStorage.setItem("name",response.data.name)
                setLogin(login)
                setAccount(response.data.name)
                navigate("/")
                
            } 
          } else {
            toast.error('something went wrong')
          }

    }
       




    return(
     
    <>
        <Navbar/>
<FormContainer>
        
        <div style={{marginTop:'7%'}}>
        <Typography variant='h2'>Login</Typography>
        <form>
            <FormInput><PersonOutlineIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="email" variant="outlined" name="email" type="email" /></FormInput>
            <FormInput><LockIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="Password" variant="outlined" name="password" type="password" /></FormInput>
        </form>
            <ButtonContainer><Button onClick={SubmitLogin} variant='contained' size="large" style={{width:"15rem"}}>Login</Button></ButtonContainer>
            <Link style={{textDecoration:'none',color:'#1976d2'}} to={'/SignUp'}>New Here?&nbsp;Sign Up</Link>
        </div>


     </FormContainer>
    </>


    )


}

export default Login