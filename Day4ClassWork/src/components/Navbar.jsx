

function Navbar() {
  return (
    <div className='w-[100%] flex justify-between items-center bg-white text-blue-500 py-6 px-20'>
        <div className='flex justify-center items-center gap-2'>
            <p className='text-2xl font-semibold'>HootSuite 🦉</p>
        <div className='hidden cursor-pointer justify-center items-center gap-6 text-[1.1rem] font-semibold lg:flex xl:flex  2xl:flex ml-10'>
          <p>platform</p>
          <p>Plans</p>
          <p>Enterprise</p>
          <p>Resources</p>
          <p>Education</p>
        </div>
        </div> 


        <div className='flex gap-4'>  
            <button>Contact us</button>  
            <button>Log In</button>
        <button
        type="button"
        className=" bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Sign Up
      </button>
        </div>
    </div>
  )
}

export default Navbar