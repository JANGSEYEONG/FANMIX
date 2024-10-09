'use client';

import { useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { LiaFrown } from 'react-icons/lia';
import { ROUTES } from '@/constants/routes';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error_page');
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-full w-full gap-y-10 px-[52px] pb-[14px] flex-col-center">
      <div className="flex-col-center">
        <LiaFrown className="mb-1.5 h-[50px] w-[50px]" />
        <p className="mb-3 h1-sb">{t('무언가 잘못되었어요')}</p>
        <p className="whitespace-pre-line text-center text-neutral-400 body2-r">
          {t('페이지를 불러오는 데 문제가 발생했어요 다시 한번 시도해주세요')}
        </p>
      </div>
      <div className="w-full gap-y-3 flex-col-center">
        <Button variant="destructive" className="w-full body3-m" onClick={() => reset()}>
          {t('다시 시도하기')}
        </Button>
        <Button className="w-full body3-m">
          <Link href={ROUTES.HOME.PATH}>{t('메인 페이지로 가기')}</Link>
        </Button>
      </div>
    </div>
  );
}
