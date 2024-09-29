'use client';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useRouter } from '@/i18n/routing';
import { useModalStore } from '@/stores/modalStore';
import { useTranslations } from 'next-intl';
import { BiCheck } from 'react-icons/bi';

const SignUpSuccess = () => {
  const t = useTranslations('signup_success');
  const closeModal = useModalStore((state) => state.closeModal);
  const router = useRouter();
  const navigateAndCloseModal = (path: string) => {
    router.push(path);
    setTimeout(() => {
      closeModal();
    }, 500);
  };
  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full gap-10 px-5 flex-col-center dark-gradient">
      <section className="flex-col-center">
        <BiCheck className="h-[60px] w-[60px] text-orange-600" />
        <p className="mt-2.5 h1-sb">{t('회원가입 완료')}</p>
        <div className="mt-3 text-white/70 flex-col-center body2-r">
          <p>{t('지금 바로 닉네임을 설정하고 팬믹스의')}</p>
          <p>{t('다양한 컨텐츠와 커뮤니티를 만나보세요')}</p>
        </div>
      </section>
      <nav className="mb-[70px] w-full gap-3 flex-col-center">
        <Button
          variant="destructive"
          className="h-12 w-full body3-m"
          onClick={() => navigateAndCloseModal(ROUTES.MYPAGE_EDIT.PATH)}>
          {t('닉네임 설정하러 가기')}
        </Button>
        <Button
          className="h-12 w-full body3-r"
          onClick={() => navigateAndCloseModal(ROUTES.HOME.PATH)}>
          {t('나중에 하기')}
        </Button>
      </nav>
    </div>
  );
};

export default SignUpSuccess;
