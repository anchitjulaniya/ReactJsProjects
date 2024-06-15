import { Link } from "react-router-dom";

import React from 'react'

function Navbar() {
  return (
    <div className="flex items-center justify-center shadow-xl py-1 gap-10 text-xl font-semibold">
        <Link to="/signin">SignIn</Link>
        <Link to="/">SignUp</Link>
    </div>
  )
}

export default Navbar