
import { useEffect, useState } from "react";
import Loader from "./Loader";



const Exercises = () => {
    const [exerciseResult, setExerciseResult] = useState([]);
    const [loader, setLoader] = useState(false);
    const fetchData = async () => {
        const url = "https://exercisedb.p.rapidapi.com/exercises?";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "c6b77b25a9msh4fe51e21727aad3p171430jsn50b8fc836df7",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        };
    
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          setExerciseResult(result);
         
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(()=>{
        setLoader(true);
        fetchData();
        setLoader(false);
      },[])

    if(loader){
    return <Loader/>
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center text-4xl font-bold py-4">All Exercises</h1>
            <div className="flex flex-wrap justify-center py-10 gap-6 w-[80%]">
            {exerciseResult.map((exercise) => (
                    <div key={exercise.id} className="w-[280px] h-[310px] border-red-500 border-2 bg-white rounded-lg flex flex-col justify-center items-center gap-4">
                        <img src={exercise.gifUrl} width={170} alt="animated GIF url" />
                        <span className="flex gap-4">
                            <p className="text-[12px] flex justify-center items-center font-semibold text-white bg-red-500 rounded-full px-2">{exercise.bodyPart}</p>
                            <p className="text-[12px] flex justify-center items-center font-semibold text-white bg-green-500 rounded-full px-2">{exercise.target}</p>
                            <p className="text-[12px] flex justify-center items-center font-semibold text-white bg-blue-500 rounded-full px-2">{exercise.equipment}</p>
                        </span>
                        <p className="text-[16px] font-bold uppercase text-center">{exercise.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}   

export default Exercises