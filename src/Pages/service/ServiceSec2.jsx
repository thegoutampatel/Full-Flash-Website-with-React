import React from 'react'
import Products from '/src/Pages/home/Products'
import img1 from '/src/Pages/service/images/1.png'
import img2 from '/src/Pages/service/images/2.png'
import img3 from '/src/Pages/service/images/3.png'
import img4 from '/src/Pages/service/images/4.png'
import img5 from '/src/Pages/service/images/5.png'
import img6 from '/src/Pages/service/images/6.png'
import img7 from '/src/Pages/service/images/7.png'
import img8 from '/src/Pages/service/images/8.png'
const ServiceSec2 = () => {
  return (
    <div>
        <div className=' flex flex-col mt-24'>
        <div className=' flex flex-col items-center'>
            <p className=' text-dark-grey text-h4 '>Most Popular Material</p>
            <p className=' text-dark-grey text-h2 font-semibold text-center'>The World of Health is Now Within Your Grasp</p>
            <p className=' text-center text-dark-grey'>See examples of some of the most popular materials designed by experts below. New materials every month at no extra cost.</p>
        </div>

        <div className=' grid grid-cols-2 lg:grid-cols-4 gap-y-20 lg:gap-y-24 gap-x-4 lg:gap-x-10 mx-auto mt-[100px]'>
            <Products img={img1} name={'Composing Tools'} price={'RS. 0'}/>
            <Products img={img2} name={'Composter Full Pack'} price={'Rs. 0'}/>
            <Products img={img3} name={'Waste Bin 2in1'} price={'Rs. 0'}/>
            <Products img={img4} name={'Biogas Stove'} price={'Rs. 0'}/>
            <Products img={img5} name={'Magokits Pack'} price={'Rs. 0'}/>
            <Products img={img6} name={'Waste Sorters'} price={'Rs. 0'}/>
            <Products img={img7} name={'Waste Sorters'} price={'Rs. 0'}/>
            <Products img={img8} name={'Waste Sorters'} price={'Rs. 0'}/>
        </div>
    </div>

    </div>
  )
}

export default ServiceSec2