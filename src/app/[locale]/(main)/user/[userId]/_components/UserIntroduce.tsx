interface UserIntroduceProps {
  nickName: string;
  introduce: string;
}
const UserIntroduce = ({ nickName, introduce }: UserIntroduceProps) => {
  if (!introduce) return null;
  return (
    <section aria-label={`${nickName}의 한줄소개`} className="mx-5 mb-8 mt-4">
      <p className="body3-r">{introduce}</p>
    </section>
  );
};

export default UserIntroduce;
