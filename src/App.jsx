import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import Home from './Components/Home'
import Contact from './Components/Contact'
import EMeramLayout from './Layout/EMeramLayout'
import Products from './Components/Products'



function App() {

  return (
    <div className='app-container'>
      <Routes>

        <Route path='/' element={<HomeLayout />}>
          <Route index={true} element={<Home />} />
          <Route path='home' element={<Home/>} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='/e-meram/' element={<EMeramLayout/>}>
            <Route path='products' element={<Products/>}/>
        </Route>
      </Routes>
    </div>
  )

}

export default App
