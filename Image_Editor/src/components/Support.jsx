import React from 'react'

function Support() {
  return (
    <div className="text-white flex flex-col items-center justify-center gap-8 mt-12 px-10 ">
      <p className="text-[rgb(108,117,125)] px-4 md:px-10 text-center">Few ways you can support the project</p>
      <h2 className="font-semibold text-2xl">Support The Development!</h2>
      <p className="text-[rgb(208,217,125)] px-4 md:px-10 text-center">You can view the source codes of this project, star the project, find bugs and contribute a fix. You can also suggest pickup development of new feature</p>

      <button
        type="button"
        className="rounded-full w-[228px] bg-black duration-300 ease-linear border-white border-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        View the Github Respositiory
      </button>
    {/* --- */}
    <h2 className="font-semibold text-2xl">Sponsor Me!</h2>
      <p className="text-[rgb(208,217,125)] text-center px-4 md:px-10">Hi, I'm Anchit Julaniya. I built Image Editor App to automate my development. With Image Editor App, you can download bulk images at once, remove image backgrounds and also convert images from one format to another :)
</p>

      <button
        type="button"
        className="rounded-full w-[228px] bg-black duration-300 ease-linear border-white border-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Support on Github
      </button>
      
    </div>
  )
}

export default Support