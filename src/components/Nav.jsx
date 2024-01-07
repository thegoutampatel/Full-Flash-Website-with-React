import React from 'react'

const Nav = () => {
  return (
    <div className='w-[80vw] h-[60px] bg-white flex items-center justify-between rounded-lg shadow-xl'>
        <img src="/src/assets/images/logo.svg" alt=""  className=' w-[171px] h-[31px] '/>
        <div className='flex gap-3 mr-8 text-dark-grey '>
            <a href="">Home</a>
            <a href="">Service</a>
            <a href="">About</a>
        </div>
    </div>
  )
}

export default Nav