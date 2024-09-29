import { cn } from '@/lib/utils';
import { SheetClose } from '@/components/ui/sheet';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { Fragment } from 'react';

import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/constants/routes';

const MenuContent = () => {
  const t = useTranslations('main_slide_menu');
  const linkList = [
    {
      label: t('인플루언서 찾기'),
      path: ROUTES.INFLUENCER_INDEX.PATH,
      hasSeparator: false,
      isReleased: true,
    },
    { label: t("에디터's PICK"), path: '/editors', hasSeparator: true, isReleased: false },
    { label: t('한줄 리뷰'), path: '/reviews', hasSeparator: false, isReleased: false },
    {
      label: t('팬채널'),
      path: ROUTES.FAN_CHANNEL_INDEX.PATH,
      hasSeparator: false,
      isReleased: true,
    },
    {
      label: t('커뮤니티'),
      path: ROUTES.COMMUNITY_INDEX.PATH,
      hasSeparator: false,
      isReleased: true,
    },
    {
      label: t('고객센터'),
      path: ROUTES.CUSTOMER_CENTER.PATH,
      hasSeparator: true,
      isReleased: true,
    },
  ];

  const handleClickUnreleased = () => {
    alert('아직 준비중인 기능이에요.');
  };
  return (
    <div>
      <section aria-label="메뉴 리스트">
        <ul className="h1-m">
          {linkList.map(({ path, label, hasSeparator, isReleased }) => (
            <Fragment key={path}>
              {isReleased ? (
                <SheetClose asChild>
                  <Link href={path}>
                    <li className={cn('px-[22px]', hasSeparator ? 'mb-10' : 'mb-[30px]')}>
                      {label}
                    </li>
                  </Link>
                </SheetClose>
              ) : (
                <li
                  className={cn('cursor-pointer px-[22px]', hasSeparator ? 'mb-10' : 'mb-[30px]')}
                  onClick={handleClickUnreleased}>
                  {label}
                </li>
              )}
              {hasSeparator && <Separator className="my-[40px] mt-2.5 opacity-30" />}
            </Fragment>
          ))}
        </ul>
      </section>
      <section aria-label="19+ 모드 토글" className="flex items-center justify-between">
        <span className="pl-[22px] text-neutral-200 body1-m">{t('19+ 모드')}</span>
        <div className="gap-2 flex-center">
          <span className="text-neutral-200 body1-sb">OFF</span>
          <Switch disabled />
        </div>
      </section>
    </div>
  );
};

export default MenuContent;
