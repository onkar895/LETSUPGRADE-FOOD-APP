import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Authentication/Signup'
import Login from './Pages/Authentication/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Restlogin from './Pages/Authentication/Admin/RestLogin';
import RestSignup from './Pages/Authentication/Admin/RestSignup';
import RestProfile from './Pages/RestProfile/RestProfile';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from './Context/Context';
import RestaurantPage from './Pages/RestaurantPage/RestaurantPage';
import Cart from './Pages/Cart/Cart';
import PreviousOrder from './Pages/Previous Orders/PreviousOrders';
import RestaurantOrder from './Pages/RestaurantPage/RestaurantOrder';
import ShowAll from './Pages/ShowAll/ShowAll';
import { Edit } from './Pages/ShowAll/Edit';



function App() {

   const {account, setAccount} = useGlobalContext();
   const Role = localStorage.getItem('role')
   const{partner,setPartner} = useGlobalContext();
   const [isAuthenticated, isUserAuthenticated] = useState(false)
   const {role,setRole}=useGlobalContext();

   useEffect(()=>{
    if(localStorage.getItem('role')){
      setRole(Role)
    }
   },[role])

   
   useEffect(()=>{
    const name= localStorage.getItem('name') 
    if(name)
    {
      setAccount(name)
    }
   },[name])
   useEffect(()=>{
    const name= localStorage.getItem('username')
    if(name){
      setPartner(name)
    }
   },[name])

  return (
  <BrowserRouter>
         <ToastContainer position="top-center"
                         autoClose={2000}
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover
                         theme="light"/>
         <Routes>
             <Route exact path='/' element={<Home/>} />
             <Route exact path='/login' element={<Login/>}/>
             <Route exact path='/Signup' element={<Signup/>}/>
             <Route exact path='/Restlogin' element={<Restlogin/>}/>
             <Route exact path='/RestSignup'element={<RestSignup/>}/>           
             <Route exact path='/Restaurant/:id' element={<RestaurantPage/>}/>
             <Route exact path='/Cart' element={<Cart/>}/>  
             {role==='user' && <Route path='/PreviousOrder' element={<PreviousOrder/>} />}
             {role==='restaurant' && <Route exact path='/RestaurantOrder' element={<RestaurantOrder/>} />}
             {role==='restaurant' && <Route exact path='/edit/:productId' element={<Edit/>}/>}
             {role==='restaurant' && <Route exact path='/ShowAll' element={<ShowAll/>}/>}
             {role==='restaurant' && <Route exact path='/RestProfile' element={<RestProfile/>}/>}

         </Routes>
  </BrowserRouter>
  )
}

export default App
