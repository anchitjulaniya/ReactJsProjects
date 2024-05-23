import "./App.css";
import { useState } from "react";

function App() {
  const [droppedItems, setDroppedItems] = useState([]);
  const [items, setItems] = useState([
    {
      id: "a1",
      name: "Item 1",
    },
    {
      id: "a2",
      name: "Item 2",
    },
    {
      id: "a3",
      name: "Item 3",
    },
    {
      id: "a4",
      name: "Item 4",
    },
    {
      id: "a5",
      name: "Item 5",
    },
  ]);
  
  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const item = items.find((item) => item.id === id);
    if (item && !droppedItems.includes(item)) {
      setDroppedItems((prevItems) => [...prevItems, item]);
      setItems((prevItems) => prevItems.filter((i) => i.id !== id));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold pb-10">Drag N Drop</h1>
      <div className="flex justify-center gap-36 h-[80vh] w-[80%] mx-auto">
        <div className="w-1/3 shadow-xl flex flex-col gap-3 h-full px-4 py-2 bg-[rgb(240,240,240)] rounded-lg">
          <p>Drag Items</p>
          {items.map((item) => (
            <span
              key={item.id}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData("id", item.id);
              }}
              className="w-full bg-white h-[100px] border-2 hover:cursor-pointer border-red-500 rounded-lg"
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="w-1/3 h-full px-4 py-2 bg-[rgb(240,240,240)]  rounded-lg shadow-lg">
          <p>Drop Zone</p>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="h-[94%] w-full flex flex-col gap-3 p-2 "
          >
            {droppedItems.length > 0 &&
              droppedItems.map((item) => (
                <span
                  draggable
                  key={item.id}
                  className="w-full h-[100px] bg-white border-2 hover:cursor-pointer border-red-500 rounded-lg"
                >
                  {item.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// ----------------------chart
// src/App.js
// import React from 'react';
// import './App.css';
// import Charts from './Chart.jsx';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <h1>React Fruits Chart</h1> */}
//         {/* <Charts /> */}
//       </header>
//     </div>
//   );
// }

// export default App;
