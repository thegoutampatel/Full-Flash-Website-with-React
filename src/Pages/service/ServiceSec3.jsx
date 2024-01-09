import React from 'react'
import Component4 from '/src/assets/images/Component4.svg'


const ServiceSec3 = () => {
  return (
    <div className=' bg-grey w-full flex flex-col items-center  py-10 lg:py-20 mt-10 '>

        <div className=' flex flex-col lg:flex-row gap-5 '>
        
            <img src={Component4} alt="" className='lg:w-[450px] lg:h-[400px] w-[300px] h-[400] m-auto pt-5 lg:pt-0 lg:m-0  '/>   

            <div className=' flex flex-col justify-center mx-4 lg:mx-0 items-start gap-5'>
                <h3 className=' text-h3-sm lg:text-h3  text-white font-semibold'>Put Your Trash</h3>
                <h1 className=' text-light-grey text-h1-sm lg:text-h1 font-bold leading-normal'>
                We do Collect and Recycle
                </h1>
                <p className='text-white lg:w-[40vw]'>
                We do prioritize the fulfillment of customer needs for a product and service, rather than solely focusing on the creation of a new "eco-product" that may not have a demand, enabling the regular market forces to come into play, operating based on the principles of supply and demand.
                </p>
                
            </div>
        
        </div>
    </div>
  )
}

export default ServiceSec3