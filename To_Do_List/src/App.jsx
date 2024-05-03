import { useEffect, useState } from 'react'  
// import Modal from './Modal';

function App() {
  // const [value, setValue] = useState("")

  const [task, setTask] = useState([]);

  const createTask = () => {
    if(document.getElementById('input').value.trim() !== "") {
  setTask([...task, {
     title: document.querySelector('.input').value,
     task: document.querySelector('.input').value, 
     completed: false,
     time: new Date().toLocaleTimeString(), 
     date: new Date().toLocaleDateString() }])
    }
    document.getElementById('input').value = "";
}

  const close = (index)=>{
    // const updatedTask  = task.splice(index,1);
    const updatedTask = task.filter((t, i) => i != index);
    setTask(updatedTask);
  }

  const editTask = (index)=>{
    document.getElementById('input').value = task[index].task;
    const updatedTask = task.filter((t, i) => i != index);
    setTask(updatedTask); 
  }

  const isTaskCompleted = (index)=>{
    task[index].completed = !task[index].completed;
    setTask([...task]);
    console.log(task[index]);
  }

  

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("task")))
    {
      const data = localStorage.getItem("task");
      setTask(JSON.parse(data));
    }
     },[])

  useEffect(()=>{
     localStorage.setItem("task", JSON.stringify(task));
    },[task])
  

    // -modal
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };



    // -modal

  return (
    <div className='pt-10'>
      <h1 className='text-center font-bold text-4xl'>Todo List</h1>
      <div className='w-[100%] mx-auto flex items-center justify-center'>
      <span className='flex gap-5 my-6'><input type="text" id="input" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs border-black border-[1px] rounded-md px-3" />
        <button onClick={() => {createTask()}} className='border px-4 py-1'>Add</button></span>
      </div>

     
      <div id="displayContainer">
        {task.map((item, index) => {
          return (
            <div className={`display flex items-center justify-center gap-4 my-3 text-lg ${item.completed ? 'line-through' : ''}`} key={"A"+index}>
              <p className='text-black'>{item.task}</p>
              <p className='text-grey-200'>{item.date}</p>
              <p className='text-grey-200'>{item.time}</p>
              <p onClick={()=>{close(index)}} className='hover:cursor-pointer'>❌</p>
              <p onClick={()=>{editTask(index)}} className='hover:cursor-pointer'>✍🏻</p>
              <input type="checkbox" checked={item.completed} className='hover:cursor-pointer' onChange={() => {isTaskCompleted(index)}}  />
            </div>
          )}
        )}
      </div>
      
      {/* {/* <div> */}
          {/* <dialog id="modal" >
            
            
          </dialog> */}
          {/* <Modal showModal={showModal} toggleModal={toggleModal} /> */}
          {/* <div> */}
            {/* <button onClick={()=>{document.getElementById('modal').showModal() }} className='border-black border-[1px] px-4'>open Modal</button> */}
            {/* <button className='border-black px-4' onClick={toggleModal}>Open</button>
          </div> */}
          
      {/* </div> */}
      
    </div>
  )
}

export default App
