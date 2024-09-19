import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'top_title' });

  return {
    title: t('고객센터'),
  };
}

export default function CustomerCenterPage() {
  const t = useTranslations('customer_center_page');
  const linkList = [
    { label: t('가이드 및 도움말'), link: 'https://www.naver.com' },
    { label: t('자주 묻는 질문'), link: 'https://www.naver.com' },
    { label: t('이용 약관 및 개인정보처리방침'), link: 'https://www.naver.com' },
    { label: t('문의하기'), link: 'https://www.naver.com' },
  ];
  return (
    <main className="h-full w-full pt-[30px]">
      <section aria-label="고객센터 리스트" className="mx-5 flex flex-col gap-[25px] body2-r">
        {linkList.map((linkItem, index) => (
          <React.Fragment key={linkItem.label}>
            <Separator className="bg-neutral-600" />
            <a
              href={linkItem.link}
              target="_blank"
              rel="noopener noreferrer">{`${index + 1}. ${linkItem.label}`}</a>
          </React.Fragment>
        ))}
        <Separator className="bg-neutral-600" />
      </section>
    </main>
  );
}
