import React from 'react'
import "./ConfirmEmail.css"
import greenlogo from "../../assets/greenlogo.png"
const ConfirmEmail = () => {
  return (
    <div className="ConfirmEmailcontainer">
        <div className="logopart">
            <div className="logo">
                <img src={greenlogo} alt="" />
            </div>
        </div>
        <div className='cardcontainer'>
            <div className="cardwrapper">
                <div className="cardfirsttext">
                    <h2>Confirm your email address</h2>
                </div>

                <div className="cardmiddletextwrapper">
                    <div className="cardmiddletext">
                         <p>Almost done! An email from Stafftrack360 has been sent to you. please  follow
                            the instructions in the email to finish setting up your account.
                        </p> 
                    </div>
                </div>

                {/* <div className="lastcardtextcontainer">
                    <div className="lastcardtext">
                    <p>Can't find the email? <span>We can resend it</span></p>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="lasttextcontainer">
            <div className='lasttext'>
                <p>Made a mistake? <span>Start again</span></p>
            </div>
        </div>
    </div>
  )
}

export default ConfirmEmail