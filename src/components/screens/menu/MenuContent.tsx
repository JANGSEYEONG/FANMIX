import { SheetClose } from '@/components/ui/sheet';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useInformationToast } from '@/hooks/useInformationToast';

import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/constants/routes';

const MenuContent = () => {
  const t = useTranslations('main_slide_menu');
  const linkList = [
    {
      label: t('인플루언서 찾기'),
      path: ROUTES.INFLUENCER_INDEX.PATH,
      hasBottomSeparator: false,
      isReleased: true,
    },
    { label: t("에디터's PICK"), path: '/editors', hasBottomSeparator: false, isReleased: false },
    {
      label: t('한줄 리뷰'),
      path: ROUTES.REVIEW_INDEX.PATH,
      hasBottomSeparator: true,
      isReleased: true,
    },
    {
      label: t('팬채널'),
      path: ROUTES.FAN_CHANNEL_INDEX.PATH,
      hasBottomSeparator: false,
      isReleased: true,
    },
    {
      label: t('커뮤니티'),
      path: ROUTES.COMMUNITY_INDEX.PATH,
      hasBottomSeparator: false,
      isReleased: false,
    },
    {
      label: t('고객센터'),
      path: ROUTES.CUSTOMER_CENTER.PATH,
      hasBottomSeparator: true,
      isReleased: true,
    },
  ];
  const { showConfirmToast } = useInformationToast();
  const handleClickUnreleased = () => {
    showConfirmToast(t('업데이트를 기다려주세요'), t('곧 멋진 기능으로 찾아뵙겠습니다'));
  };
  return (
    <div>
      <section aria-label="메뉴 리스트">
        <ul className="flex flex-col gap-y-[30px] h1-m">
          {linkList.map(({ path, label, hasBottomSeparator, isReleased }) =>
            isReleased ? (
              <li key={path}>
                <SheetClose asChild className="px-[22px]">
                  <Link href={path}>{label}</Link>
                </SheetClose>
                {hasBottomSeparator && <Separator className="mb-2.5 mt-10 opacity-30" />}
              </li>
            ) : (
              <li key={path}>
                <span className="cursor-pointer px-[22px]" onClick={handleClickUnreleased}>
                  {label}
                </span>
                {hasBottomSeparator && <Separator className="mb-2.5 mt-10 opacity-30" />}
              </li>
            ),
          )}
        </ul>
      </section>
      <section aria-label="19+ 모드 토글" className="mt-[30px] flex items-center justify-between">
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
