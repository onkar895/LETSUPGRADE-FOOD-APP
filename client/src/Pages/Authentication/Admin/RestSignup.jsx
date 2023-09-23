import { Button,TextField,Typography } from "@mui/material"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { FormContainer,FormInput, ButtonContainer } from "../styles"
import Navbar from "../../../Components/Navbar/Navbar";
import {Link, useNavigate} from 'react-router-dom'
import { useState } from "react";
import { addrestaurant } from "../../../Redux/Actions";
import { toast } from "react-toastify";
import FileBase64 from 'react-file-base64';
import StoreIcon from '@mui/icons-material/Store';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CategoryIcon from '@mui/icons-material/Category';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

   export const initialValue = {
        
        name:'',
        email:'',
        password:'',
        image:'',
        landmark:'',
        address:'',
        categories:'',
        origin:'',
       

   }


export const RestSignup=()=> {

    const navigate = useNavigate()
    const[restsignup,setRestsignup] = useState(initialValue)

    const handleChange=(e)=> {
        setRestsignup({...restsignup,[e.target.name]:e.target.value})
       

    }
    
    const Submituser= async()=> {
            
        const response = await addrestaurant(restsignup)
        if(response){
            if(response.data.error){
                toast.error(response.data.error)
            }
            else if(response.data.warning){
                toast.warn(response.data.warning)
            }
            else if(response.data.success){
                toast.success(response.data.success)
                navigate('/Restlogin')
            }
        }

    }


    return(

        <>
        <Navbar/>
<FormContainer>

            
        <div style={{marginTop:'6%'}}>
            <Typography variant="h2">Partner With Us</Typography>

        <form>
            <FormInput><AccountCircleIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="name" variant="outlined" name="name" type="text" /></FormInput>
            <FormInput><PersonOutlineIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="email" variant="outlined" name="email" type="email" /></FormInput>
            <FormInput><LockIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="Password" variant="outlined" name="password" type="password" /></FormInput>
            <FormInput><StoreIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="landmark" variant="outlined" name="landmark" type="text" /></FormInput>
            <FormInput><FmdGoodIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="address" variant="outlined" name="address" type="text" /></FormInput>
            <FormInput><CategoryIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="categories" variant="outlined" name="categories" type="text" /></FormInput>
            <FormInput><LocationSearchingIcon/><TextField  onChange={(e)=> handleChange(e)} style={{width:"50%"}} label="origin" variant="outlined" name="origin" type="text" /></FormInput>
            <FileBase64
            fullWidth onChange={(e)=>handleChange(e)} required multiple={false} onDone={({base64})=>setRestsignup({...restsignup,image:base64})}  placeholder="Select a Photo"
            type="file" id="file-upload" name="image" variant="standard" accept='.jpeg, .png, .jpg'
            />
        </form>
            <ButtonContainer><Button onClick= {Submituser} variant='contained' size="large" style={{width:"15rem"}}>Resgister</Button></ButtonContainer>
            <Link style={{textDecoration:'none',color:'#1976d2'}} to={'/Restlogin'}>Already a Partner?&nbsp;Login</Link>
        </div>


     </FormContainer>
    </>
    ) 
   
}

export default RestSignup