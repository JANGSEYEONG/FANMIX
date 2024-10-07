import { LiaBookmark } from 'react-icons/lia';

interface FollowToggleButtonProps {
  influencerId: number;
  isFollowing: boolean;
}
const FollowToggleButton = ({ influencerId, isFollowing }: FollowToggleButtonProps) => {
  console.log(influencerId, isFollowing);
  return (
    <div className="h-7 w-7 rounded-full bg-orange-700 flex-center scale-transition-105">
      <LiaBookmark className="h-5 w-5" />
    </div>
  );
};

export default FollowToggleButton;
