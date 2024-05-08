import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[80%] flex flex-col items-center gap-6'>
      <h1 className='text-5xl font-semibold text-center tracking-wider'>Speech to Text Converter</h1>
      <h2 className='text-lg text-center tracking-wider text-[rgb(96,101,123)]'>A React hook that converts speech from the microphone to text and makes it available to your React components.</h2>
      <div className='w-[800px] h-[400px] rounded-2xl shadow-2xl'>
        <div id="displayBox" className='flex justify-center items-center h-[340px]'></div>

        <div id="buttonBox" className='h-[60px] flex justify-between items-center'>
          <button>Copy to clipboard</button>
          <button>Start Listening</button>
          <button>Stop Listening</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
