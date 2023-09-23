import { Router } from "express";
import { addUser,userlogin,addpartner,loginPartner,verifyUserlogin} from "../Controllers/userControllers.js";
import { addProducttoDb,ShowAll,Getrest,AddFoods,Getproducts,getProductDetails,
         deleteProduct,ShowCartProducts,RemoveProduct,orderPlacement, 
         verify,oldorder,emptyCart,showpastorder,restOrders,updateproduct} from "../Controllers/productController.js";

 const router = Router();

 //user side routes:

router.post('/add', addUser)
router.post('/login',userlogin)
router.post('/cart',AddFoods)
router.get('/verify',verifyUserlogin)
router.get('/All',ShowAll)
router.get('/All/:id',Getrest)
router.get('/cart/:userId',ShowCartProducts)
router.put('/delete',RemoveProduct)
router.post('/placeOrder/:userId',orderPlacement)
router.put('/clearCart/:userId',emptyCart)
router.post('/orders',oldorder)
router.get('/getOrder/:userId',showpastorder)

//restaurant routes

router.post('/addrest',addpartner)
router.post('/loginrestaurant',loginPartner)
router.post('/upload/addproduct/:userId',addProducttoDb)
router.get('/ShowAll/:id',Getproducts)
router.put('/deleteProduct/:productId',deleteProduct)
router.get('/editproduct/:productId/:id',getProductDetails)
router.post('/edit/:id/:productId',updateproduct)
router.post('/payment/verify',verify)
router.get('/getrestOrder/:restId',restOrders)


export default router

