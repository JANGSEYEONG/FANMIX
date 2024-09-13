'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import LogoImg from '@/assets/logo/logo_vertical.svg';
import { VscChromeClose } from 'react-icons/vsc';
import { FcGoogle } from 'react-icons/fc';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useRouter } from '@/i18n/routing';

export default function LoginPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="h-full w-full dark-gradient">
      <nav className="mr-5 mt-2.5 flex items-center justify-end">
        <VscChromeClose className="h-6 w-6 hover:scale-transition-105" onClick={handleGoBack} />
      </nav>
      <section className="w-full gap-[50px] flex-col-center">
        <Swiper
          className="mt-[58px] h-[450px] w-full"
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}>
          <SwiperSlide className="pb-6 flex-center">
            <div className="h-full flex-center">
              <LogoImg />
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
        <div className="w-full gap-6 px-5 flex-col-center">
          <button className="h-[52px] w-full bg-neutral-800 flex-center hover:bg-neutral-900">
            <FcGoogle className="mr-4 h-5 w-5" />
            <span className="text-body3-r">Google 계정으로 시작하기</span>
          </button>
          <button className="text-body3-r" onClick={handleGoBack}>
            뒤로가기
          </button>
        </div>
      </section>
    </main>
  );
}
