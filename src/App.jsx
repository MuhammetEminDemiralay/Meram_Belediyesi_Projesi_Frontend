import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import EMeramLayout from './Layout/EMeramLayout'
import Products from './Components/EMeramComponents/Products'
import Home from './Components/HomeComponents/Home'
import Contact from './Components/HomeComponents/Contact'
import AuthLayout from './Layout/AuthLayout'
import Login from './Components/AuthComponents/Login'
import Register from './Components/AuthComponents/Register'
import ProductAdd from './Components/EMeramComponents/ProductAdd'




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
