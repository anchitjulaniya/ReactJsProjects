import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  
  const handleClose = () => {
      setVisible(false)

  }

  return (
    <>
      <div>
        <span className="flex gap-10">
          <button
            onClick = {
              () => {
                setVisible(true)
              }
            }
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            open
          </button>
          
        </span>
      </div>
      <div className={`${!visible?"hidden":""} shadow-2xl rounded-2xl w-[400px] h-[350px] `}>
        <input type="text" name="" id="" placeholder="Enter text" />
        <button 
        onClick={handleClose}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            close
          </button>
      </div>
    </>
  );
}

export default App;
