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
import { SpinnerDotted } from "spinners-react";
import Loading from "../../Components/Loading/Loading";
// import { useContext, useEffect, useState } from "react";
// import { MyContext } from "../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { loginUserInfo } from "../../Redux/State";
import { useState } from "react";



const LoginasBusiness = () => {
  // const { userInfo, setUserInfo } = useContext(MyContext)
  const [isError, setIsError] = useState('')
  const Nav = useNavigate()
  const [loading, setLoading] = useState(false)
  const handlemail = () => {
    Nav("/businessmail")
  }
  const handletrial = () => {
    Nav("/trialpage")
  }



  const schema = yup.object().shape({
    businessEmail: yup.string().email().required("Your email is required"),
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
        "https://staftrack360.onrender.com/api/v1/login",
        data
      );
      dispatch(loginUserInfo(res))
      // console.log("Response from Api", res);
      
      localStorage.setItem('loginUserInfo', JSON.stringify(res.data.data))

    

      // const { token } = res.data;
      // localStorage.setItem("user", JSON.stringify({ token }));
      // axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
      // Set userInfo to the response data
      setLoading(false);
      Nav("/dashboard/*");
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


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Headerlgn />
        <div className="loginbox">
          <div className="loginwrap">
            <h1 className="bizh1">Business Login</h1>
            <div className="inputdiv">
              <input {...register("businessEmail")} type="text" placeholder="Enter Your Email" />
              <p className="err">{errors.businessEmail?.message}</p>
              <input  {...register("password")} type="password" placeholder="Enter Your Password" />
              <p className="err">{errors.password?.message}</p>
              <p className="errorMessageTag">{isError}</p>
              {
                loading ? (<p>Loading.........</p>) : (
                  <button className="LOGINBTN">LOGIN</button>
                  

                )
              }
             
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