import { z } from 'zod';

export const BOARD_TYPE = {
  FAN: 'FAN',
  COMMUNITY: 'COMMUNITY',
} as const;

export const BOARD_CARD_TYPE = {
  POST: 'POST',
  REVIEW: 'REVIEW',
  COMMENT: 'COMMENT', // 싫어요, 댓글 수 표시 x
  POPULAR_REVIEW: 'POPULAR_REVIEW', // 싫어요 개수 표시 x
  POPULAR_POST: 'POPULAR_POST', // 싫어요 개수 표시 x
} as const;

export type BoardType = keyof typeof BOARD_TYPE;
export type BoardCardType = keyof typeof BOARD_CARD_TYPE;

export interface CommunityCategory {
  categoryId: string;
  categoryName: string;
}

// 게시글 작성 폼 타입 (커뮤니티, 팬채널 공용)
export const postFormSchema = z.object({
  communityId: z.number().min(1),
  title: z.string().min(1),
  content: z.string().min(1),
  image: z
    .custom<File>()
    .refine((file) => !file || file instanceof File)
    .refine((file) => {
      if (!file) return true; // 파일이 없는 경우는 통과
      return ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type);
    })
    .optional(),
});
export type PostFormData = z.infer<typeof postFormSchema>;
