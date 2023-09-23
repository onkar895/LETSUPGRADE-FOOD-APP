
import Partner from "../Schema/partnerSchema.js";
import Product from "../Schema/productschema.js";
import User from "../Schema/userSchema.js";
import Razorpay from 'razorpay'
import crypto from 'crypto'
import {isValidObjectId} from "mongoose"



 const key_id= 'rzp_test_ir5DSVDeFpn4C1' ; 
 const key_secret=  'hi2b7sYP0zMG0rPxkPPpPYaC';


export const addProducttoDb = async (req, res) => {
    try {
        const { userId } = req.params;
        const { name, price, description, image, quantity } = req.body;
        const food = await Product.findOne({name})
        if(food){
            return res.json({error:'Product is already there'});
            
        } 
        else{

        if (
            name.length < 1 ||
            image.length < 1 ||
            price.length < 1 ||
            description.length < 6 ||
            quantity.length < 1
        ) {
            return res.status(500).json({ warning: 'Please enter the correct details' });
        }
        else {
            const partner = await Partner.findById(userId);

            if (!partner) {
                return res.json({ error: "Not allowed to add products" });
            } else {
                const newProduct = new Product({
                    name,
                    price,
                    description,
                    image,
                    quantity,
                });

                const partnerProducts = partner.products;
                partnerProducts.push(newProduct);

                await partner.save();
                return res.json({ success: "Product added successfully", newProduct: partner.products });
            }
        }
    } }
    catch (error) {
        res.json("Error while calling the addProducttoDb API", error);
    }
}

export const ShowAll = async(req,res) =>{

   try {
    const AllProducts = await Partner.find({})
    return res.status(200).json(AllProducts)

  
   } catch (error) {
    res.status(500).json("error while calling the Show All api")
    
   }
    

}
  

//shows the particular restaurant to the user
export const Getrest = async(req,res)=>{
     
    const {id} = req.params;
    
    if (!id || !isValidObjectId(id)) {
        return res.status(500).json({ error: 'Invalid restaurant ID' });
    }
    

    try {
        const restaurant = await Partner.findById(id);
        return res.status(200).json(restaurant);
        
  
    } catch (error) {
        console.log(error)
        res.status(500).json('error while calling the GetRest API',error)
        
    }
}


export const AddFoods = async(req,res)=> {

    try {
        const {productId,productName,productQuantity,productPrice,productImage,userId,restroId} =req.body
    const user = await User.findById(userId)
    if(!user){
        return res.json({error:'Please login to add products to cart'});
    }
    else{ 
        const existingproduct= user.cart.find((product)=>product.productId===productId)
        if(existingproduct){
            return res.json({error:'product is already present in the cart'})
        } else{
        
        const restaurant = await Partner.findById(restroId)
        if(!restaurant){
            return res.json({error:'the restaurant does not exists'})

        }
        else{
            
            const restaurantname= restaurant.name
            const restaurantlandmark=restaurant.landmark
    
            const CartProduct = {restroId,productId,productName,productQuantity,productPrice,restaurantname,restaurantlandmark,productImage}
            user.cart.push(CartProduct)
            await user.save()
            return res.json({success:"products were added to the cart"})
        }
    }
}
        
    } catch (error) {
        res.json('error while calling the add to cart api',error)
    }
}


//for getting the products of a restaurant for a particular restaurant in restaurant's side
export const Getproducts = async(req,res)=>{
    const {id} = req.params
    try {
        const restaurant= await Partner.findById(id)
        if(!restaurant){
           return res.json({error:"no restaurant found"})
        }
        else{
        return res.json({success:"products found",products:restaurant.products})

        }
    } catch (error) {
        res.json('error while calling the GetProducts API', error)
    }
}

//for getting the details of particular product of restaurant on the edit page
export const getProductDetails = async(req, res)=>{
          const {productId,id} = req.params
          
         console.log(productId,id)
    try {
        const restaurant= await Partner.findById(id)
        if(!restaurant){
            return res.json({error:'No restaurants found'})
        }
        else{
            const product = await restaurant.products.find((product)=>product._id.equals(productId))
            if(!product){
                return res.json({error:'No products found'})
            }
            else{
                return res.status(200).json({success:"Products",product})
            }
        }
       
    } catch (error) {
        console.log(error)
        res.status(500).json('error while calling the Edit products API', error)
    }
}

export const updateproduct =async(req,res)=>{
    const {id,productId}=req.params
    const {edited}= req.body
    console.log(edited.name,edited.description,productId,id)
    try {
        const restaurant = await Partner.findById(id)
        
    if(!restaurant){
        return res.json({error:'Restaurant not found'})
    }
    else{
        const product = await restaurant.products.find((product)=>product._id.equals(productId))
        if(!product){
            return res.json({error:'product not found'})
        }
        else{
            product.name= edited.name;
            product.description=edited.description
           
            if(product.name <6 || product.description<10){
                return res.json({error:"product details should be more than 5 characters"})
            }else{
                await restaurant.save();
                return res.status(200).json({succes:'Details Updated Successfully'})
            }
        }  
    }
    } catch (error) {
        console.log(error)
        res.status(500).json("error while calling  the update product api",error)
    }
}

export const deleteProduct = async(req,res)=>{
    
    const {productId}= req.params
    const {id} = req.body
    
    
    try {
        if (!id || !isValidObjectId(id)) {
            return res.status(500).json({ error: 'Invalid ID' });
        }
        else{
            const restaurant = await Partner.findById(id)
       if(!restaurant){
                return res.json('Restaurant not found')
            }
        else{    
            const product = await restaurant.products.find(product=>product._id.equals(productId))
                if(!product){
                    return res.json('product not found')
                }
                else
                { 
                    restaurant.products = restaurant.products.filter(product => !product._id.equals(productId));
                    await restaurant.save();
                    return res.status(200).json({success:'product removed'})
                }}
        }
            
        }
 
     catch (error) {
        console.log(error)
        res.status(500).json('error while calling the delete product API',error)
    }
}

