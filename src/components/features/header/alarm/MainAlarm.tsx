import { VscBell } from 'react-icons/vsc';

const MainAlarm = () => {
  const handleClickAlarm = () => {
    alert('알림 기능 준비중입니다!');
  };
  return <VscBell className="h-6 w-6 hover:scale-transition-105" onClick={handleClickAlarm} />;
};

export default MainAlarm;
