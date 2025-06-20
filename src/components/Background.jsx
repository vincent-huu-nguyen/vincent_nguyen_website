//import React from 'react'

const Background = () => {
    return (
        <div className="min-h-50 flex items-center justify-center px-16 -z-10">
            <div className="relative w-full max-w-lg">
                <div className="
                    absolute 
                    top-0 
                    right-4 
                    w-72 h-72 
                    bg-purple-700 
                    rounded-full
                    mix-blend-multiply
                    filter blur-xl
                    opacity-50
                    animate-blob
                    ">
                </div>
                <div className="
                    absolute 
                    top-0 
                    left-4 
                    w-72 
                    h-72 
                    bg-green-500 
                    rounded-full
                    mix-blend-multiply
                    filter blur-xl
                    opacity-90
                    animate-blob
                    animation-delay-2
                    ">
                </div>
                <div className="
                    absolute 
                    top-6
                    left-20 
                    w-72 
                    h-72 
                    bg-indigo-500 
                    rounded-full
                    mix-blend-multiply
                    filter blur-xl
                    opacity-80
                    animate-blob
                    animation-delay-8
                    ">
                </div>
                <div className="m-8 relative space-y-4 opacity-0">
                    <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                        <div className="flex-1">
                            <div className="h-4 w-48 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Background;
