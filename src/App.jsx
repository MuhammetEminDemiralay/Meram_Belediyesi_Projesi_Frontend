import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import EMeramLayout from './Layout/EMeramLayout'
import AuthLayout from './Layout/AuthLayout'
import Home from './Components/HomeComponents/Home/Home'
import Contact from './Components/HomeComponents/Contact/Contact'
import Login from './Components/AuthComponents/Login/Login'
import Register from './Components/AuthComponents/Register/Register'
import Products from './Components/EMeramComponents/Products/Products'
import CreateCompany from './Components/EMeramComponents/CreateCompany/CreateCompany'
import Company from './Components/EMeramComponents/Company/Company'
import ProductDetail from './Components/EMeramComponents/ProductDetail/ProductDetail'
import NewsDetail from './Components/HomeComponents/NewsFolder/NewsDetail/NewsDetail'
import ProjectDetail from './Components/HomeComponents/PorjectsFolder/ProjectDetail/ProjectDetail'
import WorkDetail from './Components/HomeComponents/WorksFolder/WorkDetail/WorkDetail'
import NewsAdd from './Components/HomeComponents/NewsFolder/NewsAdd/NewsAdd'
import NewsUpdate from './Components/HomeComponents/NewsFolder/NewsUpdate/NewsUpdate'






function App() {

  return (
    <div className='app-container'>
      <Routes>

        <Route path='/' element={<HomeLayout />}>
          <Route index={true} element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='newsdetail/:id' element={<NewsDetail />} />
        <Route path='projectdetail/:id' element={<ProjectDetail />} />
        <Route path='workdetail/:id' element={<WorkDetail />} />
        <Route path='news-add' element={<NewsAdd/>} />
        <Route path='news-update/:id' element={<NewsUpdate/>} />
        <Route path='work-add' element={<NewsAdd/>} />


        <Route path='e-meram/' element={<EMeramLayout />}>
          <Route index={true} element={<Products />} />
          <Route path='createcompany' element={<CreateCompany />} />
          <Route path='mycompany/:id' element={<Company />} />
          <Route path='product-detail/:id' element={<ProductDetail />} />
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
