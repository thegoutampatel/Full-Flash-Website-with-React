import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import { Section6 } from './Section6'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className=' flex flex-col'>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section6/>
        <Footer/>
    </div>
  )
}

export default Home