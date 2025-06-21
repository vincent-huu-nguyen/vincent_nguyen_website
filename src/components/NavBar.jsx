import React, { useEffect, useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = ({ theme, handleThemeSwitch }) => {
    let Links = [
        { name: "HOME", url: "/" },
        //{ name: "ABOUT", url: "/about" },
        { name: "PORTFOLIO", url: "/portfolio" },
        { name: "CONTACT", url: "/contact" },
    ];

    let [open, setOpen] = useState(false);


    return (
        <header>
            <div className='shadow-md w-full fixed top-0 left-0 z-20'>
                <div className='relative md:flex items-center justify-between bg-[#0a0a0a] py-4 md:px-10 px-7'>
                    <div className='flex items-center gap-4 font-[Poppins] font-bold text-2xl text-[#f7f8f8]'>
                        <div className="bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
                            VN
                        </div>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl text-[#f7f8f8] absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer md:hidden'>
                        {open ? <FiX /> : <FiMenu />}
                    </div>

                    <ul
                        className={`md:flex md:items-center md:pb-0 absolute md:static bg-[#0a0a0a] md:z-auto z-[-1] w-full md:w-auto transition-all duration-450 ease-in
                            ${open ? 'top-0 left-0 h-screen flex flex-col items-center justify-center' : 'top-[-490px] h-0'}
                        `}
                        onClick={() => setOpen(false)}
                    >                        {
                            Links.map((link) => (
                                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                    <a href={link.url} className='text-xl text-dark mx-5 inline-block opacity-65 transition-opacity hover:opacity-100 bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text'>{link.name}</a>
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

/* Put this below the VN div
<button
                            onClick={handleThemeSwitch}
                            className="p-2 bg-violet-300 dark:bg-orange-300 rounded-md"
                            title="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            )}
                        </button>
                        */