import React, { useState } from 'react';
import Accordion from './Accordian.jsx';

function App() {
    // const [state, setState] = useState(false);

    // const handleClick = () => {
    //     setState(prevState => !prevState); // Toggle state correctly
    //     console.log(state); // This will log the previous state due to async nature of setState
    // }

    return (
        // <div className="App flex flex-col justify-center items-center h-[100vh]">
        //     <div onClick={handleClick} className="hover:cursor-pointer w-[700px] rounded-xl border border-black shadow-2xl px-2 text-4xl duration-900">
        //         Hello
        //         <span className={` ${!state ? "hidden" : "block"} border-black border w-full h-[500px] duration-1000 bg-red-200`}></span>
        //     </div>
        // </div>
        <div className="App">
            <h1 className="text-3xl font-bold text-center mt-10">React Accordion Example</h1>
            <Accordion />
        </div>
    );
}

export default App;
