import type { Lang } from './locales';

export const utilityPages = {
  en: {
    resources: {
      title: 'Resources — Domenica Yoga',
      description: 'Practical movement education from Domenica Yoga: strength, mobility, yoga technique and body awareness.',
      eyebrow: 'Resources',
      hero: 'Clear explanations. Useful movement. No mystique.',
      lead: 'Short, practical guides to help you understand what your body is doing — and make better choices in practice.',
      articles: [
        ['Why your lower back can feel overloaded in Upward Facing Dog','A simple look at load, core control and what to change in the transition.'],
        ['Neck tension after a day at work','What movement can and cannot change when your neck and upper back feel overloaded.'],
        ['Mobility vs flexibility','Why useful range needs control, not just more stretch.']
      ],
      coming: 'Full articles are coming next.',
      cta: 'Need help with your own practice?',
      ctaText: 'Write to me directly and we’ll choose the right format.'
    },
    contact: {
      title: 'Contact Domenica Yoga',
      description: 'Contact Domenica Yoga directly on WhatsApp, Telegram or Instagram for online group classes, 1:1 sessions and course questions.',
      eyebrow: 'Contact',
      hero: 'One message is enough.',
      lead: 'Tell me what you want to work on and which format interests you. I’ll reply directly — no forms, no sales funnel.',
      primary: 'WhatsApp', secondary: 'Telegram', social: 'Instagram',
      note: 'For training questions, it helps to mention your goal, any current limitations and your time zone.'
    }
  },
  fr: {
    resources: {
      title: 'Ressources — Domenica Yoga',
      description: 'Des ressources pratiques sur le mouvement, la force, la mobilité, la technique du yoga et la conscience corporelle.',
      eyebrow: 'Ressources',
      hero: 'Des explications claires. Du mouvement utile. Sans mystique.',
      lead: 'Des guides courts et pratiques pour mieux comprendre votre corps et faire des choix plus intelligents dans votre pratique.',
      articles: [
        ['Pourquoi le bas du dos peut être surchargé en Chien tête en haut','Charge, contrôle du tronc et ajustements simples dans la transition.'],
        ['Tensions dans la nuque après une journée de travail','Ce que le mouvement peut — et ne peut pas — changer lorsque la nuque et le haut du dos sont surchargés.'],
        ['Mobilité ou souplesse','Pourquoi une amplitude utile a besoin de contrôle, pas seulement de plus d’étirement.']
      ],
      coming: 'Les articles complets arrivent ensuite.',
      cta: 'Besoin d’aide pour votre propre pratique ?',
      ctaText: 'Écrivez-moi directement et nous choisirons le format adapté.'
    },
    contact: {
      title: 'Contacter Domenica Yoga',
      description: 'Contactez Domenica Yoga directement sur WhatsApp, Telegram ou Instagram pour les cours en ligne, les séances 1:1 et le programme.',
      eyebrow: 'Contact',
      hero: 'Un message suffit.',
      lead: 'Dites-moi ce que vous souhaitez travailler et le format qui vous intéresse. Je vous réponds directement — sans formulaire ni tunnel de vente.',
      primary: 'WhatsApp', secondary: 'Telegram', social: 'Instagram',
      note: 'Pour une question sur les séances, précisez si possible votre objectif, vos éventuelles limitations actuelles et votre fuseau horaire.'
    }
  },
  ua: {
    resources: {
      title: 'Матеріали — Domenica Yoga',
      description: 'Практичні матеріали про рух, силу, мобільність, техніку йоги та відчуття тіла від Domenica Yoga.',
      eyebrow: 'Матеріали',
      hero: 'Зрозумілі пояснення. Корисний рух. Без зайвої містики.',
      lead: 'Короткі практичні гайди, щоб краще розуміти тіло й приймати розумніші рішення у практиці.',
      articles: [
        ['Чому поперек може перевантажуватись у собаці мордою вгору','Просто про навантаження, контроль корпусу та що змінити в переході.'],
        ['Напруга в шиї після робочого дня','Що рух може — і чого не може — змінити, коли перевантажені шия та верх спини.'],
        ['Мобільність чи гнучкість','Чому корисна амплітуда потребує контролю, а не лише більшої розтяжки.']
      ],
      coming: 'Повні статті — наступний етап.',
      cta: 'Потрібна допомога саме з твоєю практикою?',
      ctaText: 'Напиши мені напряму — підберемо формат.'
    },
    contact: {
      title: 'Контакти — Domenica Yoga',
      description: 'Напиши Domenica Yoga напряму в Telegram або Instagram щодо групових онлайн-тренувань, 1:1 та курсу.',
      eyebrow: 'Контакти',
      hero: 'Достатньо одного повідомлення.',
      lead: 'Напиши, з чим хочеш попрацювати і який формат цікавить. Я відповім напряму — без форм і зайвих етапів.',
      primary: 'Telegram', secondary: 'Instagram', social: 'Instagram',
      note: 'Для запиту про тренування корисно вказати ціль, актуальні обмеження та часовий пояс.'
    }
  }
} satisfies Record<Lang, any>;
