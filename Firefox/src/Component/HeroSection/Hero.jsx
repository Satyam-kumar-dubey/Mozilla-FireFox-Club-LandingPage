import React, { useEffect, useState } from 'react'
import logo from '../HeroSection/logo.png'
import './Hero.css'
import { motion } from 'framer-motion'
import smile from './smile.png'


function Hero() {

  const [rotate , setRotate] = useState(0);

useEffect(() => {
    window.addEventListener("mousemove", (e)=> {
        let x = e.clientX ;
        let y = e.clientY ;

        let deltaX = x - window.innerWidth/2 ;
        let deltaY = y - window.innerHeight/2 ;

        var angle = Math.atan2( deltaY , deltaX ) * (180/Math.PI)
        setRotate(angle -180)
    })
})



  return (
    <div className="HeroSection">
        <div className="navbar">
            <div className="logo">
                <motion.img src={logo} initial={{x:"-200%"}} animate={{x:0}} transition={{ease: "linear", duration: 0.5}} />
            </div>
            <div className="options">
                <span >Home</span>
                <span>Events</span>
                <span>About</span>
                <span>Team</span>
                <span>Contact</span>
                <span id='login'>Login</span>
            </div>
        </div>
        <div className="home">
          
          <img src={smile}/ >

          <div className="eyes"></div>
          <div className="eyes2"></div>

          <div className="eyesblack">
            <motion.div className="eyeline" style={{ transform: `rotate(${rotate}deg)`}}>
              <div className="eyecircle"></div>
            </motion.div>
          </div>
          <div className="eyesblack2">
          <motion.div className="eyeline" style={{ transform: `rotate(${rotate}deg)`}}>
              <div className="eyecircle"></div>
            </motion.div>
          </div>



          <h1 id='heading'>MOZILLA</h1>
          <div className="firefox">
            <div className="animate">
              {/* <img src={logo} alt="" /> */}
            </div>
            <motion.h1  initial={{x:"-100%"}} animate={{x:0}} transition={{ease: "linear", duration: .5}}>FIREFOX  CLUB</motion.h1>
          </div>
          <h1>VIT BHOPAL</h1>
        </div>
        <div className="line"></div>
        <div className="info">
          <span>Events</span>
          <span>Know More</span>
          <span>Team</span>
        </div>
    </div>
  )
}

export default Hero