import type { Lang } from './locales';

export const SOCIALS_BY_LANG: Record<Lang, { instagram: string; telegram: string }> = {
  en: {
    instagram: 'https://www.instagram.com/yoga.domenica/',
    telegram: 'https://t.me/domenicayoga',
  },
  fr: {
    instagram: 'https://www.instagram.com/yoga.domenica/',
    telegram: 'https://t.me/domenicayoga',
  },
  ua: {
    instagram: 'https://www.instagram.com/domenicayoga/',
    telegram: 'https://t.me/domenicayoga',
  },
};

export const socialsFor = (lang: Lang) => SOCIALS_BY_LANG[lang];

export const homePath = (lang: Lang) => `/${lang}/`;
export const aboutPath = (lang: Lang) => ({
  en: '/en/about/',
  fr: '/fr/a-propos/',
  ua: '/ua/pro-mene/'
}[lang]);

export const aboutAlternates = {
  en: '/en/about/',
  fr: '/fr/a-propos/',
  ua: '/ua/pro-mene/'
} as const;

export const homeAlternates = {
  en: '/en/',
  fr: '/fr/',
  ua: '/ua/'
} as const;
