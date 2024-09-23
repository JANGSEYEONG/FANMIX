export const BOARD_TYPE = {
  FAN: 'FAN',
  COMMUNITY: 'COMMUNITY',
} as const;

export type BoardType = keyof typeof BOARD_TYPE;
