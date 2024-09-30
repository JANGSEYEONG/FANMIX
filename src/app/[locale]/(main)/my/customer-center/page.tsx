import { Fragment } from 'react';
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
    {
      label: t('가이드 및 도움말'),
      link: 'https://app.gitbook.com/o/wmG13oklGfavO55FL5qV/s/KW7Z1ZVJbD7SPJlUDmBy/',
    },
    {
      label: t('자주 묻는 질문'),
      link: 'https://app.gitbook.com/o/wmG13oklGfavO55FL5qV/s/KW7Z1ZVJbD7SPJlUDmBy/undefined-1',
    },
    {
      label: t('이용 약관 및 개인정보처리방침'),
      link: 'https://app.gitbook.com/o/wmG13oklGfavO55FL5qV/s/KW7Z1ZVJbD7SPJlUDmBy/undefined-2',
    },
    {
      label: t('문의하기'),
      link: 'https://app.gitbook.com/o/wmG13oklGfavO55FL5qV/s/KW7Z1ZVJbD7SPJlUDmBy/undefined-3',
    },
  ];
  return (
    <div className="w-full pb-20 pt-7">
      <section aria-label="고객센터 리스트" className="mx-5 flex flex-col gap-[25px] body2-r">
        {linkList.map((linkItem, index) => (
          <Fragment key={linkItem.label}>
            <Separator className="bg-neutral-600" />
            <a
              href={linkItem.link}
              target="_blank"
              rel="noopener noreferrer">{`${index + 1}. ${linkItem.label}`}</a>
          </Fragment>
        ))}
        <Separator className="bg-neutral-600" />
      </section>
    </div>
  );
}
