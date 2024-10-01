import { useTranslations } from 'next-intl';
import FollowInfluencerCard from './FollowInfluencerCard';

const FollowInfluencerList = () => {
  const t = useTranslations('follow_page');
  return (
    <div className="mt-5 flex flex-col justify-center">
      <nav aria-label="정렬 옵션">
        <ul className="mb-[15px] flex items-center gap-x-[15px] text-neutral-400 body3-r">
          <li>
            <button className="text-lime-400 body3-m" aria-current="true">
              {t('최신팔로우순')}
            </button>
          </li>
          <li>
            <button>{t('최신리뷰순')}</button>
          </li>
          <li>
            <button>{t('이름순')}</button>
          </li>
        </ul>
      </nav>
      <ul aria-label="팔로우 중인 인플루언서 리스트" className="mb-[30px] w-full flex-col-center">
        <li className="w-full">
          <FollowInfluencerCard isOnePick />
        </li>
        <li className="w-full">
          <FollowInfluencerCard isAuthenticated />
        </li>
        <li className="w-full">
          <FollowInfluencerCard />
        </li>
      </ul>
      <p className="text-center text-neutral-500 body3-r">
        {t('팔로우 중인 모든 인플루언서를 확인했어요')}
      </p>
    </div>
  );
};
export default FollowInfluencerList;
