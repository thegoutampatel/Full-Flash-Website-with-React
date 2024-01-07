import React from 'react'
import { TbHeartbeat } from "react-icons/tb";
import { BsPersonVideo3 } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const Section2 = () => {
  return (
    <div>
        <div className='flex  gap-4 lg:gap-24 flex-row items-center justify-center pt-8'>
            <div className='flex flex-col items-center justify-center'>
                <p className='  text-h3 lg:text-h1 font-semibold text-dark-grey'>200+</p>
                <p className=' font-semibold  text-dark-grey'>Member</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='  text-h3 lg:text-h1 font-semibold text-dark-grey'>20</p>
                <p className=' font-semibold  text-dark-grey'>Waste Bank</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='  text-h3 lg:text-h1 font-semibold text-dark-grey'>50</p>
                <p className=' font-semibold  text-dark-grey'>Products</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='  text-h3 lg:text-h1 font-semibold text-dark-grey'>150</p>
                <p className=' font-semibold  text-dark-grey'>Course Education</p>
            </div>
        </div>

        <div className=' mt-20 flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <h5 className=' text-h4 text-dark-grey'>Category</h5>
                <h2 className=' text-h2 font-semibold text-dark-grey'>We Offer Best Service</h2>
            </div>

            <div className='flex lg:flex-row flex-col gap-5 mt-5'>
                <div className='flex flex-col justify-center items-center h-[313px] w-[333px] shadow-2xl rounded-lg gap-2'>
                    <TbHeartbeat className=' h-[70px] w-[70px] mb-5' />
                    <p className=' text-h5 font-semibold text-grey'>Information & Education</p>
                    <p className=' text-[16px]  w-[150px] text-grey '>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>

                <div className='flex flex-col justify-center items-center h-[313px] w-[333px] shadow-2xl rounded-lg gap-2'>
                    <BsPersonVideo3 className=' h-[70px] w-[70px] mb-5'/>
                    <p className=' text-h5 font-semibold text-grey'>Course & Training</p>
                    <p className=' text-[16px]  w-[150px] text-grey '>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>

                <div className='flex flex-col justify-center items-center h-[313px] w-[333px] shadow-2xl rounded-lg gap-2'>
                    <FaTrash className=' h-[70px] w-[70px] mb-5' /> 
                    <p className=' text-h5 font-semibold text-grey'>Waste Recycling</p>
                    <p className=' text-[16px]  w-[150px] text-grey '>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2