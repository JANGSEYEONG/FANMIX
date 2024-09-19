import DOM_IDS from '@/constants/domIdentifiers';

import { Metadata } from 'next';

import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';
import { UserAvatar, UserSettingsPanel } from '@/components/domain/user';
import { DeleteAccountButton } from '@/components/domain/auth';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('내 정보 수정'),
  };
}
export default function MyPageEditPage() {
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
          <h2 className="h2-sb">{data.userNickName}</h2>
          <p className="text-neutral-400 body2-r">0000000@gmail.com</p>
        </div>
      </section>
      <Separator className="h-[8px] bg-neutral-900" />
      <section aria-label="사용자 정보 설정" className="mt-8 px-5">
        <UserSettingsPanel userData={data} />
      </section>
      <Separator className="h-[8px] bg-neutral-900" />
      <footer aria-label="회원탈퇴" className="mx-5 mt-8 flex-center">
        <DeleteAccountButton />
      </footer>
    </main>
  );
}
