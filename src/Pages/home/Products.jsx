import React from 'react'
import img from './products-img/1.png'
const Products = ({img, name, price}) => {
  return (
    <div className='lg:w-[250px] lg:h-[250px] w-[200px] h-[200px]  flex flex-col justify-center'>
        <img src={img} alt="" />
        <div className=' bg-grey text-white rounded-b-2xl p-2'>
            <p className=' font-semibold ml-2'>{name}</p>
            <p className='ml-2'>{price}</p>
        </div>

    </div>
  )
}

export default Products