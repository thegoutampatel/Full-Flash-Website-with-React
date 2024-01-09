import React from 'react'
import Swipper from './Swipper'

const Section4 = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center mt-16'>
       <div className='w-[309px] flex flex-col items-center lg:items-start'>
            <p className=' text-dark-grey text-h4'>Testimonial</p>
            <p className=' text-dark-grey text-h2 font-semibold lg:text-start text-center'>What people say about us.</p>
       </div>
       <div className='lg:w-[600px] w-[300px]'>
            <Swipper/>
       </div>
    </div>
  )
}

export default Section4