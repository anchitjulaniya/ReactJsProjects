import { useState } from "react"

const Createtask = ()=>{
    const [task, setTask] = useState([]);
    const createTask = () => {
        if(document.getElementById('input').value.trim() !== "") {
      setTask([...task, { title: document.querySelector('.input').value, task: document.querySelector('.input').value, completed: false,time: new Date().toLocaleTimeString(), date: new Date().toLocaleDateString(),}])
        }
    }
    return (
        <div className="z-10 w-[100%] h-[100vh] bg-[rgba(0,0,0,0.2)] flex items-center justify-center">
            <div className="w-[500px] h-[400px] rounded-md bg-white text-black px-4 py-3">
                <h1 className="text-black">Hello world</h1>
                <button onClick={()=>{createTask()}} className="border-black border-2 px-4">Create</button>
            </div>
        </div>
    )
}

export default Createtask;
