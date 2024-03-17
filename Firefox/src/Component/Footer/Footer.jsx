import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="foot">
        <motion.div
          className="footmotion"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        >
          MOZILLA FIREFOX CLUB{" "}
        </motion.div>
        <motion.div
          className="footmotion"
          id="secondfoot"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        >
          {" "}
          MOZILLA FIREFOX CLUB
        </motion.div>
      </div>

      <div className="footersection">
        <div className="connect">
          <div className="link">
            <span>CONNECT US </span>
            <div className="icons">
                <FaLinkedin size={45} />
                <FaInstagramSquare size={45} />
                <FaWhatsappSquare size={45}/>
                <FaGithubSquare size={45} />
            </div>
          </div>
          <div className="contact">
            <span>CONTACT US</span>
            <div className="details">
                <span>Mo:8651328785</span>
                <span>Mail:shouryabhardwaj572@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="copyright">
            <span><FaCopyright/> 2024 | Designed with ❤️ By Satyam Kumar | All rights reserved.</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
