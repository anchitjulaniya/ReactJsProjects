import React from 'react'
import { SiConvertio } from "react-icons/si";
import { CiSquareRemove } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import {Link} from 'react-router-dom'




function Footer() {
  return (
    <div style={{boxShadow: 'rgba(240, 240, 240, 0.75) 0px 5px 15px'}} className='fixed left-0 w-full bottom-0 bg-black hidden sm:flex justify-evenly items-center text-white py-2'>
        <Link to="/convert"><div className='flex flex-col items-center justify-center hover:cursor-pointer'>
            <SiConvertio />
            <p>Convert</p>
        </div></Link>

        <Link to="/remove">
        <div className='flex flex-col items-center justify-center hover:cursor-pointer'>
            <CiSquareRemove />
            <p>Remove</p>
        </div>
        </Link>

        <Link to="/search">
        <div className='flex flex-col items-center justify-center hover:cursor-pointer'>
            <FaSearch />
            <p>Search</p>
        </div>
        </Link>

        <Link to="/setting">
        <div className='flex flex-col items-center justify-center hover:cursor-pointer'>
            <IoSettings />
            <p>Setting</p>
        </div>
        </Link>

        <Link to="/support">
        <div className='flex flex-col items-center justify-center hover:cursor-pointer'>
            <MdContactSupport />
            <p>Support</p>
        </div>
        </Link>
        
        
    </div>
  )
}

export default Footer