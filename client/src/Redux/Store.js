import {createAsyncThunk, createSlice, configureStore, createStore} from "@reduxjs/toolkit"
import axios from 'axios'

const URL = "http://localhost:8000"

const initialState ={

    allrestaurants:[],
    Singlerestaurant:[],
    Products:{},
    cart:[],
    order:[],
    restOrder:[],
    productDetail:[]
    



}
export const GetAllProducts = createAsyncThunk('restaurants/GetAllProducts', async() => {

    try {
        const {data} = await axios.get(`${URL}/All`)  
    return data;
}
    
    catch (error) {
        console.log('error while calling the getall Api',error)   
    }
})

export const GetRestaurant = createAsyncThunk('/GetAllProducts',async({id})=>{
    try {
      const  {data} = await axios.get(`${URL}/All/${id}`) 
      return data;

    } catch (error) {
        console.log('error while calling the GetRestaurant API',error)
    }
})
 
//for showing all the products inside a restaurant's list

export const GetProducts = createAsyncThunk('/GetProducts',async(id)=>{
    try {
        const {data}= await axios.get(`${URL}/ShowAll/${id}`)
        return data;
    } catch (error) {
        console.log('error while calling the Getproducts API',error)
        
    }
})

//for editing the restaurant products 
export const EditProduct =createAsyncThunk('/EditProductdetails',async({productId,id})=>{
       
    try {
        const {data:{product}}= await axios.get(`${URL}/editproduct/${productId}/${id}`)
        console.log(product)
        return product;
        
    } catch (error) {
        console.log('error while calling the Edit product API', error)
    }
}) 

//for getting cart products
export const GetCartProducts = createAsyncThunk('/GetCartProducts',async(userId)=>{
        
    try {
        const {data} = await axios.get(`${URL}/cart/${userId}`)
        return data;
        
    } catch (error) {
        console.log('error while calling the get cart products API', error)
        
    }

})

//for removing products in cart

export const clearCart = createAsyncThunk('/clearcart',async(userId)=>{
    
    try {
        const {data:{cart}}=  await axios.put(`${URL}/clearCart/${userId}`)
        return cart;
        
    } catch (error) {
        console.log('error while calling the clear cart API', error)
    }

})
//for getting the orders at customer side
export const getOrder = createAsyncThunk('/Order',async(userId)=>{
    try {
        const {data} =await axios.get(`${URL}/getOrder/${userId}`)
        console.log(data)
        return data;
        
    } catch (error) {
        console.log('error while calling the get order APi', error)
    }
})

//For getting the orders in Restaurant side
export const getRestOrder =createAsyncThunk('/orderId',async(restId)=>{
    console.log(restId)
            
    try {
         const {data}= await axios.get(`${URL}/getrestOrder/${restId}`)
         console.log(data)
         return data;

        
    } catch (error) {
        console.log('error while getting the getrestorder API',error)
    }
})

const restaurantSlice = createSlice({
    name:"restaurants",
    initialState,
    extraReducers:(builders)=>{
        
        builders.addCase(GetAllProducts.fulfilled,(state,action)=>{
        state.allrestaurants = action.payload;
        
    })
        builders.addCase(GetRestaurant.fulfilled,(state,action)=>{
        state.Singlerestaurant = action.payload;
    })
         builders.addCase(GetProducts.fulfilled,(state,action)=>{
            state.Products= action.payload
         })
        builders.addCase(GetCartProducts.fulfilled,(state,action)=>{
            state.cart= action.payload;
        })
        builders.addCase(getOrder.fulfilled,(state,action)=>{
            state.order=action.payload;
        })
        builders.addCase(getRestOrder.fulfilled,(state,action)=>{
            state.restOrder = action.payload;
        })
        builders.addCase(EditProduct.fulfilled,(state,action)=>{
            state.productDetail=action.payload;
        })
  
    }
    
})

const Store = configureStore({
    reducer:{
        restaurants:restaurantSlice.reducer}
})

export default Store