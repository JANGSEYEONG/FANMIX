import { useTranslations } from 'next-intl';
import MessageText from '@/components/common/MessageText';

const FanChannelAccessMessage = () => {
  const t = useTranslations('fan_channel_page');
  return (
    <MessageText
      className="h-full flex-center"
      message={t(
        '팬채널에 접근할 수 없으신가요? 팔로우한 인플루언서의 팬채널만 입장 가능해요 인플루언서를 팔로우하고 다시 시도해 주세요',
      )}
    />
  );
};

export default FanChannelAccessMessage;
