/* eslint-disable no-unused-vars */
import { Button, TextField, Typography } from "@mui/material"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import { FormContainer, FormInput, ButtonContainer } from "./styles";
import Navbar from "../../Components/Header/Navbar";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { getUser } from "../../Redux/Actions";
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie'
import { useGlobalContext } from "../../Context/Context";



const initialValue = {

    email: "",
    password: '',

}


export const Login = () => {

    const [cookies, setCookies] = useCookies(["access_token"]);
    const [login, setLogin] = useState(initialValue)
    const { setAccount } = useGlobalContext();


    const navigate = useNavigate();
    const handleChange = (e) => {

        setLogin({ ...login, [e.target.name]: e.target.value })
        console.log(login)
    }


    const SubmitLogin = async () => {


        const response = await getUser(login)
        if (response) {
            if (response.data.error) {
                toast.error(response.data.error)
            }
            else if (response.data.warning) {
                toast.warn(response.data.warning)
            }
            else if (response.data.success) {
                toast.success(`${response.data.success},Welcome:${response.data.name}`)
                setCookies("access_token", response.data.token)
                localStorage.setItem("userId", response.data.userId)
                localStorage.setItem("role", response.data.role)
                localStorage.setItem("name", response.data.name)
                setLogin(login)
                setAccount(response.data.name)
                navigate("/")

            }
        } else {
            toast.error('something went wrong')
        }

    }





    return (

        <>
            <Navbar />
            <FormContainer>

                <div style={{ marginTop: '10rem' }}>

                    <form style={{ boxShadow: '0 0 6px 0 grey', width: '30%', height: '60vh', margin: '20px auto', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '2rem 0', borderRadius: '10px', }}>
                        <div><h2 style={{ fontFamily: "Trebuchet MS", }}>Login</h2></div>
                        <FormInput><PersonOutlineIcon /><TextField onChange={(e) => handleChange(e)} label="email" variant="filled" color='warning' name="email" type="email" style={{ width: '25%', borderRadius: '6px' }} /></FormInput>
                        <FormInput><LockIcon /><TextField onChange={(e) => handleChange(e)} label="Password" variant="filled" color='warning' name="password" type="password" style={{ width: '25%', borderRadius: '6px' }} /></FormInput>
                        <ButtonContainer><Button onClick={SubmitLogin} variant='contained' size="large" color='warning' style={{ width: "19rem", margin: '15px 0 0 30px' }}>Login</Button></ButtonContainer>
                        <Link style={{ textDecoration: 'none', color: 'grey' }} to={'/SignUp'}><Typography sx={{ color: 'grey', ":hover": { color: 'black' } }}>New Here?&nbsp;Sign Up Now</Typography></Link>
                    </form>
                </div>


            </FormContainer>
        </>


    )


}

export default Login