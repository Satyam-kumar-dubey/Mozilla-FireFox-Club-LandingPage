import React from 'react'
import './Offer.css'
import { motion } from 'framer-motion'

function Offer() {

    

  return (
    <div className="offer">
        <div className="bold">
            <motion.div className="h1" >WHAT</motion.div>
            <motion.div className="h1" >WE OFFERS ?</motion.div>

            
        </div>
        <div className="desc">Promote <strong>WEB DEVELOPMENT</strong> and <strong>OPEN SOURCE TECHNOLOGY</strong> in the University</div>
    </div>
  )
}

export default Offer