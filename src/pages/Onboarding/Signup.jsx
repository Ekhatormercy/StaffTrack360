import { useState } from "react";
import Headerlgn from "../landingPage/Header/Headerlgn";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import BusinessEmail from "./BusinessEmail";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import { MyContext } from "../context/AppContext";
import { SpinnerDotted } from "spinners-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password1, setPassword] = useState("");

  const handleShowPassword = () => {
    console.log("object");
    setShowPassword(!showPassword);
  };
  const nav =useNavigate()

  const { adminData, setAdminData } = useContext(MyContext);

  const schema = yup.object().shape({
    firstName: yup.string().min(3).required("Your firstName is Required"),
    lastName: yup.string().min(3).required("Your lastName is Required"),
    businessEmail: yup.string().email().required("Your email is Required"),
    businessName: yup.string().min(3).required("Your BusinessName is Required"),
    phoneNumber: yup
      .string()
      .matches(/^0\d{10}$/, "phoneNumber must be 11 digits")
      .required("PhoneNumber is required "),
    password: yup
      .string()
      .min(8)
      .max(20)
      .required("Password must be a minimum of 8 Characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `https://staftrack360.onrender.com/api/v1/signup`,
        data
      );
      console.log(res);

      nav("/dashboard/*");
      // console.log(userInformation)
      setLoading(false);
    } catch (err) {
      console.log(err, "err message");
      setLoading(false);
    }
  };

  // const url = `https://staftrack360.onrender.com/api/v1/signup`

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Headerlgn />
        <div className="Signupbox">
          <div className="signupwrap">
            <div className="inputwrapSignup">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
              />
              <p className="err">{errors.firstName?.message}</p>

              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
              />
              <p className="err">{errors.lastName?.message}</p>

              <input
                type="text"
                placeholder="Business Name"
                {...register("businessName")}
              />
              <p className="err">{errors.businessName?.message}</p>
              <input
                type="email"
                placeholder="Business Email"
                {...register("businessEmail")}
              />
              <p className="err">{errors.businessEmail?.message}</p>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />
              <p className="err">{errors.phoneNumber?.message}</p>
              <div className="inputii">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <div className="eyediv">
                  {showPassword ? (
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
              </div>
              <p className="err">{errors.password?.message}</p>

              <button className="signuppbtn"
              >
               {
                loading ? <SpinnerDotted size={30} color='white'/> :  "SIGN UP"
             }
              </button>
            </div>
            <div className="sgnin">
              <p>
                Already have an account? <span>Sign in</span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Signup;
