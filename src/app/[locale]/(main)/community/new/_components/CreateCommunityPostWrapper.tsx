'use client';

import CreatePostForm from '@/components/domain/board/CreatePostForm';
import CommunityBadgeList from '@/components/domain/community/CommunityBadgeList';
import { usePageInfoStore } from '@/stores/pageInfoStore';
import { useState } from 'react';

const CreateCommunityPostWrapper = () => {
  const { communityId } = usePageInfoStore((state) => state.pageInfo);
  const [selectedCommunityId, setSelectedCommunityId] = useState(communityId || 0);
  return (
    <div className="flex h-full flex-col gap-y-5">
      <CommunityBadgeList
        selectedCommunityId={selectedCommunityId}
        handleSelectCommunity={(selectCommunityId) => setSelectedCommunityId(selectCommunityId)}
      />
      <CreatePostForm
        defaultPostData={{ communityId: selectedCommunityId || 0, title: '', content: '' }}
      />
    </div>
  );
};

export default CreateCommunityPostWrapper;
