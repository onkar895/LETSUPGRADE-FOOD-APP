import CartHeader from "./CartHeader"
import { Box,Button, Typography } from "@mui/material";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { LeftSide,ProductDetails,ImageContainer,NameContainer,CartContainer, PriceBox, LeftMain, TotalContainer } from "./styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCartProducts } from "../../Redux/Store";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { RemoveFromCart,PlaceOrder,verifyPayment } from "../../Redux/Actions";
import Total from "./Total";
import { useGlobalContext } from "../../Context/Context";
import { toast } from "react-toastify";
import { buyProducts } from "../../Redux/Actions";
import { clearCart } from "../../Redux/Store";
import { useNavigate } from "react-router-dom";



export const CartItem = () => {
    
    const data = useSelector((state)=>state.restaurants.cart)
    const navigate= useNavigate(); 
    const [allproducts,setAllproducts] =useState([])
    const[ischanged,setIschanged] = useState(data)
    const userId = localStorage.getItem('userId')
    const {total} = useGlobalContext();
    
    const dispatch= useDispatch();   
    useEffect(()=> {
        const fetchData = async () => {
             dispatch(GetCartProducts(userId));
            
        };
        fetchData();       
    },[ischanged])
    
    
    const RemoveProduct =async({productId,userId})=> {
       
        const response= await RemoveFromCart({productId,userId})

       if(response){
        if(response.data.error){
            toast.error(response.data.error)
        }
        else(response.data.success)
        {   
            toast.success(response.data.success)
        }
       }
    }
  
   
    const Checkout = async(total,userId) => {
        const response= await PlaceOrder(total,userId);  
                        const orderId = response.data.order.id
                         handleOpenRazorPay(response.data)
                        await OrderProduct(orderId);
                        dispatch( clearCart(userId)); 
                        navigate('/PreviousOrder')  
        }
       
        
    const OrderProduct = async(orderId)=> {
        
        
            
            data?.cart?.map((item)=>{
                let product = {
                    restname:item?.restaurantname,
                    foodname:item?.productName,
                    landmark:item?.restaurantlandmark,
                    quantity:item?.productQuantity,
                    image:item?.productImage,
                    restroId:item?.restroId,
                }
                allproducts.push(product)
                
                
            })
        
           
             const response =  await buyProducts({userId,allproducts,total,orderId})
             if(response){
                if(response.data.error){
                    toast.error(response.data.error)
                }
                else if(response.data.success){
                    toast.success(response.data.success)
                }
             }
             else{
                toast.error("something went wrong")
             }
            
    }
        const handleOpenRazorPay = (data) => {
           
            let options = {
                key_id: "rzp_test_ir5DSVDeFpn4C1",
                amount: Number(data?.order?.amount) * 100, // Amount in paise
                currency: "INR",
                name: "FoodZone",
                description: "Test Transaction",
                order_id: data?.order?.id,
                handler: async function (response) {
                    try {
                        console.log(response);
                        await verifyPayment(response);  
                    
                    } catch (error) {
                        console.log('Error:', error);
                    }
                }
            };
        
            try {
                let rzp = new window.Razorpay(options); // Initialize Razorpay
                rzp.open(); // Open the payment dialog
            } catch (error) {
                console.log('Razorpay initialization error', error);
            }
        };
        
    

    
    return(
        
        <>
        <CartHeader/>
         <CartContainer>
         
                 <LeftMain>
                     {  
                     data?.cart?.map((item)=>(
                        <LeftSide key={item?.productId}>
                        <ImageContainer><img src={item.productImage} alt="" /></ImageContainer>  
                        
                        <ProductDetails>
                               <NameContainer> 
                                     <Typography>{item?.productName}</Typography>
                                     <Typography>{item?.restaurantname}</Typography>
                                     <Typography>{item?.restaurantlandmark}</Typography>         
                                </NameContainer>
                            <PriceBox><CurrencyRupeeIcon sx={{fontSize:'14px'}}/><Typography>{item.productPrice}</Typography></PriceBox>
                        </ProductDetails>
                        
                        <div style={{display:'flex',flexDirection:"column"}}>
                            <Box style={{display:'flex',flexDirection:'row'}}> 
                               <Button>
                               <RemoveRoundedIcon/>
                               </Button>
                               <Button>
                               
                                    <AddBoxRoundedIcon/>
                               </Button>
                           </Box>
                           
                           <Button variant="contained" sx={{background:"#D86414"}} onClick={()=>RemoveProduct({productId:item.productId,userId})}>Remove Item</Button>
                        </div>
     
                     </LeftSide>


                     ))}
                     </LeftMain>
                
                    <TotalContainer>
                        <Total data = {data}/>
                        <Box><Button variant='contained' onClick={()=>Checkout(total,userId)}>Place order</Button>
</Box>                    </TotalContainer>

        </CartContainer>
        
        
        </>
        
    )

}

export default CartItem