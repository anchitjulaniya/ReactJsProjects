import { useState, useReducer } from 'react'

function App() {
  const [inputTask, setinputTask] = useState("")
  const reducer = (rState, action)=>{
    switch(action.type){
      case "ADD":
        return {taskList : [...rState.taskList,inputTask]};
    }

  }
  const [rState, dispatch] = useReducer(reducer, {taskList:[]});

  

  return (
    <div>
      <h1>ToDoList</h1>
      <input value={inputTask} onChange={(e)=>setinputTask(e.target.value)} type="text" className='w-[300px] outline-none border-black border rounded-md' />
      <button onClick={()=>{dispatch({type:"ADD"})}}  className='bg-red-500 px-4 py-[1px] text-white border-black border rounded-md'>Add</button>
      <div id="displaycontainer" className='border-red-500 border-2 flex flex-col items-center '>
        <ul>
          {rState.taskList.length == 0 ? "No Task Added" :(rState.taskList.map((task,index)=>{
            return <li key={index}>{index+1}. {task}  ✏️ ❌</li>
          }))}
        </ul>
      </div>
    </div>
  )
}

export default App
