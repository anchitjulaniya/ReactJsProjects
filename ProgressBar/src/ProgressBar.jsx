import { useEffect, useState } from "react"

const ProgressBar = ()=>{
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            if(progress<100){
                setProgress(progress + 1);
                console.log(progress);
            }
        },100)
    },[progress]);
        
    
    
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-semibold">Progress Bar</h1>
            <div className="relative w-[500px] rounded-full overflow-hidden h-[30px] bg-gray-300">
                <p className="absolute left-[230px] top-[3px] text-black font-bold">{progress}%</p>
                <div className={`w-[${ProgressBar}px] h-[30px] rounded-full bg-green-500`}></div>
            </div>
            <p>{progress !== 100 ? "loading...":"Complete!"}</p>

            <button className=" border-black border-[1px] px-3 rounded-md top-[20px] right-[20px] text-xl font-semibold" onClick={()=>{setProgress(0)}}>Reset</button>
        </div>
    )
}

export default ProgressBar;