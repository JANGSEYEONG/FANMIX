'use client';

import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { UserAvatar } from '@/components/features/user';
import { DOM_IDS } from '@/constants/domIdentifiers';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function EditMyPage() {
  const data = {
    userNickName: '닉네임이다',
    imageSrc: '', // 비워질 경우, fallback으로 이름 첫글자 표시
    introduction:
      '소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다소개입니다',
    gender: 'FEMALE',
    birthYear: 1900,
    nationality: '한국',
  };

  return (
    <main id={DOM_IDS.CURRENT_SCROLL_PAGE} className="h-full w-full pt-9 page-scrollable-container">
      <section aria-label="유저 프로필 사진 설정" className="mb-9 gap-[18px] flex-col-center">
        <UserAvatar size={82} editable imageSrc={data.imageSrc} userNickName={data.userNickName} />
        <div className="flex gap-1 flex-col-center">
          <h2 className="text-h2-sb">{data.userNickName}</h2>
          <p className="text-body2-r text-neutral-400">0000000@gmail.com</p>
        </div>
      </section>
      <Separator className="h-[6px] bg-neutral-900" />
      <section aria-label="사용자 정보 설정" className="mt-8 px-5">
        <UserProfileGrid userData={data} />
      </section>
      <Separator className="h-[6px] bg-neutral-900" />
      <footer aria-label="회원탈퇴" className="mx-5 mt-8 flex-center">
        <button className="text-body3-r text-neutral-500">회원탈퇴</button>
      </footer>
    </main>
  );
}

interface UserProfileGrid {
  userData: {
    userNickName: string;
    introduction: string;
    gender: string;
    birthYear: number;
    nationality: string;
  };
}

const UserProfileGrid = ({ userData }: UserProfileGrid) => {
  const { isInfluencerModeActive, handleChangeInfluencerMode } = useInfluencerMode(false);

  const profileInfo = [
    { label: '닉네임', value: userData.userNickName },
    { label: '내 소개', value: userData.introduction },
    { label: '성별', value: userData.gender },
    { label: '출생연도', value: userData.birthYear },
    { label: '국적', value: userData.nationality },
  ];

  return (
    <div>
      <ul aria-label="사용자 기본 정보" className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-4">
        {profileInfo.map((row) => (
          <li key={row.label} className="contents">
            {/* 클릭 시 모달 or select 박스 뜨게 수정 필요 */}
            <div className="flex pt-2 text-body3-m text-neutral-200">{row.label}</div>
            <div className="bg-neutral-800 px-4 py-2.5 text-body3-r">{row.value}</div>
          </li>
        ))}
      </ul>
      <div
        aria-label="인플루언서 모드"
        className="mb-[50px] mt-[42px] flex items-center justify-between">
        <label htmlFor="influencer-mode" className="text-body3-m text-neutral-200">
          인플루언서 모드
        </label>
        <div className="gap-2.5 flex-center">
          <span
            className={cn(
              'text-body3-sb',
              isInfluencerModeActive ? 'text-orange-600' : 'text-neutral-200',
            )}>
            {isInfluencerModeActive ? 'ON' : 'OFF'}
          </span>
          <Switch
            id="influencer-mode"
            checked={isInfluencerModeActive}
            onCheckedChange={handleChangeInfluencerMode}
          />
        </div>
      </div>
    </div>
  );
};

const useInfluencerMode = (initialActive: boolean) => {
  const [isInfluencerModeActive, setIsInfluencerModeActive] = useState<boolean>(initialActive);
  const handleChangeInfluencerMode = (checked: boolean) => {
    setIsInfluencerModeActive(checked);
  };
  return { isInfluencerModeActive, handleChangeInfluencerMode };
};
