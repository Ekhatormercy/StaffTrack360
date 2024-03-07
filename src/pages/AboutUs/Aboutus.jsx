import React from 'react'
import "./Aboutus.css"
import favvepics from "../../assets/favvepics.jpg"
import lizzypics from "../../assets/lizzypics.jpg"
import ujahpics from "../../assets/ujahpics.jpg"
import mercyimg from "../../assets/mercyimg.jpeg"
import chibuikeimg from "../../assets/chibuikeimg.jpg"
// import aboutuspage from "../../assets/aboutuspage.png"
import illustrator from "../../assets/illustrator.jpg"
import Headerlgn from '../landingPage/Header/Headerlgn'
import Header from '../landingPage/Header/Header'

const Aboutus = () => {
  return (
    <>
    <Header/>
    <div className="aboutcontainer">
       <div className="aboutwrapper">
        <div className="aboutleftpart">
            <div className="aboutleftpartwrapper">
                <div className="lefttext">
                    <h1>Looking for how to transform ineffective management</h1>
                    <p>Our aim is to provide easy transformation of ineffective management with our app. </p>
                </div>
               
                 
                
            </div>
        </div>


        <div className="aboutright">
            <div className="aboutrightwrapper">
                <div className="aboutlogo">
                    <img src={illustrator} alt="" />
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
                        <h3>A world where there is no barrier between talent and opportunity.</h3>
                    </div>
                </div>
            </div>


            <div className="aboutmiddlepart">
            <div className="aboutmiddlepartcard">
                    <div className="aboutmiddlefirsttext">
                        <h1>OUR MISSION</h1>
                    </div>
                    
                    <div className="aboutmiddleparttext2">
                        <h3>To make it easy for employers to find the right person for every job.</h3>
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
              <img src={lizzypics} alt="" />
              <p>Toweh Elizabeth (Team Lead)</p>
              <h2>Back-End</h2>
            </div>
            <div className='chibuike'>
              <img src={chibuikeimg} alt="" />
              <p>Agbata Chibuike</p>
              <h2>Front-End</h2>
            </div>
            <div className='mercy'>
              <img src={mercyimg} alt="" />
              <p>Itohan Mercy</p>
              <h2>Front-End</h2>
            </div>
            <div className='collins'>
              <img src={ujahpics} alt="" />
              <p>Mazi Collins</p>
              <h2>Front-End</h2>
            </div>
            <div className='favour'>
              <img src={favvepics} alt="" />
              <p>chukwu Favour</p>
              <h2>Back-End</h2>

            </div>
            

          </div>


        </div>
    </div>
    </>
  )
}

export default Aboutus