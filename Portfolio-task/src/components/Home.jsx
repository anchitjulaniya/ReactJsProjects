import React from 'react'
import './home.css'

function Home() {
  
  return (
    <div className='min-h-[100vh] h-fit w-full flex items-center justify-center relative'>
       <div className='text-lg md:text-xl lg:text-2xl font-bold text-white rounded-xl backdrop-blur-2xl absolute top-[18%] xl:top-[23%] left-[13%] border-[rgb(6,169,147)] border-2 h-fit w-[78%] sm:w-[75%] md:w-[70%] lg:w-[60%] xl:w-[50%] pt-4 pb-2 px-4 md:p-10'>
              <h3 className='text-[rgb(133,146,153)]'>Hi! I&apos;m</h3>
              <h1 className='text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold'>Anchit Julaniya</h1>
              <h3 className='flex flex-grow text-[rgb(133,146,153)]'>and I am a Software Developer 💻
                  {/* <span id='about'>
                    <span id="first">am a Software Developer 💻</span>
                    <span id="second">make some cool stuff 🚀</span>
                    <span id="third">care about accessibility 🤝</span>
                    <span id="fourth">am a UI/UX Enthusiast 🤳</span>
                  </span> */}
              </h3>

              <span className='flex flex-row text-lg md:text-xl lg:text-2xl  items-center gap-10 font-normal my-5'>
                <span className='bg-[rgb(6,169,147)] border-[rgb(6,169,147)] border-2 text-white px-3 py-2 hover:bg-transparent hover:scale-110 rounded-lg duration-500 hover:cursor-pointer'>My Work</span>
                <span className='bg-[rgb(88,212,255)] hidden sm:block border-[rgb(88,212,255)] rounded-full border-2 text-black px-5 py-2 hover:bg-transparent hover:scale-110 duration-500 hover:cursor-pointer hover:text-white'>Got a job? Let&apos;s talk</span>
                <span className='bg-[rgb(88,212,255)] block sm:hidden border-[rgb(88,212,255)] rounded-full border-2 text-black px-5 py-2 hover:bg-transparent hover:scale-110 duration-500 hover:cursor-pointer hover:text-white'>Talk</span>
              
              </span>

          </div>
     

    </div>
  )
}

export default Home