export const ShowCartProducts = async(req,res)=> {
    try {
        const {userId}= req.params
        const user = await User.findById(userId)
        if(!user){
            return res.json({error:'Login to Add to carts'});
        }
        else{
              return res.status(200).json({success:"Products found",cart: user?.cart});
          

        }
    } catch (error) {
        console.log(error)
        res.status(500).json('error while calling the Show cart products API')
    }
}

export const RemoveProduct =async(req,res) =>{
    
         const  {productId,userId} = req.body
        
    try {
      const  user = await User.findById(userId)
      if(!user){
        return res.json({error:'Please Login to delete'})
      }
      else{
        const productIndex= await user.cart.findIndex((product)=>product.productId===productId);
        
        if(productIndex===-1){
            return res.json({error:"product not found"})
        }
        else{
            user.cart.splice(productIndex,1)
            await user.save();
            return res.status(200).json({success:'product removed'})
        }
      }

        
    } catch (error) {
        console.log(error)
        res.status(500).json('error while calling the remove product API',error)
        
    }
}

export const orderPlacement = async(req,res)=>{
    try {
        const {userId}= req.params
        const user = await User.findById(userId)
           if(!user){
            return res.json({error:'Please login to order'})
           } 
           
           else{
            const {total} = req.body  
            const instance = new Razorpay({
                key_id,
                key_secret,
              });
    
            const options = {
                amount: Number(total*100),
                currency: 'INR',
            }
            
            
            const order = instance.orders.create(options, function (err, order){
                if(err){
                    return res.json({error:'Server Error'})
                }
                else{
                    return res.json({success:'order created',order})
                    
                }
            })
           }
       
       
        

    } catch (error) {
        res.json({msg:'error while calling the order placement API',error})
    }
}
export const verify =async(req,res)=> {
   

        try {
            let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    
            var expectedSignature = crypto.createHmac('sha256', key_secret)
                .update(body.toString())
                .digest('hex');
    
            if (expectedSignature === req.body.razorpay_signature) {
                res.send({ code: 200, message: 'Sign Valid', });
            } else {
    
               return res.send({ code: 500, message: 'Sign Invalid' });
            }
        } catch (error) {
            res.status(500).json(error, "error while calling verifyPayment api")
        }
    }
    
    export const oldorder = async(req,res)=> {
       
        const {userId,allproducts,total,orderId} = req.body
        
        try {
            const user = await User.findById(userId)
            if(!user){
                return res.json({error:'Please login to see orders'})
            }
            else{
                const orders =[]
                 allproducts.forEach((item) => {
                    const order = {
                        restname: item.restname,
                        dish: item.foodname,
                        landmark: item.landmark,
                        quantity: item.quantity,
                        image:item.image,
                        amount: total,
                        restroId:item.restroId,
                        orderId,
                        
                    };
                    orders.push(order);
                    
                });
                user.order.push(...orders);
                await user.save();
                return res.status(200).json({success:"Order Placed Successfully"})

            }
        }   
         catch (error) {
          res.status(500).json('error while calling the old Order API', error)   
        }
    }


    export const emptyCart =async(req,res)=>{
        const {userId}= req.params
        console.log(userId)
        
        try {
            const user = await User.findById(userId)
            if(!user){
               return res.json({error:'please login to access cart'})
            }
            else{
                await User.findByIdAndUpdate(userId,{cart:[]})
                const updatedUser =await User.findById(userId)
                return res.json({success:'cart cleared successfully',cart:updatedUser.cart})
            }
        } catch (error) {
            res.status(501).json('error while calling the empty cart api', error)
            
        }
    }

    export const showpastorder = async(req,res)=>{
        const {userId}= req.params
        try {
            const user = await User.findById(userId)
            if(!user){
                return res.json({error:'please login to get your order details'})
            }
            else{
                return res.status(200).json({success:'success',order:user?.order})
                
            }
        } catch (error) {
            res.status(500).json('error while calling show past order API',error)
        }
    }



    
//for getting the orders of  restaurant  
    export const restOrders = async (req, res) => {

        const {restId}= req.params
        
        
        try {
            const restaurant = await Partner.findById(restId); // Use your Partner model to find the restaurant
    
            if (!restaurant) {
                return res.json("not found");
            } else {
                // Find all users in the User model
                const users = await User.find();
    
                if (!users || users.length === 0) {
                    return res.json("No users found");
                }
    
                // Create a Set to store unique order IDs
                const uniqueOrderIds = new Set();
    
                // Iterate through each user and filter their orders
                for (const user of users) {
                    for (const order of user.order) {
                        if (order.restroId === restId) {
                            uniqueOrderIds.add(order.orderId);
                        }
                    }
                }
    
                // Create an array to store unique orders based on order IDs
                const uniqueOrders = [];
    
                // Iterate through each user and their orders again to collect unique orders
                for (const user of users) {
                    for (const order of user.order) {
                        if (order.restroId === restId && uniqueOrderIds.has(order.orderId)) {
                            uniqueOrders.push(order);
                        }
                    }
                }
    
                // Replace restaurant's restorder with the unique orders
                restaurant.restorder = uniqueOrders;
    
                await restaurant.save(); // Correct the method to save the restaurant
    
                return res.status(200).json({ success: 'Found orders', order: restaurant?.restorder });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json("Error while calling the restOrders API");
        }
    };
    