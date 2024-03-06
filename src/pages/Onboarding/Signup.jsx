import { useState } from "react";
import Headerlgn from "../landingPage/Header/Headerlgn";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import greenlogo from "../../assets/greenlogo.png";
import { useForm } from "react-hook-form";
import toast  from "react-hot-toast";

import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { css } from '@emotion/react';
import { HashLoader } from 'react-spinners';

// import { SpinnerDotted } from "spinners-react";


const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password1, setPassword] = useState("");
  const [signupIsTrue, setSignupIsTrue] = useState(false);

  const handleShowPassword = () => {
    console.log("object");
    setShowPassword(!showPassword);
  };
  const nav = useNavigate();

  const handleBuinessName = () => {
    setSignupIsTrue(true);
  };

  const handlesignin = () => {
    nav("/");
  };
  const handlesignup = () => {
    nav("/signupsuccesspage");
  };
  const isFreeEmailDomain = (domain) => {
    const freeEmailDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "GMAIL.COM",
      "GMAI.Com",
    ];
    return freeEmailDomains.includes(domain);
  };

  const isBusinessEmail = (email) => {
    const domain = email.split("@")[1];

    return !isFreeEmailDomain(domain);
  };

  const notify = () => {
    toast("Success");
    "clip"
  };

  // const { adminData, setAdminData } = useContext(MyContext);

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "Minimum of 3 characters for the first name field")
      .max(30)
      .matches(
        /^[a-zA-Z\s'-]+$/,
        "First name can only contain letters, spaces, apostrophes, and hyphens"
      )
      .required("Please provide your first name"),
    lastName: yup
      .string()
      .min(3, "Minimum of 3 characters for the last name field")
      .max(30)
      .matches(
        /^[a-zA-Z\s'-]+$/,
        "Last name can only contain letters, spaces, apostrophes, and hyphens"
      )
      .required("Please provide your last name"),
    businessEmail: yup
      .string()
      .email("invalid business email")
      .required("Your email is Required")
      .test(
        "business-email",
        "Email must be a business email",
        function (value) {
          if (!value) {
            return true;

          
          }

          return isBusinessEmail(value);
        }
      )

      .required("Email is required"),
    businessName: yup
      .string()
      .min(3, "Minimum of 3 characters for the business name field")
      .max(30)
      .matches(
        /^[a-zA-Z0-9\s&'-]+$/,
        "Business name can only contain letters, numbers, spaces, ampersands, apostrophes, and hyphens"
      )
      .required("Please provide a business name"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(20, "Password must be at most 20 characters long")
      .matches(
        /^[a-zA-Z0-9@#\$%\^&\()_+\[\]{}\|;:\',\.\/<>?\`~!-]+$/,
        "Password must contain lowercase, uppercase, numbers, and special characters"
      )
      .required("Please input a password"),
    phoneNumber: yup
      .string()
      .min(11, "Phone number must be at least 11 digits long")
      .max(11, "Phone number must be at least 11 digits long")
      .matches(
        /^0\d{10}$/,
        "Invalid phone number format. Please provide a valid Nigerian phone number."
      )
      .required("Please provide a phone number"),
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
    

      const adminInformation = res.data.data;

      toast.success("successfull signup");
      notify()

      setTimeout(() => {
        nav("/loginasBusiness");
      }, 5000);
      nav("/successpage1");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error("Signup failed. Email already exists.");
      console.log(err, "err message");
    }
  };

  return (
    <>
      {signupIsTrue ? (
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
                  <>
                  <p className="err">{errors.password?.message}</p>

                
<button
         className="signuppbtn"
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
        {loading ? null : 'SIGNUP'}
      </button>
                  </>
                </div>
                <div className="sgnin">
                  <p>
                    Already have an account?{" "}
                    <span onClick={handlesignin}>Sign in</span>
                  </p>
                </div>
              </div>
            </div>
          </form>
         
        </>
      ) : (
        <>
          <Headerlgn />
          <div className="Businessemailbox">
            <div className="Businessmailwrap">
              <div className="businessmainwrap">
                <div className="Bizlogodiv">
                  <img src={greenlogo} alt="" />
                </div>
                <p>
                  To experience our solution , Kindly enter your Business Name
                  below
                </p>
                <input
                  type="email"
                  placeholder="Business Name"
                  {...register("businessName")}
                />
                <p className="err">{errors.businessName?.message}</p>
                <button onClick={handleBuinessName} className="Continuebtn">
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Signup;
