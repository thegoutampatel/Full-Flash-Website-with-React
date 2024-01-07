import React from 'react'
import Swipper from './Swipper'

const Section4 = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center mt-16'>
       <div className='w-[309px] flex flex-col items-start'>
            <p className=' text-dark-grey text-h4'>Testimonial</p>
            <p className=' text-dark-grey text-h2 font-semibold'>What people say about us.</p>
       </div>
       <div>
            <Swipper/>
       </div>
    </div>
  )
}

export default Section4