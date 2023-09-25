/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import CartHeader from "./CartHeader"
import { ImageContainer, NameContainer, CartContainer, LeftSide, TotalContainer } from "./styles";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "../../Context/Context";
import { toast } from "react-toastify";
import { buyProducts } from "../../Redux/Actions";
import { clearCart } from "../../Redux/Store";
import { useNavigate } from "react-router-dom";
import { GetCartProducts } from "../../Redux/Store";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { RemoveFromCart, PlaceOrder, verifyPayment } from "../../Redux/Actions";
import Total from "./Total";




export const CartItem = () => {

    const data = useSelector((state) => state.restaurants.cart)
    const navigate = useNavigate();
    const [allproducts, setAllproducts] = useState([])
    const [ischanged, setIschanged] = useState(data)
    const userId = localStorage.getItem('userId')
    const { total } = useGlobalContext();

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            dispatch(GetCartProducts(userId));

        };
        fetchData();
    }, [ischanged])


    const RemoveProduct = async ({ productId, userId }) => {

        const response = await RemoveFromCart({ productId, userId })

        if (response) {
            if (response.data.error) {
                toast.error(response.data.error)
            }
            else (response.data.success)
            {
                toast.success(response.data.success)
            }
        }
    }


    const Checkout = async (total, userId) => {
        const response = await PlaceOrder(total, userId);
        const orderId = response.data.order.id
        handleOpenRazorPay(response.data)
        await OrderProduct(orderId);
        dispatch(clearCart(userId));
        navigate('/PreviousOrder')
    }


    const OrderProduct = async (orderId) => {



        data?.cart?.map((item) => {
            let product = {
                restname: item?.restaurantname,
                foodname: item?.productName,
                landmark: item?.restaurantlandmark,
                quantity: item?.productQuantity,
                image: item?.productImage,
                restroId: item?.restroId,
            }
            allproducts.push(product)


        })


        const response = await buyProducts({ userId, allproducts, total, orderId })
        if (response) {
            if (response.data.error) {
                toast.error(response.data.error)
            }
            else if (response.data.success) {
                toast.success(response.data.success)
            }
        }
        else {
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


    return (

        <>
            <CartHeader />
            <CartContainer>

                <Box>
                    {
                        data?.cart?.map((item) => (
                            <LeftSide key={item?.productId}>
                                <ImageContainer><img src={item.productImage} alt="" /></ImageContainer>

                                <Box>
                                    <NameContainer>
                                        <Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>{item?.restaurantname}</Typography>
                                        <Typography sx={{ fontFamily: "Trebuchet MS", fontSize: '14px', color: 'grey' }}>{item?.productName}</Typography>
                                        <Typography sx={{ fontFamily: "Trebuchet MS", fontSize: '14px', color: 'grey' }}>{item?.restaurantlandmark}</Typography>
                                    </NameContainer>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginRight: '6.5rem' }}><CurrencyRupeeIcon sx={{ fontSize: '14px' }} /><Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold' }}>{item.productPrice}</Typography></div>
                                </Box>

                                <div style={{ display: 'flex', flexDirection: "column" }}>
                                    <Typography onClick={() => RemoveProduct({ productId: item.productId, userId })} sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', color: 'orange', cursor: 'pointer', marginLeft: '6rem' }}>Remove</Typography>
                                </div>

                            </LeftSide>


                        ))}
                </Box>

                <TotalContainer>
                    <Total data={data} />
                    <Box sx={{ marginTop: '20px', }}><Button variant='contained' color="warning" size="large" onClick={() => Checkout(total, userId)} sx={{ width: '44vw' }}><Typography sx={{ fontFamily: "Trebuchet MS", fontWeight: 'bold', textTransform: 'capitalize' }}>Place order</Typography></Button>
                    </Box>
                </TotalContainer>

            </CartContainer>


        </>

    )

}

export default CartItem