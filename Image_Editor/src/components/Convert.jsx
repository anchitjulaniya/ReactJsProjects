import React from 'react'
import './folder.css'
import { useRef } from 'react';

function Convert() {

  const fileInputRef = useRef(null);

  const handleOnClick = ()=>{
    console.log('clicked');
    fileInputRef.current.click();
  }
  const handleFileChange = (e)=>{
    console.log(e.target.files[0]);
  }


  return (
    <div className='text-white flex flex-col items-center h-[60vh] justify-center gap-8'>
        <h1 className='font-semibold text-4xl'>Image Converter</h1>
        <p className='text-[rgb(108,117,125)]'>Convert your images files to any format</p>
        <button onClick={handleOnClick} className="button mt-10">
          <div className="container">
            <div className="folder folder_one"></div>
            <div className="folder folder_two"></div>
            <div className="folder folder_three"></div>
            <div className="folder folder_four"></div>
          </div>
          <div className="active_line"></div>
          <span className="text">File Explorer</span>
        </button>
        <input className='hidden' type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleFileChange}
        />

    </div>

  )
}

export default Convert