import React from 'react'
import hero from '../assets/heroImg.png'
import hero2 from '../assets/heroImg2.png'
import hero3 from '../assets/heroImg3.png'
import extra1 from '../assets/extra1.jpeg'
import extra2 from '../assets/extra2.jpeg'
import extra3 from '../assets/extra3.jpeg'
import extra4 from '../assets/extra4.jpeg'


function Home() {
  return (
    <div className='flex flex-col items-center gap-5 py-12 mb-36'>
      <div className='flex flex-col items-center gap-5'>
        <img src={hero} alt="" className='w-[290px] lg:w-[392px] h-[212px]'  />
        <h1 className='text-2xl text-white font-bold my-6'>Remove Image <span className='text-blue-500 '>Editor</span></h1>
        <p className='text-[rgb(220,220,220)]'>Get a transparent background for any image</p>
        <span className='text-lg px-5 py-2 rounded-full text-white tracking-wider capitalize bg-sky-500 hover:cursor-pointer' >
            Upload Image
        </span>
        <p className='text-[rgb(220,220,220)]'>No image? try one of these</p>
        <span className='flex h-[75px] gap-8'>
            <span className='p-2 bg-white rounded-lg hover:cursor-pointer'><img src={extra1} className='h-[60px] w-[80px] rounded-lg' alt=""  /></span>
            <span className='p-2 bg-white rounded-lg hover:cursor-pointer'><img src={extra2} className='h-[60px] w-[80px] rounded-lg' alt=""  /></span>
            <span className='p-2 bg-white rounded-lg hover:cursor-pointer'><img src={extra3} className='h-[60px] w-[80px] rounded-lg' alt=""  /></span>
            <span className='p-2 bg-white rounded-lg hover:cursor-pointer'><img src={extra4} className='h-[60px] w-[80px] rounded-lg' alt=""  /></span>
            
        </span>
      </div>

      <div className='flex flex-col items-center gap-5'>
        <img src={hero2} alt="" className='w-[290px] lg:w-[392px] h-[212px]'  />
        <h1 className='text-2xl text-white font-bold my-6'> <span className='text-blue-500 '>Convert</span> Your Images | Files</h1>
        <p className='text-[rgb(220,220,220)]'>With Badass, you can convert your files to any format</p>
        <span className='text-lg px-5 py-2 rounded-full text-white tracking-wider capitalize bg-sky-500 hover:cursor-pointer' >
            Choose Files
        </span>
      </div>

      <div className='flex flex-col items-center gap-5'>
        <img src={hero3} alt="" className='w-[290px] lg:w-[392px] h-[212px]'  />
        <h1 className='text-2xl text-white font-bold my-6'> <span className='text-blue-500 '>Download</span> Multiple Images At Once</h1>
        <p className='text-[rgb(220,220,220)]'>Ever thought of downloading multiple images at once?</p>
        <span className='text-lg px-5 py-2 rounded-full text-white tracking-wider capitalize bg-sky-500 hover:cursor-pointer' >
            Download Image
        </span>
      </div>
      
    </div>
  )
}

export default Home