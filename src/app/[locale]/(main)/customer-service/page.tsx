import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Separator } from '@/components/ui/separator';

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

export default function CustomerServicePage() {
  const t = useTranslations('customer_center_page');
  const linkList = [
    {
      label: t('가이드 및 도움말'),
      path: 'https://app.gitbook.com/o/wmG13oklGfavO55FL5qV/s/KW7Z1ZVJbD7SPJlUDmBy/',
    },
    {
      label: t('자주 묻는 질문'),
      path: 'https://app.gitbook.com/o/wmG13oklGfavO55FL5qV/s/KW7Z1ZVJbD7SPJlUDmBy/undefined-1',
    },
    {
      label: t('이용 약관 및 개인정보처리방침'),
      path: 'https://app.gitbook.com/o/wmG13oklGfavO55FL5qV/s/KW7Z1ZVJbD7SPJlUDmBy/undefined-2',
    },
    {
      label: t('문의하기'),
      path: 'https://app.gitbook.com/o/wmG13oklGfavO55FL5qV/s/KW7Z1ZVJbD7SPJlUDmBy/undefined-3',
    },
  ];
  return (
    <div className="w-full pb-20 pt-[65px]">
      <section aria-label="고객센터 리스트" className="mx-5">
        <Separator className="mb-[25px] bg-neutral-600" />
        <ul className="flex flex-col body2-r">
          {linkList.map(({ label, path }, index) => (
            <li key={path}>
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer">{`${index + 1}. ${label}`}</a>
              <Separator className="my-[25px] bg-neutral-600" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
