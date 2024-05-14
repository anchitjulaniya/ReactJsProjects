import SearchBox from "./SearchBox";



const Exercise = () => {
    return (
        <div className="flex flex-col items-center bg-[rgb(240,240,240)] text-black">
            <h2>Awesome Exercises You Should Know</h2>
            <SearchBox />
            <div className="w-[600px] flex flex-wrap justify-center gap-10">
                
            </div>
        </div>
    )
}

export default Exercise ;