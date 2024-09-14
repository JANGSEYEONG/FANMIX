'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import LogoImg from '@/assets/logo/logo_vertical.svg';
import { VscChromeClose } from 'react-icons/vsc';
import { FcGoogle } from 'react-icons/fc';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@/components/ui/button';

import { useTranslations } from 'next-intl';
import useGoBack from '@/hooks/useGoBack';

export default function LoginPage() {
  const t = useTranslations('login_page');
  const { handleGoBack } = useGoBack();

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
          <Button className="h-[52px] w-full flex-center">
            <FcGoogle className="mr-4 h-5 w-5" />
            <span className="text-body3-r">{t('Google 계정으로 시작하기')}</span>
          </Button>
          <button className="text-body3-r" onClick={handleGoBack}>
            {t('뒤로가기')}
          </button>
        </div>
      </section>
    </main>
  );
}
