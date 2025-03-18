import React from 'react';
import { Link } from "react-router-dom";
import { RxHome } from "react-icons/rx";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";





const NavBar = () => {
    return (
        <div className='bg-[#F2F7FC] shadow rounded-2xl p-5 w-fit px-5 justify-self-end mb-5'>
            <ul className='flex gap-5'>                
                <Link to="/">
                    <li className='w-20 h-20 p-2 text-sm rounded-2xl text-white flex flex-col justify-center items-center bg-linear-to-tr from-primary to-secondary'>
                        <RxHome/>
                        <p className=''>Home</p>
                    </li>
                </Link>


                <Link to="/resume">
                    <li className='w-20 h-20 p-2 text-sm rounded-2xl flex flex-col justify-center items-center bg-[#E1E8EF]'>
                        <TiDocumentText/>
                        <p>Resume</p>
                    </li>
                </Link>


                <Link to="/projects">
                    <li className='w-20 h-20 p-2 text-sm rounded-2xl flex flex-col justify-center items-center bg-[#E1E8EF]'>
                        <MdOutlineWorkOutline/>
                        <p>Projects</p>
                    </li>
                </Link>

                <Link to="/contact">
                    <li className='w-20 h-20 p-2 text-sm rounded-2xl flex flex-col justify-center items-center bg-[#E1E8EF]'>
                        <BiSolidContact/>
                        <p>Contact</p>
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default NavBar;
