import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import EMeramLayout from './Layout/EMeramLayout'
import AuthLayout from './Layout/AuthLayout'
import Home from './Components/HomeComponents/Home/Home'
import Contact from './Components/HomeComponents/Contact/Contact'
import Login from './Components/AuthComponents/Login/Login'
import Register from './Components/AuthComponents/Register/Register'
import ProductAdd from './Components/EMeramComponents/ProductAdd/ProductAdd'
import Products from './Components/EMeramComponents/Products/Products'





function App() {

  return (
    <div className='app-container'>
      <Routes>

        <Route path='/' element={<HomeLayout />}>
          <Route index={true} element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='e-meram/' element={<EMeramLayout />}>
          <Route path='productadd' element={<ProductAdd />} />
          <Route path="products" element={<Products />} />
        </Route>

        <Route path='/auth/' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

      </Routes>
    </div>
  )

}

export default App
