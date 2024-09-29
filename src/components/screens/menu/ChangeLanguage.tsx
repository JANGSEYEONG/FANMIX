import { VscGlobe } from 'react-icons/vsc';
import { Link, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';

const ChangeLanguage = () => {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const getLinkStyle = (locale: string) => {
    return `${currentLocale === locale ? 'text-white' : 'text-neutral-300'} hover:cursor-pointer`;
  };

  return (
    <div className="flex items-center gap-2 h2-sb">
      <VscGlobe className="h-6 w-6" />
      <Link href={pathname} locale="ko" className={getLinkStyle('ko')}>
        KR
      </Link>
      <Link href={pathname} locale="en" className={getLinkStyle('en')}>
        EN
      </Link>
    </div>
  );
};
export default ChangeLanguage;
