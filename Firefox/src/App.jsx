import React from 'react'
import Hero from './Component/HeroSection/Hero'
import Animation from './Component/Animation/Animation'
import Events from './Component/Events/Events'
import FoxAnimation from './Component/FoxAnimation/FoxAnimation'
import Offer from './Component/Offer/Offer'
import Service from './Component/Service/Service'
import Footer from './Component/Footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
    <Hero />
    <Animation/>
    <Events />
    <FoxAnimation />
    <Offer />
    <Service />
    <Footer />
    </>
  )
}

export default App