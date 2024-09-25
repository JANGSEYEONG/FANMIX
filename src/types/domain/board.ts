export const BOARD_TYPE = {
  FAN: 'FAN',
  COMMUNITY: 'COMMUNITY',
} as const;

export const BOARD_CARD_TYPE = {
  POST: 'POST',
  COMMENT: 'COMMENT',
  REVIEW: 'REVIEW',
} as const;

export type BoardType = keyof typeof BOARD_TYPE;
export type BoardCardType = keyof typeof BOARD_CARD_TYPE;
