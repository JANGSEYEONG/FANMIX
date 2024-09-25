import { Button } from '@/components/ui/button';

import { useTranslations } from 'next-intl';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { InfluencerTagList } from './InfluencerTagList';

interface OnePickInfluencerProps {
  onePickData: {
    influencerName: string;
    imageSrc: string;
  };
}

const OnePickInfluencer = ({ onePickData }: OnePickInfluencerProps) => {
  const t = useTranslations('my_page');
  return (
    <div className="w-full gap-5 bg-orange-700/20 px-5 py-6 flex-center">
      <Avatar className="h-[130px] w-[105px] flex-shrink-0 rounded-none">
        <AvatarImage src={onePickData.imageSrc} alt="원픽 인플루언서 사진" />
        <AvatarFallback className="rounded-none bg-neutral-900/80 h1-sb">
          {onePickData.influencerName[0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex w-full flex-col">
        <h2 className="mb-1.5 text-orange-500 sub1-m">{t('MY ONE PICK')}</h2>
        <h3 className="mb-2.5 body2-sb">{onePickData.influencerName}</h3>
        <InfluencerTagList contents={['음악', '보컬', '연예인']} className="mb-5" />
        <Button className="h-8 w-full" variant="destructive">
          {t('팬채널로 이동')}
        </Button>
      </div>
    </div>
  );
};

export default OnePickInfluencer;
