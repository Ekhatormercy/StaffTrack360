// import { RouterProvider, createBrowserRouter } from 'react-router-dom"
import { HashRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './pages/landingPage/Landingpage'
import Login from './pages/Onboarding/Login'
import BusinessEmail from './pages/Onboarding/BusinessEmail'
import Signup from './pages/Onboarding/Signup'
import PasswordChange from './pages/Onboarding/Passwordchange'
function App() {
 

  return (
    <>
    <HashRouter>
   
      <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/businessmail' element={<BusinessEmail/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/changepass' element={<PasswordChange/>}/>
     

      </Routes>
    </HashRouter>
     
      
    </>
  )
}

export default App
