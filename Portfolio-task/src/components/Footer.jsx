import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithubSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='h-[80px] min-h-[80px] flex gap-5 duration-1000 ease-in-out items-center justify-start px-10 text-[rgb(174,188,198)]'>
      <span className='group flex items-center '>
        <IoIosMail className='text-[rgb(174,188,198)] h-[30px] w-[30px] mr-1 group-hover:text-[rgb(0,216,182)]' />
        <span className='group-hover:text-[rgb(0,216,182)] duration-1000 ease-in-out group-hover:block hidden'>Email - AnchitJulaniyaOfficial@gmail.com</span>
      </span>
     
      <span className='group flex items-center'>
      <FaLinkedin className='text-[rgb(174,188,198)] h-[24px] w-[30px] mr-1 group-hover:text-[rgb(0,216,182)]' />
        <span className='group-hover:text-[rgb(0,216,182)] group-hover:block hidden'>LinkedIn - anchitjulaniya</span>
      </span>
      
      <span className='group flex items-center '>
        <FaGithubSquare className='text-[rgb(174,188,198)] h-[24px] w-[30px] mr-1 group-hover:text-[rgb(0,216,182)]' />
        <span className='group-hover:text-[rgb(0,216,182)] group-hover:block hidden'>Github - anchitjulaniya</span>
      </span>
      
      <span className='group flex items-center '>
        <FaTwitter className='text-[rgb(174,188,198)] h-[24px] w-[30px] mr-1 group-hover:text-[rgb(0,216,182)]' />
        <span className='group-hover:text-[rgb(0,216,182)] group-hover:block hidden'>Twitter - anchitjulaniya</span>
      </span>
      
      
      
    </div>
  );
}

export default Footer;
