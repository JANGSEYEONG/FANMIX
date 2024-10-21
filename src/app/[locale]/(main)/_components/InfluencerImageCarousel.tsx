'use client';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

const InfluencerImageCarousel = () => {
  const imagesSrc = [
    '/assets/images/banner/mainBanner1.png',
    '/assets/images/banner/mainBanner2.png',
    '/assets/images/banner/mainBanner3.png',
    '/assets/images/banner/mainBanner4.png',
  ];

  return (
    <>
      <Swiper
        className="h-52 w-full"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {imagesSrc.map((imageSrc, index) => (
          <SwiperSlide key={imageSrc} className="flex-center">
            <article className="relative h-full w-full">
              <Image
                priority
                src={imageSrc}
                alt={`메인 배너 ${index}`}
                fill
                className="object-cover"
                sizes="100%"
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 h-[86px] w-full orange-600-white-gradient"></div>
    </>
  );
};

export default InfluencerImageCarousel;
