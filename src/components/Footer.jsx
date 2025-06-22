import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-[#0c0c0c] py-1 md:px-10 px-7'>
            <div className='flex items-center justify-center'>
                <p className='text-white hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text'>
                    © 2025 vincent-nguyen.vercel.app
                </p>
            </div>
        </div>
    );
}

export default Footer;
