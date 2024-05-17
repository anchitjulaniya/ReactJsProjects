import React from 'react'
import { FaClipboard } from "react-icons/fa";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";



function Home() {
    const [text, setText] = useState('');
  return (
    <div className='flex flex-col items-center py-8'>
        <h1 className='px-4 text-3xl md:text-4xl font-semibold pb-8 text-center'>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
        <div className='w-full flex h-[100vh] md:h-[50vh] gap-8 px-8 flex-col md:flex-row p-1 '>
            <div className='w-full md:w-[1/2] h-full '>
                <h1 className='text-2xl text-blue-500 font-semibold pl-4'>Enter your Text here </h1>
                <div className=' h-[80%] relative'>
                    <textarea placeholder='Enter your text here...' value={text} onChange={(e)=>{setText(e.target.value)}} className='border-2 rounded-xl border-blue-500 outline-none p-2 w-full h-[100%]'>
                        
                    </textarea>
                    <span onClick={()=>{setText("")}} className={`${text.length>0?'flex':'hidden'} hover:bg-[rgb(0,0,0,0.2)] items-center justify-center rounded-full h-[30px] w-[30px] hover:text-red-500 hover:cursor-pointer   absolute top-3 right-1`}>
                        <IoClose className='hover:scale-125 duration-300 text-2xl' />
                    </span>
                    <span onClick={()=>{navigator.clipboard.writeText(text); alert("Copied to clipboard")}} className= ' hover:cursor-pointer hover:scale-110 duration-300 rounded-full hover:bg-[rgb(0,0,0,0.2)] p-2 absolute bottom-4 right-2'>
                        <FaClipboard className='text-xl' />
                    </span>
                </div>
                <div className='flex gap-4 items-center px-2 py-1'>
                    <button className='rounded-lg hover:bg-blue-600 bg-blue-500 text-white font-semibold px-4 py-1'>UpperCase</button>
                    <button className='rounded-lg hover:bg-blue-600 bg-blue-500 text-white font-semibold px-4 py-1'>LowerCase</button>
                    <button className='rounded-lg hover:bg-blue-600 bg-blue-500 text-white font-semibold px-4 py-1'>Remove Extra Spaces</button>
                    
                </div>      
            </div>
            <div className='w-full md:w-[1/2]  h-full'>
                <h1 className='text-2xl text-blue-500 font-semibold pl-4'>Preview Document</h1>
                <div id="displayContainer" className='h-[80%] p-2 border-2  rounded-xl border-green-500 w-full'>
                    parsed Text
                </div>
            </div>
        </div>
        <div className='h-[100%] w-[1px] bg-black'></div>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 flex-col '>
                <h2 className='text-4xl font-semibold'>Summary of your Text</h2>
                <p className='pl-4'>Number of words: {0}</p>
                <p className='pl-4'>Number of Characters: {0}</p>
                <p className='pl-4'>Reading Time: {0}s</p>
            </div>
            
        </div>
    
    
    </div>
  )
}

export default Home