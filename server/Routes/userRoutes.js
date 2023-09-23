import { Router } from 'express'
import { UserSignUp, loginUser, addRestaurant, loginRestaurant, loginVerify } from '../Controllers/userControllers.js'
import { addProduct, ShowAll, GetRestaurant, AddFood, Getproducts, getProductDetails, deleteProduct, getCartProducts, removeProduct, PlaceOrder, verify, pastOrder, emptyCart, showpastorder, restaurantOrders, updateproduct } from '../Controllers/productController.js'

const router = Router()

router.post('/addUser', UserSignUp)
router.post('/userLogin', loginUser)
router.post('/loginrestaurant', loginRestaurant)
router.get('/All/:id', GetRestaurant)
router.post('/cart', AddFood)
router.get('/verify', loginVerify)
router.get('/All', ShowAll)
router.get('/cart/:userId', getCartProducts)
router.put('/delete', removeProduct)
router.post('/placeOrder/:userId', PlaceOrder)
router.put('/clearCart/:userId', emptyCart)
router.post('/orders', pastOrder)
router.get('/userOrder/:userId', showpastorder)

router.post('/addrestaurant', addRestaurant)
router.post('/createProduct/:userId', addProduct)
router.get('/ShowAll/:id', Getproducts)
router.put('/deleteProduct/:productId', deleteProduct)
router.get('/editproduct/:productId/:id', getProductDetails)
router.post('/edit/:id/:productId', updateproduct)
router.post('/payment/verify', verify)
router.get('/getrestOrder/:restId', restaurantOrders)

export default router
