import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from '../../Components/Header/Navbar';
import { FormContainer, FormInput, ButtonContainer } from "./styles";
import { Button, TextField, Typography } from "@mui/material"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { addusers } from '../../Redux/Actions';
import { toast } from 'react-toastify';


const defaultValue = {
  name: "",
  email: "",
  password: ""
}

export const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(defaultValue)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)

  }

  const SubmitLogin = async () => {
    const response = await addusers(user);
    if (response) {
      if (response.data.error) {
        toast.error(response.data.error)
      }
      else if (response.data.warning) {
        toast.warn(response.data.warning)
      }
      else if (response.data.success) {
        toast.success(response.data.success)
        navigate('/Login')
      }
    }
    else {
      toast.info('something went wrong')
    }

  }

  return (
    <>
      <Navbar />
      <FormContainer>

        <div style={{ marginTop: '8rem' }}>
          <form style={{ boxShadow: '0 0 6px 0 grey', width: '30%', height: '70vh', margin: '20px auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 0', borderRadius: '10px', }}>
            <div><h2 style={{ fontFamily: "Trebuchet MS", marginBottom: '20px' }}>Sign Up</h2></div>
            <FormInput><AccountCircleIcon /><TextField onChange={handleChange} style={{ width: "25%", fontFamily: "Trebuchet MS", borderRadius: '6px', marginTop: '10px' }} label="name" variant="filled" color='warning' name="name" type="text" /></FormInput>
            <FormInput><PersonOutlineIcon /><TextField onChange={handleChange} style={{ width: "25%", fontFamily: "Trebuchet MS", borderRadius: '6px', marginTop: '10px' }} label="email" variant="filled" color='warning' name="email" type="email" /></FormInput>
            <FormInput><LockIcon /><TextField onChange={handleChange} style={{ width: "25%", fontFamily: "Trebuchet MS", borderRadius: '6px', marginTop: '10px' }} label="Password" variant="filled" color='warning' name="password" type="password" /></FormInput>
            <ButtonContainer><Button onClick={SubmitLogin} variant='contained' color='warning' size="large" style={{ width: "19rem", margin: '15px 0 0 30px' }}>Sign Up</Button></ButtonContainer>
            <Link style={{ textDecoration: 'none', color: 'grey' }} to={'/Login'}><Typography sx={{ color: 'grey', ":hover": { color: 'black', } }}>Already a member?&nbsp;Login</Typography></Link>
          </form>

        </div>

      </FormContainer>
    </>
  )



}


export default Signup