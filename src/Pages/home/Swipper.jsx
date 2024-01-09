import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import card1 from './products-img/card1.png'
import card2 from './products-img/card2.png'
import card3 from './products-img/card3.png'

import './SwipperStyle.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Swipper() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={card1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card3}/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
