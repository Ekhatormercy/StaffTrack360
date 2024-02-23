import Headerlgn from "../landingPage/Header/Headerlgn"
import "./Passwordchange.css"
const PasswordChange =()=>{
    return(
        <>
        <Headerlgn/>
      <div className="passwordchangebox">
        <div className="passwordwrap">
            <div className="passwordInput">
              <div className="Newpasstext">
              <p>Enter New Password to continue</p>
              </div>
                <input type="text" placeholder="New Password" />
                <input type="text" placeholder="Confirm Password" />
                <button className="ContinueBtn">CONTINUE</button>
            </div>
        </div>
      </div>
      </>
    )
}
export default PasswordChange