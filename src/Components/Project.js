import React from 'react'
import Footer from './Footer';
import HeroImg2 from './HeroImg2';
import PricingCard from './PricingCard';
import PortCards from './PortCards';
import CardData from './CardData'
const Project = () => {
  return (
    <div className='main-projects'>
      <HeroImg2 heading='Projects' text='Here,you can find my recent projects ↡' bgImage="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
      />
      <div className="projects">
        <h2>My Recent Projects</h2>
        <div className="head-container">
          {CardData.map((val, index) => {
            return (
              <PortCards
                key={index}
                imgSrc={val.imgSrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
              />
            )

          }
          )}

        </div>
        <PricingCard />
      </div>
      <Footer />

    </div>

  )
}

export default Project
