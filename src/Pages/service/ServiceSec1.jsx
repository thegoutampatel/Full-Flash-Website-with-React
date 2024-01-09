import React from 'react'
import Nav from '../../components/Nav'

const ServiceSec1 = () => {
  return (
    <div>
        <div className=' bg-grey w-full flex flex-col items-center'>

            <div className='my-10'> <Nav/></div>

            <div className=' flex flex-col lg:flex-row gap-5 justify-center items-center mt-4 lg:mt-6'>
    
                <div className=' flex flex-col justify-center items-center'>
                    <h3 className=' text-h5-sm lg:text-h5  text-white'>Information & Education</h3>
                    <h2 className=' text-light-grey text-h2-sm lg:text-h2 font-bold leading-normal'>
                        Waste Flow
                    </h2>

                    <div className=' flex  items-center justify-center lg:gap-10 mb-10 mt-2'>
                        <div className='flex flex-col  w-[140px] items-center justify-center'>
                            <img src="/src/Pages/service/images/drop1.png" alt="drop" className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' />
                            <p className=' text-[8px] lg:text-h6 text-white text-center'>Waste Segregation by Clients</p>
                        </div>

                        <div className='flex flex-col  w-[140px] items-center justify-center'>
                            <img src="/src/Pages/service/images/storage1.png" alt="drop" className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' />
                            <p className=' text-[8px] lg:text-h6 text-white text-center'>Waste Storage at Client's Warehouse</p>
                        </div>

                        <div className='flex flex-col  w-[140px] items-center justify-center'>
                            <img src="/src/Pages/service/images/transfer1.png" alt="drop" className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' />
                            <p className=' text-[8px] lg:text-h6 text-white text-center'>Segregated Waste Collection</p>
                        </div>

                        <div className='hidden lg:flex flex-col  w-[140px] items-center justify-center'>
                            <img src="/src/Pages/service/images/process1.png" alt="drop" className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' />
                            <p className=' text-[8px] lg:text-h6 text-white text-center'>Waste Processing in W4C's Material Recovery Facility</p>
                        </div>

                        <div className=' hidden lg:flex flex-col  w-[140px] items-center justify-center'>
                            <img src="/src/Pages/service/images/landfill1.png" alt="drop" className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' />
                            <p className=' text-[8px] lg:text-h6 text-white text-center'>Residue being Sent to the Landfill</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceSec1