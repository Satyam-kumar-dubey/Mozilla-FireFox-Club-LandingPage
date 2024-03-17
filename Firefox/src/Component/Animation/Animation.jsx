import React from 'react'
import './Animation.css'
import {motion} from 'framer-motion'

function Animation() {

    

  return (
    <div className="Animation">
        < motion.h1 initial={{x :0}} animate= {{x: "-100%" }} transition={{ease: "linear", repeat: Infinity, duration: 5}}> WE ARE DEVELOPERS </motion.h1>
        < motion.h1 initial={{x :0}} animate= {{x: "-100%" }} transition={{ease: "linear", repeat: Infinity, duration: 5}} id='second'> WE ARE DEVELOPERS</motion.h1>
    </div>
  )
}

export default Animation