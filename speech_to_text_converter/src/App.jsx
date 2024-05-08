import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[80%] flex flex-col items-center gap-6'>
      <h1 className='text-5xl font-semibold text-center tracking-wider'>Speech to Text Converter</h1>
      <h2 className='text-lg text-center tracking-wider text-[rgb(96,101,123)]'>A React hook that converts speech from the microphone to text and makes it available to your React components.</h2>
      <div className='w-[800px] h-[400px] rounded-2xl shadow-2xl'>
        <div id="displayBox" className='flex justify-center items-center h-[340px]'></div>

        <div id="buttonBox" className='h-[60px] px-8 flex justify-between items-center pb-8'>
          <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]'>Copy To Clipboard</button>
          <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]'>Start Listening</button>
          <button className='bg-[#11a683] text-white text-[18px] px-7 py-4 rounded-lg hover:bg-[rgb(81,200,120)]'>Stop Listening</button>
        </div>
      </div>
    </div>
  )
}

export default App
