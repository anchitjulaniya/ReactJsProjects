import { useState, useReducer, useEffect } from "react";

function App() {
  

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(rState))
  },[rState])
  
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-center text-3xl font-semibold mb-10">
        ToDoList using useReducer
      </h1>
      <span className="flex gap-4 justify-center">
        <input
          value={inputTask}
          onChange={(e) => setinputTask(e.target.value)}
          type="text"
          className="w-[300px] outline-none border-black border rounded-md px-2"
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD" });
          }}
          className="bg-red-500 px-4 py-[1px] text-white border-black border rounded-md"
        >
          Add
        </button>
        <button
          onClick={() => {
            
            rState.taskList.filter((task) => task === inputTask.trim());
            setinputTask("");
          }}
          className="bg-red-500 px-4 py-[1px] text-white border-black border rounded-md"
        >
          Search
        </button>
      </span>
      <div
        id="displaycontainer"
        className="border-red-500 rounded-xl border-2 flex flex-col items-center "
      >
        <ul>
          {
            console.log(rState)}
            {
          rState.length == 0
            ? "No Task Added"
            : rState.map((task, index) => {
                return (
                  <li key={index}>
                    {index + 1}. {task}{" "}
                    <button
                      onClick={() => {
                        dispatch({ type: "EDIT", index: index });
                      }}
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "DELETE", index: index });
                      }}
                    >
                      ❌
                    </button>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

export default App;




// 1. file context -> initial state reducer
// 2. userReducer in app.jsx (import initial state, reducer)
// 3. useContext in app.jsx (globally access state, dispatch)
