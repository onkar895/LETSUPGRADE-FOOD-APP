import axios from 'axios'

const URL= 'http://localhost:8000';

        export const addusers = async(data)=>{
            try {
                return await axios.post(`${URL}/add`,data);
                
            } catch (error) {
                console.log('error while calling the Add user API')
                
            }
        }
        export const getUser =async(data)=>{
            
            try {
                return await axios.post(`${URL}/login`, data)

                
            } catch (error) {
                console.log('error while calling the userlogin api')
                
            }
        }
        
        export const addrestaurant = async(data) => {
            
            try { 
                return await axios.post(`${URL}/addrest`,data);
                
            } catch (error) {
                console.log('error while calling the add restaurant api')
                
            }

        }
        export const LoginUser =async(data)=>{

            try {
                return await axios.post(`${URL}/loginrestaurant`,data)
                
            } catch (error) {
                console.log('error while calling the LoginUser Api')
            }
        }
        export const verifyUser = async()=>{

            try {
                return await axios.get(`${URL}/verify`)
            } catch (error) {
                console.log('error while calling the verify user API')
            }
        }
        export const CreateProduct = async({name,price,image,description,quantity,address,landmark,categories,origin,userId}) =>{
            
            
              try {
                   return await axios.post(`${URL}/upload/addproduct/${userId}`,{name,price,image,description,quantity,address,landmark,categories,origin})
              } catch (error) {
                console.log('error while calling the add dish api',error)
              }
        }

        //for editing the product details
        export const updateProduct=async({edited,productId,id})=>{
            console.log(edited,productId,id)
            try {
                return await axios.post(`${URL}/edit/${id}/${productId}`,{edited})
            } catch (error) {
                console.log('error while calling the update product details',error)
            }
        }
        
        export const DeleteProduct =async({productId,id})=>{

            try {
                return await axios.put(`${URL}/deleteProduct/${productId}`,{id})
            } catch (error) {
                console.log("error while calling the delete produdt API",error)
            }
        }
        

        export const AddToCart = async({productId,productName,productQuantity,productPrice,productImage,userId,restroId})=> {

            try {
               return await axios.post(`${URL}/cart`,{productId,productName,productQuantity,productPrice,productImage,userId,restroId})
                
            } catch (error) {
                console.log('error while calling the Addtocart API',error)
            }


        }
        
        export const RemoveFromCart = async({productId,userId}) => {
            console.log({productId,userId})
            try {
                 await axios.put(`${URL}/delete`,{productId,userId});
            } catch (error) {
                 console.log('error while calling the remove from cart API',error)   
            }
        }
         
        export const PlaceOrder =async(total,userId)=>{

            try {
               return await axios.post(`${URL}/placeOrder/${userId}`,{total})
              
                
            } catch (error) {
                console.log('error while calling the place order API',error)
            }
        }
        
        export const verifyPayment= async(response)=>{  
            try {
                return axios.post(`${URL}/payment/verify`,response)
            } catch (error) {
                console.log('error while calling the verify payment API', error)
            }
        }

        export const buyProducts = async({userId,allproducts,total,orderId})=> {
            
            
            try {
                    
                return await axios.post(`${URL}/orders`,({userId,allproducts,total,orderId}))

            } catch (error) {
                console.log('error while calling the buyProducts API', error)
            }

        }
       
       