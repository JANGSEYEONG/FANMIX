import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ScrollArea } from '@/components/ui/scroll-area';

// 메인 페이지
export default function MainPage() {
  const t = useTranslations('LoginPage');
  const t2 = useTranslations('MainPage');
  // #20240908.syjang, 아래 내용은 다국어 처리 및 언어 전환 예시로 작성해뒀습니다. 다음 pr 때 삭제 예정입니다.
  return (
    <ScrollArea className="h-full w-full">
      <main className="bg-slate-700">
        메이인
        <h1 className="h-[1500px] text-orange-400">{t('나중에 하기')}</h1>
        <h1>{t2('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
        <hr />
        <Link className="text-orange-1" href="/" locale="en">
          Switch to en
        </Link>
        <hr />
        <Link className="text-darkgray-1" href="/" locale="ko">
          Switch to ko
        </Link>
      </main>
    </ScrollArea>
  );
}
