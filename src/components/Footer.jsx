import React from 'react';

const Footer = () => {
  return (
    <div className='relative bg-footer-bg bg-cover bg-center h-[400px] mt-10'>
      
      <div className='absolute bottom-20 left-0 right-0 text-white'>
        <div className='flex items-center justify-evenly '>

          <div className='flex items-center flex-col gap-5'>
          <div>
            <img src='/src/assets/images/logo2.svg' alt="Logo" className='w-[171px] h-[31px]' />
          </div>

          <div className='text-white'>
            <p>+919999999999</p>
            <p>buangin@services.id</p>
          </div>
          </div>

          <div>
            <p className=' text-h5 select-none mb-2'>Contact</p>
            <ul>
              <li className='hover:underline hover:cursor-pointer'>Help/FAQ</li>
              <li className='hover:underline hover:cursor-pointer'>Press</li>
              <li className='hover:underline hover:cursor-pointer'>Affiliates</li>
            </ul>
          </div>

          <div>
            <p className=' text-h5 select-none mb-2'>More</p>
            <ul>
              <li className='hover:underline hover:cursor-pointer'>Airline Fees</li>
              <li className='hover:underline hover:cursor-pointer'>Airline</li>
              <li className='hover:underline hover:cursor-pointer'>Low Fare Tips</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
