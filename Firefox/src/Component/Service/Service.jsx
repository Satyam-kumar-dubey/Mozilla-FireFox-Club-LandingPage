import React from 'react'
import './Service.css'
import { motion } from 'framer-motion'

function Service() {

    
  return (
    <div className="services">
        <div className="line1">
            <motion.div className="container-1 bucket" >
                <h3>DEBUGGING</h3>
                <span>Identifying and fixing errors in software, a crucial skill for programmers to ensure code functionality and performance.</span>
            </motion.div>
            <div className="container-2 bucket">
                <h3>OPEN-SOURCE PROJECTS</h3>
                <span>Collaborative software development where source code is accessible, allowing contributions, modifications, and community-driven enhancements.</span>
            </div>
        </div>
        <div className="line2nd">
        <div className="container-3 bucket">
            <h3>CODING COMPETITION</h3>
            <span>Competitive programming challenges where participants showcase coding skills by solving intricate problems, often within a time-constrained environment.</span>
            
        </div>
        </div>
        <div className="line3">
            <div className="container-4 bucket">
            <h3>HACKATHON</h3>
            <span>Intensive coding event fostering creativity, collaboration, and innovation as teams work against the clock to solve challenges and create solutions.</span>
            </div>
            <div className="container-5 bucket">
                <h3>QUIZES</h3>
                <span>Knowledge assessments covering diverse topics, promoting learning and engagement through interactive question-and-answer sessions, often in a competitive format.</span>
            </div>
            <div className="container-6 bucket">
                <h3>TECHNICAL EVENTS</h3>
                <span>Engaging gatherings featuring workshops, discussions, and presentations exploring the latest trends and advancements in technology.</span>
            </div>
        </div>
    </div>
  )
}

export default Service