'use client';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useRouter } from '@/i18n/routing';
import { useModalStore } from '@/stores/modalStore';
import { BiCheck } from 'react-icons/bi';

const SignUpSuccess = () => {
  const { closeModal } = useModalStore();
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
        <p className="mt-2.5 text-h1-sb">회원가입 완료</p>
        <div className="mt-3 text-body2-r text-white/70 flex-col-center">
          <p>지금 바로 닉네임을 설정하고 팬믹스의</p>
          <p>다양한 컨텐츠와 커뮤니티를 만나보세요.</p>
        </div>
      </section>
      <nav className="mb-[70px] w-full gap-3 flex-col-center">
        <Button
          variant="destructive"
          className="h-12 w-full"
          onClick={() => navigateAndCloseModal(ROUTES.MYPAGE_EDIT.PATH)}>
          닉네임 설정하러 가기
        </Button>
        <Button className="h-12 w-full" onClick={() => navigateAndCloseModal(ROUTES.HOME.PATH)}>
          나중에 하기
        </Button>
      </nav>
    </div>
  );
};

export default SignUpSuccess;
