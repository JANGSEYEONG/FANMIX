const PLATFORM_ICONS_FOLDER = '/assets/images/sns/';
export const PLATFORM_ICON_PATH = {
  INSTAGRAM: PLATFORM_ICONS_FOLDER + 'snsInsta.webp',
  X_TWITTER: PLATFORM_ICONS_FOLDER + 'snsX.webp',
  TIKTOK: PLATFORM_ICONS_FOLDER + 'snsTiktok.webp',

  YOUTUBE: PLATFORM_ICONS_FOLDER + 'mediaYoutube.webp',
  AFREECA: PLATFORM_ICONS_FOLDER + 'mediaAfreeca.webp',
  CHZZK: PLATFORM_ICONS_FOLDER + 'mediaChzzk.webp',

  CLASS101: PLATFORM_ICONS_FOLDER + 'plusClass101.webp',
  FANDING: PLATFORM_ICONS_FOLDER + 'plusFanding.webp',
  PATREON: PLATFORM_ICONS_FOLDER + 'plusPatreon.webp',
  FANTRIE: PLATFORM_ICONS_FOLDER + 'plusFantrie.webp',
  LIKEY: PLATFORM_ICONS_FOLDER + 'plusLikey.webp',
  ONLYFANS: PLATFORM_ICONS_FOLDER + 'plusOnlyfans.webp',
  PDING: PLATFORM_ICONS_FOLDER + 'plusPding.webp',
} as const;
export type PlatformType = keyof typeof PLATFORM_ICON_PATH;
