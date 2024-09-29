'use client';

import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/routing';
import { Switch } from '@/components/ui/switch';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const MenuContent: React.FC = () => {
  const t = useTranslations('main_slide_menu');
  const linkList = [
    { label: t('인플루언서 찾기'), path: ROUTES.INFLUENCER_INDEX.PATH },
    { label: t("에디터's PICK"), path: '' },
    { label: t('한줄 리뷰'), path: ROUTES.SHORT_REVIEW.PATH },
    { label: t('팬채널'), path: ROUTES.FAN_CHANNEL_INDEX.PATH },
    { label: t('커뮤니티'), path: ROUTES.COMMUNITY_INDEX.PATH },
    { label: t('고객센터'), path: ROUTES.CUSTOMER_CENTER.PATH },
  ];

  const adultMode = { label: t('19+ 모드') };
  // 19+ 모드 토글 alert창
  const [isAdultModeOn, setIsAdultModeOn] = useState(false);
  const handleSwitchChange = (checked: boolean) => {
    setIsAdultModeOn(checked);
    alert('아직 준비 중인 서비스입니다.');
  };

  const handleEditorsPick = () => {
    alert('준비 중인 기능입니다.');
  };
  return (
    <div>
      <section aria-label="메뉴 리스트">
        <ul className="list-none">
          {linkList.map((linkItem, index) => (
            <React.Fragment key={index}>
              {linkItem.label === t("에디터's PICK") ? (
                <li className="ml-[22px] cursor-pointer pb-[30px] h1-m" onClick={handleEditorsPick}>
                  {linkItem.label}
                </li>
              ) : (
                <Link href={linkItem.path}>
                  <li className="ml-[22px] pb-[30px] h1-m">{linkItem.label}</li>
                </Link>
              )}
              {index === 1 || index === 5 ? (
                <Separator className="mb-[40px] mt-2.5 opacity-30" />
              ) : null}
            </React.Fragment>
          ))}
        </ul>
      </section>

      <section
        aria-label="19+ 모드 토글"
        className="my-[42px] flex items-center justify-between body1-m">
        <span className="ml-[22px] body1-m">{adultMode.label}</span>
        <div className="gap-2.5 flex-center">
          <span className="body1-sb"> {isAdultModeOn ? 'ON' : 'OFF'}</span>
          <Switch id="adult_mode" checked={isAdultModeOn} onCheckedChange={handleSwitchChange} />
        </div>
      </section>
    </div>
  );
};

export default MenuContent;
