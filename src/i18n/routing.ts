import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const supportedLocales = ['ko', 'en']; // 지원 언어
export type Locale = (typeof supportedLocales)[number];

export const routing = defineRouting({
  locales: supportedLocales,
  defaultLocale: supportedLocales[0], // 기본 설정 언어
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
