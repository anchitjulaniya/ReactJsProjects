import React from 'react'

function Contact() {
  return (
    <div className='h-fit min-h-[100vh] flex flex-col gap-10 justify-center '>
        <h1 className='text-[rgb(174,188,198)] text-6xl'>Contact me:</h1>
        <div className='text-[rgb(174,188,198)] border-[rgb(174,188,198)] border-2 rounded-lg flex flex-col p-8 w-[90%] mx-auto lg:mx-0 lg:w-3/4 '>
             <label htmlFor="name">Name</label>
             <input className='outline-none text-[rgb(0,216,182)] bg-transparent border-b-2 border-white focus:border-[rgb(0,216,182)] duration-700' type="text" />

             <br /><br />

             <label htmlFor="name">Email</label>
             <input className='outline-none text-[rgb(0,216,182)] bg-transparent border-b-2 border-white focus:border-[rgb(0,216,182)] duration-700' type="text" />

             <br /><br />

             <label htmlFor="name">Message</label>
             <textarea rows={5} cols={30} className='outline-none text-[rgb(0,216,182)] bg-transparent border-b-2 border-white focus:border-[rgb(0,216,182)] duration-700' type="text" />

             <br /><br />

             <span className='hover:cursor-pointer hover:bg-[rgb(0,216,182)] hover:text-black rounded-lg border-[rgb(0,216,182)] border-2 duration-500 w-fit px-3 py-1'>Send</span>
        </div>
    </div>
  )
}

export default Contact