import { useEffect, useRef, useState } from "react"
import {Link as ScrollLink} from "react-scroll"
// import { FcMenu } from 'react-icons/fc';
import { HiMenu } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { FcMenu } from 'react-icons/fc';
import { RiArrowDownSLine } from "react-icons/ri";
import { GiCancel } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";
import "./Header.css"

const Header =({show, setShow})=>{
    const [isScrolled, setIsScrolled] =useState(false);
    
  const [showlogin, setShowlogin] =useState(false);

  const showdrop =()=>{
    setShowlogin(true);
  }

    const Nav = useNavigate()

    const handleloginasBusiness =()=>{
        Nav("/loginasBusiness")
    }
    const handleloginasEmployee =()=>{
        Nav("/loginasEmployee")
    }
    const handletrial =()=>{
        Nav("/signup")
    }
    const handleAboutUs =()=>{
        Nav("/Aboutus")
    }
    const handlehome =()=>{
        Nav("/")
    }


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldChangeColor = scrollPosition > 100; 

      setIsScrolled(shouldChangeColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <div className={`Header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="Headerwrap">
                <div className={`staflogodiv ${isScrolled ? 'logo-scrolled' : ''}`}>
                        <h3 className={`staflogodiv ${isScrolled ? 'logo-scrolled' : ''}`}>StaffTrack<span>360</span></h3>
                   
                </div>
                <div className={`Navdiv ${isScrolled ? 'text-scrolled' : ''}`}>
                    <p onClick={handlehome} style={{color: "orange"}}>Home</p>
                    <p className={` ${isScrolled ? 'text-scrolled' : ''}`} ></p>
                    <ScrollLink
              to="seclayer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
               <p className={` ${isScrolled ? 'text-scrolled' : ''}`}>Services</p>
            </ScrollLink>
                    <p onClick={handleAboutUs} className={` ${isScrolled ? 'text-scrolled' : ''}`}>About Us</p>
                    <p className={` ${isScrolled ? 'text-scrolled' : ''}`}>Payment</p>
    
                 
                </div>
                <div className="Upbuttndiv">
                <button className={`loginbtn ${isScrolled ? 'login-scrolled' : ''}`} onMouseOver={showdrop}>Login <RiArrowDownSLine /></button>
               <button onClick={handletrial} className={`Trialbtn ${isScrolled ? 'signup-scrolled' : ''}`}>Sign Up</button>
                  
                </div>
                <div className='burger' onClick={() => setShow(!show)}>

{
    show === false ? <FiMenu />:<GiCancel/>
}
</div>

         {
          showlogin?    <div className="logindrop" onMouseLeave={()=>setShowlogin(false)}>
          <h4 onClick={handleloginasBusiness}>As Business</h4>
          <hr />
          <h4 onClick={handleloginasEmployee}>As Employee</h4>
        </div>:null
         }
            </div>

        </div>
    )
}

export default Header