'use client';
import { useTranslations } from 'next-intl';
import { useMyOnePickInfluencer } from '../_hooks/useMyOnePickInfluencer';

import MessageText from '@/components/common/MessageText';
import ComponentSpinner from '@/components/common/spinner/ComponentSpinner';
import OnePickInfluencer from '@/components/domain/influencer/OnePickInfluencer';

const MyOnePickInfluencer = () => {
  const t = useTranslations('one_pick_influencer');
  const { onePickData, isLoading, isError } = useMyOnePickInfluencer();

  if (isLoading) return <ComponentSpinner />;
  if (isError)
    return (
      <MessageText
        message={t('원픽 인플루언서를 불러오는데 문제가 발생했어요 다시 시도해 주세요')}
      />
    );
  if (!onePickData) return null;

  // 원픽 데이터 가져오기..
  return <OnePickInfluencer {...onePickData} communityId={onePickData?.fanChannelId || null} />;
};

export default MyOnePickInfluencer;
