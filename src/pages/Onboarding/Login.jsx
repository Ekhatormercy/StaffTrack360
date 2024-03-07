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


import { useDispatch, useSelector } from "react-redux";
import { loginUserInfo } from "../../Redux/State";
import { useState } from "react";
import { css } from '@emotion/react';
import { HashLoader } from 'react-spinners';



const LoginasBusiness = () => {
  // const { userInfo, setUserInfo } = useContext(MyContext)
  const [isError, setIsError] = useState({
    state:false, message: "", 
  })
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

  const isFreeEmailDomain = (domain) => {
    const freeEmailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', /* Add more if needed */];
    return freeEmailDomains.includes(domain);
  };
  
  const isBusinessEmail = (email) => {
    const domain = email.split('@')[1];

    return !isFreeEmailDomain(domain);
  };
 



  const schema = yup.object().shape({
    businessEmail: yup.string().email("invalid business email").required("Your email is Required")  .test('business-email', 'Email must be a business email', function (value) {
      if (!value) {
        return true;
      }

      return isBusinessEmail(value);
    })
    .required('Email is required'),
    password: yup.string().min(8).max(20).required("password must be a minimum of 8 characters")  .matches(
      /^(?=.*[!@#$%^&])(?=.*[A-Z]).{8,}$/,
      "Password must contain at least one uppercase letter, one special character, and be at least 8 characters long"
    ),

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
        "https://staftrack360.onrender.com/api/v1/login",
        data
      );
      dispatch(loginUserInfo(res))
      // console.log("Response from Api", res);
      
      localStorage.setItem('loginUserInfo', JSON.stringify(res.data.data))

    

    
      setLoading(false);
      Nav("/dashboard/*");
    } catch (err) {
      console.log("Error from api", err);
          setIsError({state: true, message: err.response.data.message})
      setLoading(false);


      setTimeout(() => {
        setIsError('')
      }, 10000);
    }
  }
  // console.log(loginInfo)


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Headerlgn />
        <div className="loginbox">
          <div className="loginwrap">
            <h1 className="bizh1">Business Login</h1>
            <div className="inputdiv">
              <input required {...register("businessEmail")} type="text" placeholder="Enter Your Email" />
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
              {
                isError.state?alert(isError.message):null
              }
            
              
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
export default LoginasBusiness