import { Button, TextField, Typography } from "@mui/material"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import { FormContainer, FormInput, ButtonContainer } from "../styles"
import Navbar from "../../../Components/Header/Navbar";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import { addrestaurant } from "../../../Redux/Actions";
import { toast } from "react-toastify";
import FileBase64 from 'react-file-base64';
import StoreIcon from '@mui/icons-material/Store';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CategoryIcon from '@mui/icons-material/Category';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

export const initialValue = {

    name: '',
    email: '',
    password: '',
    image: '',
    landmark: '',
    address: '',
    categories: '',
    origin: '',


}


export const RestSignup = () => {

    const navigate = useNavigate()
    const [restsignup, setRestsignup] = useState(initialValue)

    const handleChange = (e) => {
        setRestsignup({ ...restsignup, [e.target.name]: e.target.value })


    }

    const Submituser = async () => {

        const response = await addrestaurant(restsignup)
        if (response) {
            if (response.data.error) {
                toast.error(response.data.error)
            }
            else if (response.data.warning) {
                toast.warn(response.data.warning)
            }
            else if (response.data.success) {
                toast.success(response.data.success)
                navigate('/Restlogin')
            }
        }

    }


    return (

        <>
            <Navbar />
            <FormContainer sx={{ marginTop: '4rem' }}>
                <div style={{ marginTop: '6%' }}>
                    <Typography variant="h2" sx={{ fontFamily: "Trebuchet MS", }}>Add Restaurant</Typography>

                    <form style={{ boxShadow: '0 0 6px 0 grey', width: '50%', height: '90vh', margin: '20px auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 0', borderRadius: '10px', }}>
                        <FormInput><PersonOutlineIcon /><TextField onChange={(e) => handleChange(e)} style={{ width: "45%", fontFamily: "Trebuchet MS", borderRadius: '6px', }} label="Email" variant="filled" color='warning' name="email" type="email" /></FormInput>
                        <FormInput><LockIcon /><TextField onChange={(e) => handleChange(e)} style={{ width: "45%", borderRadius: '6px' }} label="Password" variant="filled" color='warning' name="password" type="password" /></FormInput>
                        <FormInput><RestaurantOutlinedIcon /><TextField onChange={(e) => handleChange(e)} style={{ width: "45%", borderRadius: '6px' }} label="Restaurant Name" variant="filled" color='warning' name="name" type="text" /></FormInput>
                        <FormInput><CategoryIcon /><TextField onChange={(e) => handleChange(e)} style={{ width: "45%", borderRadius: '6px' }} label="Cuisines" variant="filled" color='warning' name="categories" type="text" /></FormInput>
                        <FormInput><StoreIcon /><TextField onChange={(e) => handleChange(e)} style={{ width: "45%", borderRadius: '6px' }} label="Landmark" variant="filled" color='warning' name="landmark" type="text" /></FormInput>
                        <FormInput><FmdGoodIcon /><TextField onChange={(e) => handleChange(e)} style={{ width: "45%", borderRadius: '6px' }} label="Address" variant="filled" color='warning' name="address" type="text" /></FormInput>
                        <FormInput><LocationSearchingIcon /><TextField onChange={(e) => handleChange(e)} style={{ width: "45%", borderRadius: '6px', }} label="Origin" variant="filled" color='warning' name="origin" type="text" /></FormInput>
                        <FileBase64
                            fullWidth onChange={(e) => handleChange(e)} required multiple={false} onDone={({ base64 }) => setRestsignup({ ...restsignup, image: base64 })} placeholder="Select a Photo"
                            type="file" id="file-upload" name="image" variant="standard" accept='.jpeg, .png, .jpg'
                        />
                    </form>
                    <ButtonContainer><Button onClick={Submituser} variant='contained' color="warning" size="large" style={{ width: "40rem", marginRight: '15px' }}><Typography sx={{ textTransform: 'capitalize' }}>Add Restaurant</Typography> </Button></ButtonContainer>
                    <Link style={{ textDecoration: 'none', }} to={'/Restlogin'}><Typography sx={{ color: 'grey', ":hover": { color: 'black' } }}>Already Registered?&nbsp;Login</Typography></Link>
                </div>


            </FormContainer>
        </>
    )

}

export default RestSignup