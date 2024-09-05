import React, { useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
    let Links = [
        { name: "HOME", url: "/" },
        { name: "ABOUT", url: "/about" },
        { name: "PORTFOLIO", url: "/portfolio" },
        { name: "CONTACT", url: "/contact" },
    ];

    let [open, setOpen] = useState(false);

    /*return(
        <div className>
            <h1>test again</h1>
        </div>
    )*/

    return (
        <header>
            <div className='shadow-md w-full fixed top-0 left-0 z-20'>
                <div className='relative md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                    <div className='font-bold text-2xl flex items-center font-[Poppins] text-gray-800 hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text'>
                        VN
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer md:hidden'>
                        {open ? <FiX /> : <FiMenu />}
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-450 ease-in ${open ? 'top-10 h-screen' : 'top-[-490px] h-0'}`} onClick={() => setOpen(false)}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.url} className='text-xl text-dark mx-5 inline-block opacity-65 transition-opacity hover:opacity-100 hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text'>{link.name}</a>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-20"></div>
        </header>
    )
}

export default NavBar