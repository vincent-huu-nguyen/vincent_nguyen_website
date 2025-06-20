import React from 'react'
//import {FaLinkedin, FaGitHub, FaSoundcloud } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link component from React Router

const Footer = () => {
    let Links = [
        { name: "HOME", url: "/" },
        { name: "ABOUT", url: "/about" },
        { name: "PORTFOLIO", url: "/portfolio" },
        { name: "CONTACT", url: "/contact" },
    ];

    return (
        <div className='shadow-md w-full fixed bottom-0 left-0 z-10'>
            <div className='md:flex items-center justify-center bg-[#181818] py-1 md:px-10 px-7'>
                <p className='text-white hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text'>
                    @ 2025 vincent-nguyen.vercel.app
                </p>
            </div>
        </div>
    )
}

export default Footer