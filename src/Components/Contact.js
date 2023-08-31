import React from 'react';
import HeroImg2 from './HeroImg2';
import Footer from './Footer';
import Login from './Login';

const Contact = () => {
  return (
    <>
      <HeroImg2 heading='Contact' text='lets have a chat ↷' bgImage="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
      />
      <Login />
      <Footer />
    </>
  )
}

export default Contact
