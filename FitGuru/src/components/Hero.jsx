import bg from '../assets/hero_bg_img.jpg'

const Hero = () => {
    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <img src={bg} className='h-[700px] w-[100%] bg-center' />
            <div className="absolute top-0 left-0 w-full h-[90%] flex justify-center items-center flex-col">
                <h1 className="w-[391px] text-4xl font-extrabold text-white tracking-wider ">FASTER, STRONGER <span className='text-red-500'>FIGHT</span> TO THE END</h1>
            </div>
        </div>
    )
}

export default Hero