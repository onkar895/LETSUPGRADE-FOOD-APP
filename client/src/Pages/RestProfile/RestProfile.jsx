import Navbar from "../../Components/Navbar/Navbar"
import { TextField,Button } from "@mui/material"
import { CreateProduct } from "../../Redux/Actions";
import FileBase64 from 'react-file-base64';
import {  BoxInput, Left,Right } from "./styles";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

    
    const defaultValue = {
        image:'',
        name:'',
        price:'',
        description:'',
        quantity:''
    }
    
    
      

export const RestProfile = () => {
     const navigate = useNavigate()

    const userId = localStorage.getItem('UserId')
  

    const[formdata,setFormdata] = useState(defaultValue)
    const handleChange= (e)=>{
        
        
        setFormdata({...formdata,[e.target.name]:e.target.value})
       
    
    }
    
    
    const AddFood = async(e)=>{
        e.preventDefault()
        const response = await CreateProduct({userId,name:formdata.name,price:formdata.price,quantity:formdata.quantity,description:formdata.description,image:formdata.image})
        console.log(response)
        if(response){
          if(response.data.error){
            toast.error(response.data.error)
          }
          else if(response.data.warning){
            toast.warn(response.data.warning)
          }
          else if(response.data.success){
            toast.success(response.data.success)
            navigate('/ShowAll')
            
          }
          
        }
       
    }
     

    return (
        <>
        <Navbar/>
        <div className="restProfile">
        <form encType="enctype= multipart/form-data" style={{display:'flex',flexDirection:"row", marginLeft:"4rem",border:'none', borderBottom:'1px solid black'}}>
        <Left>
        <BoxInput>
         <FileBase64
          fullWidth
          onChange={(e)=>handleChange(e)}
          required
          multiple={false}
          onDone={({base64})=>setFormdata({...formdata,image:base64})}
          style={{display:'none'}}
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
          onChange={(e)=>handleChange(e)}
          placeholder="Enter your food name"
          name="name"
          variant="standard"
          
        /></BoxInput>
        <BoxInput>
         <TextField
          fullWidth
          required
          onChange={(e)=>handleChange(e)}
          placeholder="Enter the price"
          type="number"
          name="price"
          variant="standard"
        /></BoxInput>
        <BoxInput>
         <TextField
          fullWidth
          required
          onChange={(e)=>handleChange(e)}
          placeholder="Enter the quantity"
          type="number"
          name="quantity"
          variant="standard"
        /></BoxInput>
        </Left>
        <Right>
        <BoxInput>
        <TextField
          fullWidth
          style={{width:"100%", textAlign:"center"}}
          inputProps={{
            style: {
              height: "8rem",
            }}}
          name="description"
          onChange={(e)=>handleChange(e)}
          id="description"
          type="text"
          multiline
          placeholder="About your dish"
          maxRows={4}
        />
        </BoxInput>
        </Right>
       </form> 
        <div style={{padding:'0.5rem 0.5rem'}} onClick={AddFood}><Button variant="contained" size="large">Add </Button></div>
       
       </div>     
       <Footer/>
        </>
       
    )

}



export default RestProfile