import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('LoginPage');
  const t2 = useTranslations('MainPage');
  // #20240908.syjang, 아래 내용은 다국어 처리 및 언어 전환 예시로 작성해뒀습니다. 다음 pr 때 삭제 예정입니다.
  return (
    <div>
      <h1>{t('회원가입 완료')}</h1>
      <h1>{t('지금 바로 닉네임을 설정하고 팬믹스의 다양한 컨텐츠와 커뮤니티를 만나보세요')}</h1>
      <h1>{t('나중에 하기')}</h1>
      <h1>{t2('{nickName}님 안녕하세요', { nickName: 'tpdud' })}</h1>
      <hr />
      <Link href="/" locale="en">
        Switch to en
      </Link>
      <hr />
      <Link href="/" locale="ko">
        Switch to ko
      </Link>
    </div>
  );
}
