import { useEffect, useState } from "react"
// import { FcMenu } from 'react-icons/fc';
import { HiMenu } from "react-icons/hi";
import { GiCancel } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";
import "./Header.css"
const Header =({show, setShow})=>{
    const [isScrolled, setIsScrolled] =useState(false);

    const Nav = useNavigate()

    const handlelogin =()=>{
        Nav("/login")
    }
    const handlesignup =()=>{
        Nav("/signup")
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
                    <p style={{color: "orange"}}>Home</p>
                    <p className={` ${isScrolled ? 'text-scrolled' : ''}`}>Service</p>
                    <p className={` ${isScrolled ? 'text-scrolled' : ''}`}>About Us</p>
    
                 
                </div>
                <div className="Upbuttndiv">
                <button onClick={handlelogin} className={`loginbtn ${isScrolled ? 'login-scrolled' : ''}`}>Login</button>
               <button onClick={handlesignup} className={`Trialbtn ${isScrolled ? 'signup-scrolled' : ''}`}>Sign Up</button>
                  
                </div>
                <div className='burger' onClick={() => setShow(!show)}>

{
    show === false ? <HiMenu />: <GiCancel/>
}
</div>
            </div>
        </div>
    )
}

export default Header