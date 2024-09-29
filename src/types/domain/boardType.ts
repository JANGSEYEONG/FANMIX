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
