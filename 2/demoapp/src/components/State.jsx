import { useState } from "react";
import Image from "./Image";

function Counter(){
    const[state, setState] = useState(0)
    const decreasezCount = () => {
        setState(state-1);
    }
    const increaseCount = () => {
        setState(state+1);
    }
    return (
        <div>
          <span className="text-3xl">Counter Value is : {state}</span><br />

          <button className="border-[1px] px-2 border-black mr-[50px]" onClick={decreasezCount}>decrease</button>
          
          <button className="border-[1px] px-2 border-black" onClick={increaseCount}>Increase</button>
        </div>
    );
}

export default Counter