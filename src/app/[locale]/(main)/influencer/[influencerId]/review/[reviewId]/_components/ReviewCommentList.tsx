'use client';

import { cn } from '@/lib/utils';

import { useTranslations } from 'next-intl';
import { useModalStore } from '@/stores/modalStore';
import useInformationToast from '@/hooks/useInformationToast';

import { VscChromeClose } from 'react-icons/vsc';

import { Separator } from '@/components/ui/separator';
import MessageBox from '@/components/common/MessageBox';

import { formatDateToYYMMDD } from '@/lib/date';

const ReviewCommentList = () => {
  const t = useTranslations('review_page');
  // 댓글 삭제 로직 훅으로 빼기, 삭제 시 리액트쿼리 캐시데이터 수정하기
  const openModal = useModalStore((state) => state.openModal);
  const { showConfirmToast } = useInformationToast();
  const handleDeleteComment = (commentId: number) => {
    openModal(
      <MessageBox
        title={t('정말 삭제하시겠어요?')}
        description={t('삭제한 한줄리뷰는 다시 복구할 수 없어요')}
        buttons={[
          {
            text: t('삭제'),
            color: 'orange',
            onClick: () => {
              // 토스트 띄울지는 확정 x
              showConfirmToast(`${commentId}번 댓글이 정상적으로 삭제되었어요.`);
            },
          },
          { text: t('취소'), color: 'gray' },
        ]}
      />,
    );
  };
  return (
    <ul className="w-full bg-neutral-800">
      {commentList.map((comment, index) => (
        <li
          key={comment.commentId}
          className={cn('w-full px-5 pt-5', comment.isMyComment && 'bg-orange-700/[8%]')}>
          <div className="flex flex-col justify-center gap-y-2.5 pb-[15px]">
            {comment.isDeleted ? (
              <DeleteComment isMyComment={comment.isMyComment} />
            ) : (
              <>
                <header
                  className={cn(
                    'flex w-full items-center justify-between',
                    comment.isMyComment ? 'text-orange-500' : 'text-neutral-400',
                  )}>
                  <span className="body3-r">{comment.commenterNickName}</span>
                  <div className="gap-x-2 flex-center">
                    <time className="sub2-m">{formatDateToYYMMDD(comment.createdAt)}</time>
                    {comment.isMyComment && (
                      <VscChromeClose
                        className="h-[18px] w-[18px] text-white hover:scale-transition-105"
                        onClick={() => {
                          handleDeleteComment(comment.commentId);
                        }}
                      />
                    )}
                  </div>
                </header>
                <p className="text-neutral-200 body2-r">{comment.commentContent}</p>
              </>
            )}
          </div>
          {index + 1 !== commentList.length && <Separator className="h-[0.7px] bg-neutral-600" />}
        </li>
      ))}
    </ul>
  );
};

export default ReviewCommentList;

interface DeleteCommentProps {
  isMyComment: boolean;
}
const DeleteComment = ({ isMyComment }: DeleteCommentProps) => {
  const t = useTranslations('review_page');
  return (
    <header className="flex w-full items-center text-neutral-400">
      <span className="text-neutral-500 body3-r">
        {isMyComment ? t('삭제한 댓글이에요') : t('삭제된 댓글이에요')}
      </span>
    </header>
  );
};

const commentList = [
  {
    commentId: 1,
    commenterId: 1,
    commenterNickName: 'A유저',
    commentContent: '하하하하하',
    isMyComment: false,
    isDeleted: false,
    createdAt: new Date(),
  },
  {
    commentId: 2,
    commenterId: 1,
    commenterNickName: 'B유저',
    commentContent:
      '하하하하dkr가나다라마바사아자차하하하하하dkr가나다라마바사아자차하 하하하하dkr가나다라마바사아자차하하하하하dkr가나다라마바사아자차하',
    isMyComment: false,
    isDeleted: false,
    createdAt: new Date(),
  },
  {
    commentId: 3,
    commenterId: 1,
    commenterNickName: 'C유저',
    commentContent: '하하하하하',
    isMyComment: true,
    isDeleted: true,
    createdAt: new Date(),
  },
  {
    commentId: 4,
    commenterId: 1,
    commenterNickName: 'D유저',
    commentContent: '하하하하하',
    isMyComment: false,
    isDeleted: true,
    createdAt: new Date(),
  },
  {
    commentId: 5,
    commenterId: 1,
    commenterNickName: 'F유저',
    commentContent: '하하하하하',
    isMyComment: true,
    isDeleted: false,
    createdAt: new Date(),
  },
];
