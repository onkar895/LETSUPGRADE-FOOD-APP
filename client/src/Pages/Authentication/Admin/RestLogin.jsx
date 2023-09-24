/* eslint-disable no-unused-vars */
import { Button, TextField, Typography } from "@mui/material"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import { FormContainer, FormInput, ButtonContainer } from "../styles"
import Navbar from "../../../Components/Header/Navbar";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useGlobalContext } from "../../../Context/Context";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { LoginUser } from "../../../Redux/Actions";


const initialValue = {
    email: '',
    password: '',
}

export const Restlogin = () => {

    const [cookies, setCookies] = useCookies(['access_token'])
    const [restlogin, setRestlogin] = useState(initialValue)
    const { setPartner } = useGlobalContext();

    const navigate = useNavigate()
    const handleChange = (e) => {

        setRestlogin({ ...restlogin, [e.target.name]: e.target.value })
    }

    const submitLogin = async () => {
        const response = await LoginUser(restlogin)
        if (response) {
            if (response.data.error) {
                toast.error(response.data.error)
            }
            else if (response.data.warning) {
                toast.warn(response.data.warning)
            }
            else if (response.data.success) {
                toast.success(`${response.data.success} Welcome ${response.data.name}`)
                console.log(response)
                setCookies('access_token', response.data.token)
                localStorage.setItem("UserId", response.data.id)
                localStorage.setItem("username", response.data.name)
                localStorage.setItem("role", response.data.role)
                setRestlogin(restlogin)
                setPartner(response.data.name)
                navigate('/')
            }
        }
        else {
            toast.error('Something went wrong')
        }
    }

    return (

        <>
            <Navbar />
            <FormContainer>
                <div style={{ marginTop: '7%' }}>
                    <Typography variant="h2" sx={{ fontFamily: "Trebuchet MS", }}>User Login</Typography>
                    <form style={{ boxShadow: '0 0 6px 0 grey', width: '30%', height: '50vh', margin: '20px auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '2rem 0', borderRadius: '10px', }}>
                        <FormInput><PersonOutlineIcon /><TextField onChange={(e) => handleChange(e)} style={{ width: "25%", borderRadius: '6px' }} label="email" variant="filled" color='warning' name="email" type="email" /></FormInput>
                        <FormInput><LockIcon /><TextField onChange={(e) => handleChange(e)} style={{ width: "25%", borderRadius: '6px' }} label="Password" variant="filled" color='warning' name="password" type="password" /></FormInput>
                    </form>
                    <ButtonContainer><Button onClick={submitLogin} variant='contained' size="large" color='warning' style={{ width: "24rem", marginRight: '15px' }}><Typography sx={{ textTransform: 'capitalize' }}>Login</Typography> </Button></ButtonContainer>
                    <Link style={{ textDecoration: 'none', color: 'grey' }} to={'/RestSignUp'}><Typography sx={{ color: 'grey', ":hover": { color: 'black' } }}>Not a User?&nbsp;&nbsp;Register Here</Typography></Link>
                </div>

            </FormContainer>
        </>


    )

}

export default Restlogin