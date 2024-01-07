import React from 'react'
import Products from './Products'
import img1 from './products-img/1.png'
import img2 from './products-img/2.png'
import img3 from './products-img/3.png'
import img4 from './products-img/4.png'
import img5 from './products-img/5.png'
import img6 from './products-img/6.png'

const Section3 = () => {

    return (
    <div className=' flex flex-col mt-24'>
        <div className=' flex flex-col items-center'>
            <p className=' text-dark-grey text-h4 '>Top Selling</p>
            <p className=' text-dark-grey text-h2 font-semibold'>Waste Processing Product</p>
        </div>

        <div className=' grid grid-cols-2 lg:grid-cols-3 gap-y-20 lg:gap-y-32 gap-x-6 lg:gap-x-16 mx-auto mt-[100px]'>
            <Products img={img1} name={'Composing Tools'} price={'₹1500.00'}/>
            <Products img={img2} name={'Composter Full Pack'} price={'₹1620.00'}/>
            <Products img={img3} name={'Waste Bin 2in1'} price={'₹1850.00'}/>
            <Products img={img4} name={'Biogas Stove'} price={'₹1200.00'}/>
            <Products img={img5} name={'Magokits Pack'} price={'₹1150.00'}/>
            <Products img={img6} name={'Waste Sorters'} price={'₹1000.00'}/>
        </div>
    </div>
  )
}

export default Section3