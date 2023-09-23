import Navbar from "../../Components/Navbar/Navbar";
import { Box, Typography, Button,FormControl,Input, TextField} from "@mui/material";
import { ProductContainer,BoxContainer,ImageContainer,ButtonContainer} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { EditProduct } from "../../Redux/Store";
import { useParams } from "react-router-dom";
import { updateProduct } from "../../Redux/Actions";

export const Edit = () => {

    const defaultValue= {
        name: '',
        description:'',
    }
  const dispatch = useDispatch();
  const { productId } = useParams();
  const[edited, setEdited]= useState(defaultValue)

  const id = localStorage.getItem("UserId");

  const data = useSelector((state) => state.restaurants.productDetail);


  useEffect(() => {
    const fetchdata = () => {
      dispatch(EditProduct({ productId, id }));
    };
    fetchdata();
  }, [dispatch]);


  const handleChange=(e)=>{
    setEdited({...edited,[e.target.name]:e.target.value})
       console.log(edited)
  }

  const updateDetails =async (edited,productId,id)=>{
          const response= await  updateProduct({edited,productId,id});
          console.log(response)
  }

  return (
    <div>
      <Navbar />
      <Box>
        <Typography variant="h4">All Products</Typography>
      </Box>
     
        <BoxContainer>
        <ProductContainer>
            <ImageContainer>
              <Box
                style={{ width: "15rem", height: "10rem", overflow: "hidden" }}
                
              ><img src={data.image} alt="it's a photo" /></Box>
              <Box>
                <FormControl>  
                       <Input type="text"  onChange={(e)=>handleChange(e)} name='name' placeholder={data.name}></Input>
                </FormControl>
              </Box>
                  </ImageContainer>
            <Box style={{ flex: 1 }}>
                       <FormControl>
                             
                              <TextField type="text"  onChange={(e)=>handleChange(e)} name='description' placeholder={data.description} multiline></TextField>
                       </FormControl>
            </Box>
            <ButtonContainer>
              <Button variant="contained" onClick={()=>updateDetails(edited,productId,id)}>Update</Button>
            </ButtonContainer>
          </ProductContainer>
        </BoxContainer>
     
    </div>
  );
};
