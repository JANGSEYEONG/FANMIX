'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import GoBackButton from '@/components/common/GoBackButton';

export default function NotFound() {
  const t = useTranslations('not_found_page');
  const router = useRouter();
  return (
    <div className="relative h-full w-full gap-y-10 px-8 flex-col-center">
      <button className="absolute right-6 top-2.5">
        <GoBackButton />
      </button>
      <div className="pb-[14px] flex-col-center">
        <p className="text-[50px] font-semibold leading-[70px] fanmix-gradient-text">!</p>
        <p className="mb-[14px] text-[30px] font-semibold leading-[42px] fanmix-gradient-text">
          404 ERROR
        </p>
        <p className="whitespace-pre-line text-center text-neutral-200/70 body2-r">
          {t(
            '찾으시는 페이지를 찾을 수 없습니다 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다 올바른 주소인지 다시 한번 확인해 주세요',
          )}
        </p>
      </div>
      <Button variant="destructive" className="w-full body3-m" onClick={() => router.push('/')}>
        {t('홈으로 가기')}
      </Button>
    </div>
  );
}
