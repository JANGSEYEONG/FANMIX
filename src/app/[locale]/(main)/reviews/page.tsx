import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import AllReviewsWrapper from './_components/AllReviewsWrapper';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('한줄 리뷰'),
  };
}

// 메인 페이지
export default function ReviewIndexPage() {
  return (
    <div className="flex h-full w-full flex-col pb-20 pt-[35px]">
      <AllReviewsWrapper />
    </div>
  );
}
