// import { RouterProvider, createBrowserRouter } from 'react-router-dom"
import "./App.css"
import { HashRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './pages/landingPage/Landingpage'
import Login from './pages/Onboarding/Login'
import BusinessEmail from './pages/Onboarding/BusinessEmail'
import Signup from './pages/Onboarding/Signup'
import PasswordChange from './pages/Onboarding/Passwordchange'
import MainAdminDash from './pages/Dahboard/AdminDashboard/MainAdminDash/MainAdminDash'
import FreeTrial from "./Components/FreeTrial/FreeTrial"
import SuccessfulTrial from "./Components/SuccessfulTrial/SuccessfulTrial"
import Verifyerror from "./Components/Verifyerror/Verifyerror"
import Loading from "./Components/Loading/Loading"
import Emailsuccessful from "./Components/Emailsuccessful/Emailsuccessful"
import Signupsuccessful from "./Components/Signupsuccessful/Signupsuccessful"
import Choose from "./Components/Choose/Choose"
import LoginEmployee from "./pages/Onboarding/LoginEmployee"
import LoginasBusiness from "./pages/Onboarding/Login"
function App() {
 

  return (
    <>
    <HashRouter>
   
      <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/loginasBusiness' element={<LoginasBusiness/>}/>
      <Route path='/loginasEmployee' element={<LoginEmployee/>}/>
      <Route path='/businessmail' element={<BusinessEmail/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/changepass' element={<PasswordChange/>}/>
      <Route path='/dashboard/*' element={<MainAdminDash/>} />
      <Route path='/trialpage' element={<FreeTrial/>} />
      <Route path='/successpage' element={<SuccessfulTrial/>} />
      <Route path='/verifypage' element={<Verifyerror/>} />
      <Route path='/loadingpage' element={<Loading/>} />
      <Route path='/emailsuccesspage' element={<Emailsuccessful/>} />
      <Route path='/signupsuccesspage' element={<Signupsuccessful/>} />
      <Route path='/decisionpage' element={<Choose/>} />
     

      </Routes>
    </HashRouter>
     
      
    </>
  )
}

export default App
