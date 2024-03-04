import { useState } from "react";
import Headerlgn from "../landingPage/Header/Headerlgn";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import greenlogo from "../../assets/greenlogo.png"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import BusinessEmail from "./BusinessEmail";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import { MyContext } from "../context/AppContext";
import { SpinnerDotted } from "spinners-react";
// import greenlogo from "./images/logoWhite"


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password1, setPassword] = useState("");
  const [signupIsTrue, setSignupIsTrue] = useState(false)


  const handleShowPassword = () => {
    console.log("object");
    setShowPassword(!showPassword);
  };
  const nav = useNavigate()

  const handleBuinessName = () => {
    setSignupIsTrue(true)
  }

  const handlesignin = () => {
    nav("/login")

  }
  const handlesignup = () => {
    nav("/signupsuccesspage")

  }
  const isFreeEmailDomain = (domain) => {
    const freeEmailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', /* Add more if needed */];
    return freeEmailDomains.includes(domain);
  };

  const isBusinessEmail = (email) => {
    const domain = email.split('@')[1];

    return !isFreeEmailDomain(domain);
  };

  // const { adminData, setAdminData } = useContext(MyContext);

  const schema = yup.object().shape({
    firstName: yup.string().min(3).required("Your firstName is Required"),
    lastName: yup.string().min(3).required("Your lastName is Required"),
    businessEmail: yup.string().email("invalid business email").required("Your email is Required").test('business-email', 'Email must be a business email',
      function (value) {
        if (!value) {
          return true;



          xdfv                                          
        }

        return isBusinessEmail(value);
      })
      .required('Email is required'),
    businessName: yup.string().min(3).required("Your BusinessName is Required"),
    phoneNumber: yup
      .string()
      .matches(/^0\d{10}$/, "phoneNumber must be 11 digits")
      .required("PhoneNumber is required "),
    password: yup
      .string()
      .min(8)
      .max(20)
      .required("Password must be a minimum of 8 Characters")
      .matches(
        /^(?=.*[!@#$%^&])(?=.*[A-Z]).{8,}$/,
        "Password must contain at least one uppercase letter, one special character, and be at least 8 characters long"
      ),
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
      const adminInformation = res.data.data



      nav('/successpage1');
      console.log(adminInformation)
      setLoading(false);
    } catch (err) {
      console.log(err, "err message");
      setLoading(false);
    }
  };




  // const url = `https://staftrack360.onrender.com/api/v1/signup`

  return (

    <>

      {
        signupIsTrue ? <>
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
                  <p className="err">{errors.password?.message}</p>

                  <button className="signuppbtn"
                  >
                    {
                      loading ? <SpinnerDotted size={30} color='white' /> : "SIGN UP"
                    }
                  </button>
                </div>
                <div className="sgnin">
                  <p>
                    Already have an account? <span onClick={handlesignin}>Sign in</span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </> : <>
          <Headerlgn />
          <div className="Businessemailbox">
            <div className="Businessmailwrap">
              <div className="businessmainwrap">
                <div className="Bizlogodiv">
                  <img src={greenlogo} alt="" />
                </div>
                <p>To experience our solution , Kindly enter your
                  Business Name  below</p>
                  <input
                    type="email"
                    placeholder="Business Name"
                    {...register("businessName")}
                  />
                <p className="err">{errors.businessName?.message}</p>
                <button onClick={handleBuinessName} className="Continuebtn">CONTINUE</button>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
};
export default Signup;
