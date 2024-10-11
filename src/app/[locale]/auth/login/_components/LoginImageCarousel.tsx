'use client';

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const LoginImageCarousel = () => {
  const introImagesPath = [
    '/assets/images/login/login-1.webp',
    '/assets/images/login/login-2.webp',
    '/assets/images/login/login-3.webp',
    '/assets/images/login/login-4.webp',
  ];
  return (
    <Swiper
      className="mt-[58px] h-[450px] w-full"
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {introImagesPath.map((path) => (
        <SwiperSlide key={path} className="flex-center">
          <div className="relative h-[450px] w-[393px]">
            <Image
              priority
              src={path}
              alt={'로그인 랜딩 이미디'}
              sizes="100%"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LoginImageCarousel;
