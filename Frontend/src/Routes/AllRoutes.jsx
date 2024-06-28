import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Help from '../Components/Help'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import SinglePage from '../Components/SinglePage'
import ProductPage from '../Routes/ProductPage'
import Homepage from './Homepage'
import Cart from '../Components/Cart'
import Checkout from '../Components/Checkout'
import Companylogin from './Company'
import PaymentMethod from '../Components/PaymentMethod'
import Search from '../Components/Search'
import CardDetail from '../Routes/CardDetail'
import OTP from './OTP'
import ProtectedRoute from '../Components/ProtectedRoute'
import Profile from '../pages/profile/Profile'
import AddNewTodo from '../pages/addTodo/addNewTodo'
import Dashboard from '../pages/dashboard/Dashboard'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/product/:id' element={<SinglePage />}></Route>
      <Route path='/help' element={<Help />}></Route>
      <Route path='/company' element={<Companylogin/>}></Route>
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/addtodo' element={<AddNewTodo />} />
      <Route path='/signin' element={<Register />} />
      <Route path='/cart' element={<Cart />}></Route>
      {/* <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>}></Route> */}
      <Route path='/checkout' element={<Checkout />}></Route>
      {/* <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>}></Route> */}
      <Route path='/paymentMethod' element={ <ProtectedRoute><PaymentMethod /></ProtectedRoute>}></Route>
      <Route path='/products' element={<ProductPage />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='/fillcarddetail' element={<CardDetail />}></Route>
      <Route path='/otp' element={<OTP />}></Route>
      {/* <Route path='/fillcarddetail' element={<ProtectedRoute><CardDetail /></ProtectedRoute>}></Route> */}
      {/* <Route path='/otp' element={<ProtectedRoute><OTP /></ProtectedRoute>}></Route> */}
    </Routes>
  )
}

export default AllRoutes