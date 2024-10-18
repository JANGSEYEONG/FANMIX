import { VscMegaphone } from 'react-icons/vsc';

const FanChannelAnnouncementBanner = () => {
  return (
    <aside aria-label="팬채널 공지" className="flex items-center bg-orange-700/70">
      <div className="flex-shrink-0 bg-orange-600 p-[7px]" aria-hidden="true">
        <VscMegaphone className="h-5 w-5" />
      </div>
      <p className="flex-grow truncate px-[15px] py-[7px] body3-m">공지입니다</p>
    </aside>
  );
};

export default FanChannelAnnouncementBanner;
