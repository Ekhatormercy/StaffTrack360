import React from 'react'
import "./Aboutus.css"
import aboutuspage from "../../assets/aboutuspage.png"

const Aboutus = () => {
  return (
    <div className="aboutcontainer">
       <div className="aboutwrapper">
        <div className="aboutleftpart">
            <div className="aboutleftpartwrapper">
                <div className="lefttext">
                    <h1>Looking for how to transform ineffective management</h1>
                </div>
                <div className="lowertext">
                    <p>Our aim is to provide easy transformation of ineffective management with our app. </p>
                </div>
            </div>
        </div>


        <div className="aboutright">
            <div className="aboutrightwrapper">
                <div className="aboutlogo">
                    <img src={aboutuspage} alt="" />
                </div>
            </div>
        </div>
    
       </div>
        <div className="aboutmiddlepartcontainer">
            <div className="aboutmiddlepart">
                <div className="aboutmiddlepartcard">
                    <div className="aboutmiddlefirsttext">
                        <h1>OUR VISION</h1>
                    </div>
                    
                    <div className="aboutmiddlesecondtext">
                        <h3>A world where there is no barrier etween talent and opportunity.</h3>
                    </div>
                </div>
            </div>


            <div className="aboutmiddlepart1">
            <div className="aboutmiddlepart1card">
                    <div className="aboutmiddleparttext1">
                        <h1>OUR MISSION</h1>
                    </div>
                    
                    <div className="aboutmiddleparttext2">
                        <h3>To make it easy for employers to fing the right person for every job.</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className='ourteamdiv'>
          <div className='meetourteam'>
            <h1>MEET OUR TEAM</h1>
            <p>The Best Team</p>
          </div>
          <div className='meetourteamimage'>
            <div className='toweh'>
              <img src="./public/toweh.jpg" alt="" />
              <p>Toweh Elizabeth (Team Lead)</p>
              <h2>Back-End</h2>
            </div>
            <div className='chibuike'>
              <img src="./public/chibuike.jpg" alt="" />
              <p>Agbata Chibuike</p>
              <h2>Front-End</h2>
            </div>
            <div className='mercy'>
              <img src="./public/mercy.jpg" alt="" />
              <p>Itohan Mercy</p>
              <h2>Front-End</h2>
            </div>
            <div className='collins'>
              <img src="./public/collins.jpg" alt="" />
              <p>Mazi Collins</p>
              <h2>Front-End</h2>
            </div>
            <div className='favour'>
              <img src="./public/favour.jpg" alt="" />
              <p>chukwu Favour</p>
              <h2>Back-End</h2>

            </div>
            

          </div>


        </div>
    </div>
  )
}

export default Aboutus



