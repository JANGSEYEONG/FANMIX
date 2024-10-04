import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';

import MySettingsPanel from './_components/MySettingsPanel';
import EditMyProfileImage from './_components/EditMyProfileImage';
import DeleteAccountButton from './_components/DeleteAccountButton';

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
  return (
    <div className="w-full pb-20 pt-[35px]">
      <section aria-label="유저 프로필 사진 설정" className="mb-9 pt-9">
        <EditMyProfileImage />
      </section>
      <Separator className="h-[8px] bg-neutral-900" />
      <section aria-label="사용자 정보 설정" className="mt-8 px-5">
        <MySettingsPanel />
      </section>
      <Separator className="h-[8px] bg-neutral-900" />
      <footer aria-label="회원탈퇴" className="mx-5 mt-8 flex-center">
        <DeleteAccountButton />
      </footer>
    </div>
  );
}
