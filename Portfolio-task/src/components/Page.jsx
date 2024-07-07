import React from 'react';
import Home from './Home'
import Work from './Work'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Starfield from 'react-starfield';



function Page() {

  return (
    <div className='flex-grow min-px-2 lg:px-20'>
      <Starfield
        starCount={20000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="#050A30"
      />
        <Home />
        <Work />
        <br /><br /><br />
        <About />
        <br /><br /><br />
        <Contact />
        <Footer />
        
        
        

    </div>
  )
}

export default Page