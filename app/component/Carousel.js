'use client';

import React from 'react'
import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Carousel = () => {

    return (
        <>
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className='carousel'
            >
                <SwiperSlide><Image className='object-cover' alt='slider1' src="/homeimage2.jpg" fill></Image></SwiperSlide>
                <SwiperSlide><Image className='object-cover' alt='slider2' src="/11.jpg" fill></Image></SwiperSlide>
                <SwiperSlide><Image className='object-cover' alt='slider3' src="/12.jpg" fill></Image></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel
