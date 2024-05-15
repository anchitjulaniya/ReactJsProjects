import React, { useEffect, useState } from 'react'

function Quote() {
  const [apiData,setApiData] = useState([])
  async function fetchQuotes() {

    try {
        const response = await fetch("https://type.fit/api/quotes")
        const result = await response.json();
        setApiData(result)
    } catch (error) {
        console.error('Error');
    }
}

// Example usage:
  useEffect(() => {
    fetchQuotes();
  } , [])
  return (
    <div className=' flex flex-col items-center justify-center bg-[rgb(230,240,240)]'>
      <h1 className='text-4xl font-bold pt-10'>Quote</h1>
      {apiData.map((item,idx) => (
        <div key={idx} className='flex bg-white rounded-2xl shadow-xl hover:cursor-pointer hover:scale-105 duration-300 hover:shadow-2xl w-[80%] justify-center flex-col items-center border p-10 m-10 gap-6 shadow-md'>
          <h1 className='text-4xl font-bold text-center'>{item.text}</h1>
          <p>{item.author} </p>
        </div>
      ))}
    </div>
  )
}

export default Quote