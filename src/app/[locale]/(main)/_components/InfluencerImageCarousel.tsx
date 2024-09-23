'use client';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import LogoImg from '@/assets/logo/logo_vertical.svg';

const InfluencerImageCarousel = () => {
  const introImages = [LogoImg, LogoImg, LogoImg, LogoImg];

  return (
    <>
      <Swiper
        className="h-52 w-full"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {introImages.map((Intro, index) => (
          <SwiperSlide key={index} className="pb-6 flex-center">
            <div className="h-full flex-center">
              <Intro />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 h-[86px] w-full orange-600-white-gradient"></div>
    </>
  );
};

export default InfluencerImageCarousel;
