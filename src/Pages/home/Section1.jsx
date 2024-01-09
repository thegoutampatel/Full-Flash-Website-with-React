import React from 'react'
import Nav from '../../components/Nav'
import Component3 from '/src/assets/images/Component3.svg'

const Section1 = () => {
  return (
    <div className=' bg-grey w-full flex flex-col items-center'>

       <div className='my-10'> <Nav/></div>

        <div className=' flex flex-col lg:flex-row gap-5 '>
        
            <div className=' flex flex-col justify-center mx-4 lg:mx-0 items-start gap-5'>
                <h3 className=' text-h3-sm lg:text-h3  text-white font-semibold'>Hi, Folks!</h3>
                <h1 className=' text-light-grey text-h1-sm lg:text-h1 font-bold leading-normal'>Inovation Dedication <br />
                    and Sustainable Solution
                </h1>
                <p className='text-white lg:w-[40vw]'>Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id pharetra
                        ultricies mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean 
                    posuere neque a fermentum donec eros ut. Nullam mi egestas sed facilisis.
                </p>
                <button className=' text-white border px-4 py-1 rounded-lg font-semibold'>view Details</button>
            </div>

            <img src={Component3} alt="" className='lg:w-[450px] lg:h-[488px] w-[300px] h-[400] m-auto pt-5 lg:pt-0 lg:m-0'/>   
        </div>
    </div>
  )
}

export default Section1