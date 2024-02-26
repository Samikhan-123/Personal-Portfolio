import React from 'react'
import Footer from './Footer';
import HeroImg2 from './HeroImg2';
import AboutSection from './AboutSection';
const About = () => {
  return (
    <div>
    <HeroImg2 heading = 'Hy I,m Sami Khan ' text='A MERN-Stack Developer with MongoDB, Express.js, React.js, Node.js Expertise'     bgImage="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
    />
    <AboutSection />
    <Footer />
    </div>
  )
}

export default About
