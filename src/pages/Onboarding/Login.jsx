import Button from "../../Components/buttons/Button"
import Headerlgn from "../landingPage/Header/Headerlgn"
import "./Login.css"
import { useNavigate } from "react-router-dom"
// import LoginEmployee from "./LoginEmployee"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import { SpinnerDotted } from "spinners-react";
import Loading from "../../Components/Loading/Loading";
import { useState } from "react";
const LoginasBusiness =()=>{

    const Nav = useNavigate()

    const handlemail=()=>{
        Nav("/businessmail")
    }
    const handletrial =()=>{
      Nav("/trialpage")
    }
    // const [showPassword, setShowPassword] = useState(false)
 
  const [loading, setLoading] =useState(false)
  // const [show, setShow] = useState(false)

//   const handleShowPassword = () => {
//     console.log("object");
//     setShowPassword(!showPassword)
// }



const schema = yup.object(). shape({
  businessEmail: yup.string().email().required("Your email is required"),
  password: yup.string().min(8).max(20).required("password must be a minimum of 8 characters")

})

const { register, 
  handleSubmit, 
  formState: { errors },
} = useForm({
   resolver: yupResolver(schema),
   });

   const onSubmit = async (data) =>{
    try {
      const res = await axios.post(
           "https://staftrack360.onrender.com/api/v1/login",
           data,
        );
        console.log(res)
        Nav("/dashboard/*")
        setLoading(false)
        const token = res.data.data
        localStorage.setItem("token", JSON.stringify({token:token.token}))

        // localStorage.setItem("user", JSON.stringify({token}))
        // axios.defaults.headers.common["Authorization"] = `Bearer${token}`
        // console.log(token, "usertoken")

   console.log(token)

   }catch(err){
    console.log(err, 'err message')
      setLoading(false)
    
   }
   }
    return(
      <>
       <form onSubmit={handleSubmit(onSubmit)}>
    <Headerlgn/>  
    <div className="loginbox">
        <div className="loginwrap">
          <h1 className="bizh1">Business Login</h1>
            <div className="inputdiv">
                <input {...register("businessEmail")} type="text" placeholder="Enter Your Email"/>
              <p className="err1">{errors.businessEmail?.message}</p>
                <input  {...register("password")} type="password" placeholder="Enter Your Password"/>
              <p className="err1">{errors.password?.message}</p>
                
            
             <button className="LOGINBTN"  
              >
             {
                loading ? <SpinnerDotted size={30} color='white'/> :  "LOGIN"
             }
             </button>

                            
              
                  <div className="signherediv">
            <p>Don't have an Account? <span onClick={handletrial}>Signup</span></p>
          </div>
     </div>
         
         
          </div>
        </div>
        </form>
    
    </>

    )
}
export default LoginasBusiness