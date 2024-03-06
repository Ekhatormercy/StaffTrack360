

import Button from "../../Components/buttons/Button"
import Headerlgn from "../landingPage/Header/Headerlgn"
import "./Login.css"
import { useNavigate } from "react-router-dom"
// import LoginEmployee from "./LoginEmployee"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import Loading from "../../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { loginUserInfo } from "../../Redux/State";
import { useState } from "react";
import { css } from '@emotion/react';
import { HashLoader } from 'react-spinners';



const loginasEmployee = () => {
  // const { userInfo, setUserInfo } = useContext(MyContext)
  const [isError, setIsError] = useState('')
  const [showPassword, setShowPassword] =useState(false)
  const Nav = useNavigate()
  const [loading, setLoading] = useState(false)
  const handlemail = () => {
    Nav("/businessmail")
  }
  const handlesignup = () => {
    Nav("/signup")
  }

  const handleShowPassword = () => {
    console.log("object");
    setShowPassword(!showPassword);
  };

  const schema = yup.object().shape({
    email: yup.string().email().required("Your email is required"),
    password: yup.string().min(8).max(20).required("password must be a minimum of 8 characters")

  })
  const dispatch = useDispatch()
  const loginInfo = useSelector((state)=>state. productSlice.userInfo)
  // console.log(loginInfo)

  const { register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function onSubmit(data) {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://staftrack360.onrender.com/api/v1/logInStaff",
        data
      );
      // dispatch(loginUserInfo2(res))
      // console.log("Response from Api", res);
      
      localStorage.setItem('loginUserInfo2', JSON.stringify(res.data.data))

    

      
      setLoading(false);
      Nav("/dashboardEmployee");
    } catch (err) {
      console.log("Error from api", err);
      setLoading(false);

      setIsError(err.message ? err.messge : err.response?.data?.message)
      setTimeout(() => {
        setIsError('')
      }, 10000);
    }
  }
  // console.log(loginInfo)


  

    return(
      <>
       <form onSubmit={handleSubmit(onSubmit)}>
    <Headerlgn/>  
    <div className="loginbox">
        <div className="loginwrap">
          <h1 className="bizh1">Employee Login</h1>
            <div className="inputdiv">
              <input required {...register("email")} type="text" placeholder="Enter Your Email" />
        
              <p className="err1">{errors.businessEmail?.message}</p>
              <div className="loginpass">
                <input required type= {showPassword ? "text" : "password"}
                 placeholder="Enter Your Password"
                {...register("password")} 
                />
                   {
                    showPassword ? (
                    <AiOutlineEye
                      onClick={handleShowPassword}
                      className="AiOutlineEye"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="AiOutlineEyeInvisible"
                      onClick={handleShowPassword}
                    />
                  )}
                  </div>
               
              
              

              <p className="err1">{errors.password?.message}</p>
                
{/*             
             <button className="LOGINBTN"  
              >
             {
                loading ? <SpinnerDotted size={30} color='white'/> :  "LOGIN"
             }
             </button> */}
   <button
         className= "LOGINBTN"
        disabled={loading}
        style={{ position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' }}
      >
        {loading && (
          <HashLoader
            css={css`
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `}
            color="#ffffff"
            loading={loading}
            size={30}
          />
        )}
        {loading ? null : 'LOGIN'}
      </button>
                            
              
                  <div className="signherediv">
            <p>Don't have an Account? <span onClick={handlesignup}>Signup</span></p>
          </div>
     </div>
         
     </div>
         
         
      

          </div>
        
        </form>
    
    </>

  )
}
export default loginasEmployee