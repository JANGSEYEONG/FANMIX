import { cn } from '@/lib/utils';
import { VscGlobe } from 'react-icons/vsc';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

const LOCALES = [
  { code: 'ko', label: 'KR' },
  { code: 'en', label: 'EN' },
] as const;

const ChangeLanguage = () => {
  const pathname = usePathname();
  const currentLocale = useLocale();
  return (
    <div className="mt-2.5 flex items-center gap-2 h2-sb">
      <VscGlobe className="h-6 w-6" />
      {LOCALES.map(({ code, label }) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          className={cn('cursor-pointer text-neutral-300', currentLocale !== code && 'opacity-50')}>
          {label}
        </Link>
      ))}
    </div>
  );
};
export default ChangeLanguage;
