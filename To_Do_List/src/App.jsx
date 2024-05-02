import { useState } from 'react'
import Createtask from '../Createtask';


function App() {
  
  const [task, setTask] = useState([]);
  
  return (
    <div className='pt-10'>
      <h1 className='text-center font-bold text-4xl'>Todo List</h1>
      <div className='w-[100%] mx-auto flex items-center justify-center'>
      <span className='flex gap-5'><input type="text" id="input" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs border-black border-[1px] rounded-md px-3" />
        <button onClick={() => {showModal()}} className='border px-4 py-1'>Add</button></span>
      </div>

     
      <div id="displayContainer">
        {task.map((item, index) => {
          return (
            <div className="display flex items-center justify-center gap-4" key={"A"+index}>
              <p className='text-black'>{item.task}</p>
              <p className='text-grey-200'>{item.date}</p>
              <p className='text-grey-200'>{item.time}</p>
              <p></p>
            </div>
          )}
        )}
      </div>
      
      
    </div>
  )
}

export default App
