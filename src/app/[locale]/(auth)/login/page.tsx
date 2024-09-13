'use client';

import { useRouter } from '@/i18n/routing';
import { VscChromeClose } from 'react-icons/vsc';
import LogoImg from '@/assets/logo/logo_vertical.svg';
import { FcGoogle } from 'react-icons/fc';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function LoginPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="h-full w-full dark-gradient">
      <div className="mr-5 mt-2.5 flex items-center justify-end">
        <VscChromeClose className="h-6 w-6 hover:scale-transition-105" onClick={handleGoBack} />
      </div>
      <Swiper
        className="mt-[58px] h-[450px]"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className="w-full flex-center">
          <div className="flex-center">
            <LogoImg className="mb-[119px] mt-[167px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>

      <div className="mx-5 flex-col-center">
        <button className="mb-[24px] mt-[50px] h-[52px] w-full bg-neutral-800 flex-center hover:bg-neutral-900">
          <FcGoogle className="mr-4 h-5 w-5" />
          <span className="body3-r">Google 계정으로 시작하기</span>
        </button>
        <button onClick={handleGoBack}>뒤로가기</button>
      </div>
    </main>
  );
}
