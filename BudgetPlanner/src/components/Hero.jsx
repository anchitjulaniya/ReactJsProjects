import React from 'react'
import { useContext } from 'react'
import { myContext } from './Context'

function Hero() {

    const {state} = useContext(myContext);

  return (
    <div className='flex items-center justify-center py-8'>
       <span className='flex justify-between w-full'>
            <div className='px-5 py-2 text-black bg-[#F1F5F9] rounded-lg'>Budget : {state.budget}</div>
            <div className='px-5 py-2 text-green-800 bg-green-100 rounded-lg'>Remaining : {state.remaining}</div>
            <div className='px-5 py-2 text-blue-800 bg-blue-200 rounded-lg'>Spent So Far : {state.spent}</div>
       </span>
    </div>
  )
}

export default Hero