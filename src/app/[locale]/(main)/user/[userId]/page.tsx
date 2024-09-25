import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('유저 정보'),
  };
}

export default function UserProfilePage() {
  return <div>타 유저 상세 페이지(활동내역)</div>;
}
