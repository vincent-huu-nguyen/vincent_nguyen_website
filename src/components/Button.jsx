import React from 'react'

const Button = (props) => {
  return (
    <div className='relative flex justify-center items-center m-10 flex-wrap text-left'>
      <div className='rounded-md bg-[#181818] text-[#f7f8f8] p-1'>
        <button className='bg-[#0a0a0a] py-2 px-6 rounded hover:bg-[#181818] hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text z-20'>
          {props.children}
        </button>
      </div>
    </div>
  )
}

export default Button