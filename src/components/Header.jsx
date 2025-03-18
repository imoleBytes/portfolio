import React from "react";
import { FaRegMoon } from "react-icons/fa";


const Header = () => {
  return (
    <div className="flex justify-between mb-10">
        <div className="font-pacifico text-2xl">imole<span className="logo-span">.dev</span></div>
        <button className="cursor-pointer flex bg-toggle w-8 h-8 justify-center items-center rounded-full shadow"><FaRegMoon/></button>        
    </div>
  )
};

export default Header;
