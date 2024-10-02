import { Link } from '@/i18n/routing';

import { SheetClose } from '@/components/ui/sheet';
import { VscChevronRight } from 'react-icons/vsc';
import { useTranslations } from 'next-intl';

import { useInformationToast } from '@/hooks/useInformationToast';

import { ROUTES } from '@/constants/routes';

const QuickLinksNavigation = () => {
  const t = useTranslations('main_slide_menu');
  const linkList = [
    {
      label: t('인플루언서 찾기'),
      path: ROUTES.INFLUENCER_INDEX.PATH,
      isReleased: true,
    },
    { label: t("에디터's PICK"), path: '/editors', isReleased: false },
    {
      label: t('한줄 리뷰'),
      path: ROUTES.REVIEW_INDEX.PATH,
      isReleased: true,
    },
    {
      label: t('팬채널'),
      path: ROUTES.FAN_CHANNEL_INDEX.PATH,
      isReleased: true,
    },
    {
      label: t('커뮤니티'),
      path: ROUTES.COMMUNITY_INDEX.PATH,
      isReleased: false,
    },
  ];

  const { showConfirmToast } = useInformationToast();
  const handleClickUnreleased = () => {
    showConfirmToast(t('업데이트를 기다려주세요'), t('곧 멋진 기능으로 찾아뵙겠습니다'));
  };
  return (
    <nav aria-label="주요 페이지 바로가기">
      <ul className="flex flex-col justify-center gap-y-6 h2-m">
        {linkList.map(({ path, label, isReleased }) =>
          isReleased ? (
            <li key={path}>
              <SheetClose asChild>
                <Link href={path} className="flex items-center gap-x-0.5">
                  <VscChevronRight className="h-5 w-5" aria-hidden="true" />
                  {label}
                </Link>
              </SheetClose>
            </li>
          ) : (
            <li key={path} onClick={handleClickUnreleased}>
              <span className="flex cursor-pointer items-center gap-x-0.5">
                <VscChevronRight className="h-5 w-5" aria-hidden="true" />
                {label}
              </span>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default QuickLinksNavigation;
