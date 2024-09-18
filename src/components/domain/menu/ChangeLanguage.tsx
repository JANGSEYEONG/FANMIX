import { RiEarthFill } from 'react-icons/ri';
import { Link, usePathname } from '@/i18n/routing';

const ChangeLanguage = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3">
      <RiEarthFill className="h-6 w-6" />
      <Link href={pathname} locale="ko">
        KR
      </Link>
      /
      <Link href={pathname} locale="en">
        EN
      </Link>
    </div>
  );
};

export default ChangeLanguage;
