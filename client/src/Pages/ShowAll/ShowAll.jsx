import Navbar from "../../Components/Navbar/Navbar"
import { Box, Typography ,Button} from "@mui/material"
import { ProductContainer,BoxContainer,ImageContainer,ButtonContainer } from "./styles"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetProducts } from "../../Redux/Store"
import { DeleteProduct } from "../../Redux/Actions"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"



export const ShowAll = () =>{
const navigate = useNavigate()
const dispatch= useDispatch();
const id = localStorage.getItem('UserId')

   useEffect(()=>{     
    
    const fetchAll=async()=>{
        dispatch(GetProducts(id))
    }; fetchAll()

},[dispatch])
   const data = useSelector((state)=>state.restaurants.Products)

   

   const Delete =async(productId,id)=>{
    const response= await DeleteProduct({productId,id})
    
    if(response){
        if(response.data.error){
            toast.error(response.data.error)
        }
        else(response.data.success)
        {
            toast.success(response.data.success)
            navigate('/RestProfile')

        }
    }
    else{
        toast.warn('something went wrong')
    }
 }

    return(
        <div>
            <Navbar/>
            <Box><Typography variant='h4'>All Products</Typography></Box>
            
           <BoxContainer> {data?.products?.map((item)=>(
                <ProductContainer key={item._id}>
             
                <ImageContainer><Box style={{width:"15rem",height:'10rem',overflow:'hidden'}}><img src={item.image} alt="Product image" /></Box><Typography>{item.name}</Typography></ImageContainer>
                <Box style={{flex:1}}><Typography>{item.description}</Typography></Box>
                <ButtonContainer><Button variant="contained"onClick={()=>navigate(`/edit/${item._id}`)}>Edit</Button><Button variant="contained" onClick={()=>Delete(item._id,id)}>Delete</Button></ButtonContainer>
               </ProductContainer>
               
            ))}
            </BoxContainer>
        </div>

    )
}

export default ShowAll