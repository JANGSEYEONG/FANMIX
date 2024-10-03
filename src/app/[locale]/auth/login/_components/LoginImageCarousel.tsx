'use client';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import VerticalLogo from '../../../../../../public/assets/images/logo/logo_vertical.svg';

const LoginImageCarousel = () => {
  const introImages = [VerticalLogo, VerticalLogo, VerticalLogo, VerticalLogo];
  return (
    <Swiper
      className="mt-[58px] h-[450px] w-full"
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
  );
};

export default LoginImageCarousel;
