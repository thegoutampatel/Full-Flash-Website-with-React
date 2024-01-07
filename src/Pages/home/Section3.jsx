import React from 'react'
import Products from './Products'

const Section3 = () => {
  return (
    <div className=' flex flex-col mt-24'>
        <div className=' flex flex-col items-center'>
            <p className=' text-dark-grey text-h4 '>Top Selling</p>
            <p className=' text-dark-grey text-h2 font-semibold'>Waste Processing Product</p>
        </div>

        <div>
            <Products/>
        </div>
    </div>
  )
}

export default Section3