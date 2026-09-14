import type { Lang } from './locales';
export type PageKey = 'home' | 'about' | 'group' | 'individual' | 'course' | 'resources' | 'contact';

export const SOCIALS_BY_LANG: Record<Lang, { instagram: string; telegram: string; whatsapp: string }> = {
  en: {
    instagram: 'https://www.instagram.com/yoga.domenica/',
    telegram: 'https://t.me/domenicayoga',
    whatsapp: 'https://wa.me/33769113567',
  },
  fr: {
    instagram: 'https://www.instagram.com/yoga.domenica/',
    telegram: 'https://t.me/domenicayoga',
    whatsapp: 'https://wa.me/33769113567',
  },
  ua: {
    instagram: 'https://www.instagram.com/domenicayoga/',
    telegram: 'https://t.me/domenicayoga',
    whatsapp: 'https://wa.me/33769113567',
  },
};

export const socialsFor = (lang: Lang) => SOCIALS_BY_LANG[lang];
export const homePath = (lang: Lang) => `/${lang}/`;
export const aboutPath = (lang: Lang) => ({ en: '/en/about/', fr: '/fr/a-propos/', ua: '/ua/pro-mene/' }[lang]);
export const groupPath = (lang: Lang) => ({ en: '/en/online-group-yoga/', fr: '/fr/cours-yoga-en-ligne/', ua: '/ua/grupovi-online-trenuvannya/' }[lang]);
export const individualPath = (lang: Lang) => ({ en: '/en/one-to-one-yoga/', fr: '/fr/seances-individuelles/', ua: '/ua/individualni-trenuvannya/' }[lang]);
export const coursePath = (lang: Lang) => ({ en: '/en/8-week-course/', fr: '/fr/programme-8-semaines/', ua: '/ua/kurs-8-tyzhniv/' }[lang]);
export const resourcesPath = (lang: Lang) => ({ en: '/en/resources/', fr: '/fr/ressources/', ua: '/ua/materialy/' }[lang]);
export const contactPath = (lang: Lang) => ({ en: '/en/contact/', fr: '/fr/contact/', ua: '/ua/kontakty/' }[lang]);

export const legalPath = (lang: Lang) => ({ en: '/en/legal-information/', fr: '/fr/informations-legales/', ua: '/ua/yurydychna-informatsiia/' }[lang]);
export const privacyPath = (lang: Lang) => ({ en: '/en/privacy-policy/', fr: '/fr/politique-confidentialite/', ua: '/ua/polityka-konfidentsiinosti/' }[lang]);
export const termsPath = (lang: Lang) => ({ en: '/en/terms-of-service/', fr: '/fr/conditions-de-service/', ua: '/ua/umovy-nadannia-posluh/' }[lang]);

export const pathForPage = (lang: Lang, key: PageKey) => ({
  home: homePath(lang), about: aboutPath(lang), group: groupPath(lang), individual: individualPath(lang), course: coursePath(lang), resources: resourcesPath(lang), contact: contactPath(lang)
}[key]);

export const homeAlternates = { en: '/en/', fr: '/fr/', ua: '/ua/' } as const;
export const aboutAlternates = { en: '/en/about/', fr: '/fr/a-propos/', ua: '/ua/pro-mene/' } as const;
export const groupAlternates = { en: '/en/online-group-yoga/', fr: '/fr/cours-yoga-en-ligne/', ua: '/ua/grupovi-online-trenuvannya/' } as const;
export const individualAlternates = { en: '/en/one-to-one-yoga/', fr: '/fr/seances-individuelles/', ua: '/ua/individualni-trenuvannya/' } as const;
export const courseAlternates = { en: '/en/8-week-course/', fr: '/fr/programme-8-semaines/', ua: '/ua/kurs-8-tyzhniv/' } as const;
export const resourcesAlternates = { en: '/en/resources/', fr: '/fr/ressources/', ua: '/ua/materialy/' } as const;
export const contactAlternates = { en: '/en/contact/', fr: '/fr/contact/', ua: '/ua/kontakty/' } as const;

export const legalAlternates = { en: '/en/legal-information/', fr: '/fr/informations-legales/', ua: '/ua/yurydychna-informatsiia/' } as const;
export const privacyAlternates = { en: '/en/privacy-policy/', fr: '/fr/politique-confidentialite/', ua: '/ua/polityka-konfidentsiinosti/' } as const;
export const termsAlternates = { en: '/en/terms-of-service/', fr: '/fr/conditions-de-service/', ua: '/ua/umovy-nadannia-posluh/' } as const;

export const primaryContact = (lang: Lang) => lang === 'ua'
  ? { label: 'Telegram', href: SOCIALS_BY_LANG[lang].telegram }
  : { label: 'WhatsApp', href: SOCIALS_BY_LANG[lang].whatsapp };
