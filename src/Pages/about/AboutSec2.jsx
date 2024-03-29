import React from 'react'
import Aboutimg2 from '/src/Pages/about/images/AboutImg2.png'

const AboutSec2 = () => {
  return (
    <div className=' flex flex-col lg:flex-row gap-8 mb-10 mt-10 justify-center '>

         <div className=' flex flex-col justify-center mx-4 lg:mx-0 items-start'>
             <h3 className=' text-h4-sm lg:text-h4  text-grey'>About me</h3>

             <h1 className=' text-grey text-h1-sm lg:text-h1 font-bold leading-normal'>
                Goals and Objectives
             </h1>

             <p className=' text-grey lg:w-[40vw]'>
             Lorem ipsum dolor sit amet consectetur. Maecenas orci fames ac justo massa odio facilisis vulputate ut. 
             Libero a porta malesuada tortor volutpat habitasse est in vitae. Sed pellentesque aliquam a nunc neque placerat phasellus lectus ac. 
             Adipiscing nibh cursus pretium consectetur. Pellentesque arcu ullamcorper odio id auctor. Sed tristique sodales fames volutpat nunc mauris etiam habitant lacus.
             Nulla sit purus urna platea neque sed aliquam at parturient. Nisi lectus convallis auctor in ultrices. Aliquet vitae cras non nunc. Massa faucibus sed sit nam.
             Aliquam maecenas pellentesque enim odio nec enim vestibulum augue. Orci commodo neque nisl in. Nibh aenean eu aliquet pharetra fringilla tristique venenatis arcu duis. 
            Dolor viverra quisque volutpat erat aliquam a mi mollis.
            Velit amet velit vestibulum imperdiet velit accumsan. Feugiat amet praesent dictum non leo aenean ac leo amet. Cursus nibh odio donec eu ut ultrices. 
            Suscipit nisi odio fringilla arcu consectetur lacus. Facilisis ut pharetra pellentesque a faucibus nisi. Diam varius integer donec nunc mi. Pharetra ipsum lobortis nulla lorem eu. 
            Vestibulum egestas vitae ut sit lectus nec. 
            Hac et ut pellentesque urna arcu egestas accumsan. 
             Nisi morbi augue lacus maecenas. Non nunc cursus fames tellus vulputate donec ac at. Velit rhoncus.
             </p>
         </div>
         <img src={Aboutimg2} alt="" className='w-[350px] h-[500px]  m-auto pt-5 lg:pt-0 lg:m-0'/>   
     </div>
  )
}

export default AboutSec2