import React, { useEffect, useState } from 'react'
import newimg from './new.jpg'
import bg from './bg.avif'
import fox from './Fox.png'
import './FoxAnimation.css'


function FoxAnimation() {

const [rotate , setRotate] = useState(0);

useEffect(() => {
    window.addEventListener("mousemove", (e)=> {
        let x = e.clientX ;
        let y = e.clientY ;

        let deltaX = x - window.innerWidth/2 ;
        let deltaY = y - window.innerHeight/2 ;

        var angle = Math.atan2( deltaY , deltaX ) * (180/Math.PI)
        setRotate(angle)
    })
})



  return (
    

    <div className="Fox">

        <div className="some">SOME</div>
        <div className="thing">THING</div>

        <img src={fox} />
        <div className="eye" >
            <div className="line" style={{ transform: `rotate(${rotate}deg)`}} >
            <div className="motionEye" ></div>
            </div>

        </div>
        <div className="eye2" >
        <div className="line2" style={{ transform: `rotate(${rotate}deg)`}} >
            <div className="motionEye2" ></div>
            </div>

        </div>

        <div className="new">NEW</div>
        <div className="soon">SOON</div>

    </div>

   
  )
}

export default FoxAnimation