import React from 'react'
import Logo from '/public/logo.svg'
import Dinas from '/src/Pages/service/images/Dinas.png'
import jogja from '/src/Pages/service/images/jogja.png'



const ServiceSec4 = () => {
  return (
    <div className='flex justify-center items-center  my-10 gap-10'>
        <img src={Logo} alt="" className='w-[100px] lg:w-[200px]' />
        <img src={Dinas} alt="" className='w-[100px] lg:w-[200px]'/>
        <img src={jogja} alt="" className='w-[100px] lg:w-[200px]'/>
    </div>
  )
}

export default ServiceSec4