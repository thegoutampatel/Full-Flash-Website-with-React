import React from 'react'

export const Section6 = () => {
  return (
    <div className='flex  flex-col lg:flex-row items-center justify-center gap-12 mt-10'>
        <div className='flex flex-col lg:items-start items-center gap-2'>
            <p className=' text-h4 lg:text-h3 text-dark-grey'>Maps</p>
            <p className=' text-h3 font-semibold text-dark-grey lg:h2'>Find your nearest waste bank</p>
            <p className=' text-dark-grey'>Search your waste bank here!</p>
        </div>

        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.126303897105!2d75.86978427527097!3d22.68634162879202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd11cbaf30c5%3A0xeddd100ed6a7f182!2sIT%20park%20indore!5e0!3m2!1sen!2sin!4v1704615810020!5m2!1sen!2sin" 
                    width="400" 
                    height="300" 
                    style={{border:"0" }}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">

            </iframe>
        </div>
    </div>
  )
}
