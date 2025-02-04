import React from 'react'
import Footer from './Footer'
import CarouselPage from './Carousel'
import AboutSection from './About'
import AppointmentPage from './Enqiury'
import ContactSection from './Contact'
import Services from './Services'
import ServiceCards from './ServiceCards'
import Industries from './Industries'
import InfoCard from './InfoCard'
import Gallery from './Gallery'
import Navbar from './Navabar'

function Home() {
  return (
    <div id='home'>
    <Navbar/>
    <CarouselPage/>
    <AboutSection/>
    <Services/>
    <ServiceCards/>
    <InfoCard/>
    <Industries/>
    <Gallery/>
    <ContactSection/>
    <AppointmentPage/>
    <Footer/>
    </div>
  )
}

export default Home
