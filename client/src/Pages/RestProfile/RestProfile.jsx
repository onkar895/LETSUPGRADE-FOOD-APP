/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import Navbar from "../../Components/Header/Navbar"
import { TextField, Button, Box, styled } from "@mui/material"
import { CreateProduct } from "../../Redux/Actions";
import FileBase64 from 'react-file-base64';
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const FormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'rows',
  margin: '5rem 2rem 0 2rem',
  maxWidth: '100%'
}))

const BoxInput = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  margin: '1rem 1rem 0 1rem'

}))

const Left = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // marginLeft:'4rem',
  flex: 0.5,
  padding: '2rem 4rem'

}))
const Right = styled(Box)(({ theme }) => ({
  margin: '1rem 0',
  flex: 0.5,
  aligntItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '2rem 4rem',
}))


const defaultValue = {
  image: '',
  name: '',
  price: '',
  description: '',
  quantity: ''
}




export const RestProfile = () => {
  const navigate = useNavigate()

  const userId = localStorage.getItem('UserId')


  const [formdata, setFormdata] = useState(defaultValue)
  const handleChange = (e) => {


    setFormdata({ ...formdata, [e.target.name]: e.target.value })


  }


  const AddFood = async (e) => {
    e.preventDefault()
    const response = await CreateProduct({ userId, name: formdata.name, price: formdata.price, quantity: formdata.quantity, description: formdata.description, image: formdata.image })
    console.log(response)
    if (response) {
      if (response.data.error) {
        toast.error(response.data.error)
      }
      else if (response.data.warning) {
        toast.warn(response.data.warning)
      }
      else if (response.data.success) {
        toast.success(response.data.success)
        navigate('/ShowAll')

      }

    }

  }


  return (
    <>
      <Navbar />
      <div style={{
        width: '100vw',
        padding: '8rem 5rem',
        margin: '2rem'
      }}>
        <form encType="enctype= multipart/form-data" style={{ display: 'flex', flexDirection: "row", marginLeft: "4rem", border: 'none', borderBottom: '1px solid black' }}>
          <Left>
            <BoxInput>
              <FileBase64
                fullWidth
                onChange={(e) => handleChange(e)}
                required
                multiple={false}
                onDone={({ base64 }) => setFormdata({ ...formdata, image: base64 })}
                style={{ display: 'none' }}
                placeholder="Select a Photo"
                type="file"
                id="file-upload"
                name="image"
                variant="standard"
                accept='.jpeg, .png, .jpg'
              />
            </BoxInput>

            <BoxInput>
              <TextField
                fullWidth
                required
                onChange={(e) => handleChange(e)}
                placeholder="Enter the Food Name"
                name="name"
                variant="standard"
                color="warning"
              /></BoxInput>
            <BoxInput>
              <TextField
                fullWidth
                required
                onChange={(e) => handleChange(e)}
                placeholder="Enter the Price"
                type="number"
                name="price"
                color="warning"
                variant="standard"
              /></BoxInput>
            <BoxInput>
              <TextField
                fullWidth
                required
                onChange={(e) => handleChange(e)}
                placeholder="Enter the Quantity"
                type="number"
                name="quantity"
                color="warning"
                variant="standard"
              /></BoxInput>
          </Left>
          <Right>
            <BoxInput>
              <TextField
                fullWidth
                style={{ width: "100%", textAlign: "center" }}
                inputProps={{
                  style: {
                    height: "8rem",
                  }
                }}
                name="description"
                onChange={(e) => handleChange(e)}
                id="description"
                type="text"
                color="warning"
                multiline
                placeholder="Description"
                maxRows={4}
              />
            </BoxInput>
          </Right>
        </form>
        <div style={{ padding: '0.5rem 0.5rem' }} onClick={AddFood}><Button variant="contained" color="warning" size="large">Add </Button></div>

      </div>
      <Footer />
    </>

  )

}



export default RestProfile